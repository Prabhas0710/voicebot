'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import './page.css'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [error, setError] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const isProcessingRef = useRef(false)
  const lastQueryRef = useRef<string>('')

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleQuery = useCallback(async (query: string) => {
    // Prevent duplicate calls - check if same query and processing
    if (isProcessingRef.current && lastQueryRef.current === query) {
      console.log('Already processing the same query, ignoring duplicate call')
      return
    }

    // Prevent duplicate calls - check if processing any query
    if (isProcessingRef.current) {
      console.log('Already processing a query, ignoring duplicate call')
      return
    }

    try {
      isProcessingRef.current = true
      lastQueryRef.current = query
      setError('')
      
      // Add user message to chat history
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: query,
        timestamp: new Date()
      }
      
      // Add user message to state and get updated messages
      let conversationHistory: Array<{ role: string; content: string }> = []
      
      setMessages(prev => {
        const updatedMessages = [...prev, userMessage]
        // Prepare conversation history for API (including the new user message)
        conversationHistory = updatedMessages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
        return updatedMessages
      })

      // Make API call with conversation history (outside state updater)
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            message: query,
            history: conversationHistory
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          const errorMsg = data.error || 'Failed to get response from server'
          const details = data.details ? ` (${data.details})` : ''
          setError(errorMsg + details)
          console.error('API Error:', data)
          setMessages(prev => prev.filter(msg => msg.id !== userMessage.id))
          isProcessingRef.current = false
          lastQueryRef.current = ''
          return
        }

        if (!data.response) {
          setError('No response received from AI')
          setMessages(prev => prev.filter(msg => msg.id !== userMessage.id))
          isProcessingRef.current = false
          lastQueryRef.current = ''
          return
        }

        // Add assistant response to chat history
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.response,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, assistantMessage])
        speakResponse(data.response)
        isProcessingRef.current = false
        lastQueryRef.current = ''
      } catch (fetchErr) {
        const errorMessage = fetchErr instanceof Error ? fetchErr.message : 'An error occurred'
        setError(errorMessage)
        console.error('Error:', fetchErr)
        setMessages(prev => prev.filter(msg => msg.id !== userMessage.id))
        isProcessingRef.current = false
        lastQueryRef.current = ''
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      console.error('Error:', err)
      isProcessingRef.current = false
      lastQueryRef.current = ''
    }
  }, [])

  const speakResponse = (text: string) => {
    if (synthRef.current) {
      synthRef.current.cancel() // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 1

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)

      synthRef.current.speak(utterance)
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Welcome animation - hide after 3 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false)
    }, 3000)

    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (event) => {
        if (event.results.length > 0 && event.results[0].length > 0) {
          const transcript = event.results[0][0].transcript.trim()
          if (transcript && !isProcessingRef.current) {
            handleQuery(transcript)
          }
        }
      }

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        setError(`Speech recognition error: ${event.error}`)
        setIsListening(false)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    } else {
      setError('Speech recognition is not supported in your browser. Please use Chrome or Edge.')
    }

    // Initialize Speech Synthesis
    synthRef.current = window.speechSynthesis

    return () => {
      clearTimeout(welcomeTimer)
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
      if (synthRef.current) {
        synthRef.current.cancel()
      }
    }
  }, [])

  const startListening = () => {
    setError('')
    if (recognitionRef.current) {
      setIsListening(true)
      recognitionRef.current.start()
    }
  }

  const clearChat = () => {
    setMessages([])
    setError('')
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel()
      setIsSpeaking(false)
    }
  }

  return (
    <main className="container">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/VID1.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      {showWelcome && (
        <div className="welcome-overlay">
          <div className="welcome-content">
            <div className="welcome-icon">🎙️</div>
            <h1 className="welcome-title">Welcome to My Voice Bot</h1>
            <div className="welcome-subtitle">Your AI-powered voice assistant</div>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
      <div className={`page-header ${showWelcome ? 'hidden' : ''}`}>
        <h1 className="title">Voice Bot</h1>
      </div>

      <div className={`card ${showWelcome ? 'hidden' : ''}`}>
        <div className="content">
          <div className="controls">
            {!isListening ? (
              <button
                className="btn btn-primary"
                onClick={startListening}
                disabled={isSpeaking}
              >
                <span>🎤 Start Listening</span>
              </button>
            ) : (
              <button
                className="btn btn-stop"
                onClick={stopListening}
              >
                <span>⏹️ Stop Listening</span>
              </button>
            )}

            {isSpeaking && (
              <button
                className="btn btn-secondary"
                onClick={stopSpeaking}
              >
                <span>🔇 Stop Speaking</span>
              </button>
            )}
          </div>

          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}

          <div className="chat-container">
            {messages.length === 0 ? (
              <div className="empty-chat">
                <div className="empty-chat-icon">💬</div>
                <p>Start a conversation by clicking "Start Listening"</p>
                <p className="empty-chat-hint">The AI will remember our conversation!</p>
              </div>
            ) : (
              <div className="message-container">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message-bubble ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
                  >
                    <div className="message-content">
                      <p>{message.content}</p>
                    </div>
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {messages.length > 0 && (
            <button
              className="btn-clear"
              onClick={clearChat}
              disabled={isListening || isSpeaking}
            >
              🗑️ Clear Chat
            </button>
          )}

          <div className="status">
            {isListening && (
              <div className="status-container">
                <span className="status-indicator listening">
                  <span className="pulse-dot"></span>
                  🎤 Listening...
                </span>
              </div>
            )}
            {isSpeaking && (
              <div className="status-container">
                <span className="status-indicator speaking">
                  <span className="wave-animation">🔊</span>
                  Speaking...
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition
    webkitSpeechRecognition: typeof SpeechRecognition
  }
}

