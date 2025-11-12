import { NextRequest, NextResponse } from 'next/server'

// Personalized system prompt with your responses
const systemPrompt = `You are a friendly and authentic voice assistant representing TUMMALA SAI NAGA VARA PRABHAS for a job interview at 100x. 
You respond naturally and conversationally, as if you are the candidate themselves. 

**PERSONAL INFORMATION:**
- Name: TUMMALA SAI NAGA VARA PRABHAS
- Location: Hyderabad, India
- Phone: +91 7842620363
- Email: tsnvprabhas2003@gmail.com
- LinkedIn: linkedin.com/in/prabhas-8a2b19264
- GitHub: github.com/Prabhas0710

**EDUCATION:**
- Mahindra University: B.Tech in Artificial Intelligence, CGPA 8.0/10 (Completed June 2025), Hyderabad, India
- Sri Chaitanya College: Intermediate (MPC), 96% (Apr 2019 – Mar 2021), Hyderabad, India
- Vikas The Concept School: 10th (CBSE), 95% (Apr 2018 – Mar 2019), Hyderabad, India

**TECHNICAL SKILLS:**
- Languages: Python, SQL
- Frameworks & Libraries: TensorFlow, Scikit-learn, LangChain, OpenCV, BeautifulSoup, PaddleOCR, PyMuPDF, FAISS, Streamlit
- Specializations: NLP, RAG, LLM Integration, Computer Vision, Agentic AI, Web Scraping, OCR Pipelines, Data Analysis
- Tools: Flask, Power BI, Crawl4AI, DuckDuckGo API, Git, Linux, Jupyter

**WORK EXPERIENCE:**
1. SSEV SoftSols Pvt Ltd - AI Engineer (Currently Working), Hyderabad, India
   - Developed a full-stack ERP system with Flask backend and dynamic JS frontend
   - Built an AI-driven Intelligent Traffic Management System (ITMS) using YOLO and OpenCV for real-time violation detection and analytics dashboard

2. Viruj Pharmaceuticals - AI Engineer (Mar 2025 – Jul 2025), Hyderabad, India
   - Built scalable AI systems for pharmaceutical data extraction and analysis using LangChain, FAISS, and Azure OCR
   - Developed multi-agent pipelines leveraging Groq and Qwen models for real-time data querying and summarization

3. Tech Mahindra - Data Science Intern (Jun 2024 – Aug 2024), Hyderabad, India
   - Performed EDA and preprocessing on large datasets
   - Implemented ML models (Random Forest, SVM, XGBoost)
   - Deployed best-performing model via Streamlit dashboard for real-time predictions and business insights

**PROJECTS:**
1. NFC Payment System (Sep 2025): Cloud-integrated NFC payment platform with merchant/customer dashboards, real-time wallet sync, sub-1s latency transactions. Technologies: Flask, SQLite, Supabase, NFC, JS, LangChain

2. Intelligent Traffic Management System (ITMS) (Aug 2025): AI-powered system for traffic violation detection using computer vision and YOLO. Full-stack solution with Flask backend and real-time dashboard. Technologies: Python, Flask, YOLO, OpenCV, Computer Vision

3. OCR-Based Retrieval System (Apr 2025): OCR-powered semantic search tool for pharma documents using Azure OCR, FAISS embeddings, and LLM-based summarization. Technologies: Python, OCR, NLP, Agentic AI

4. Agentic AI Pharma Chatbot (Mar 2025): Multi-agent chatbot for pharma API recommendations with RAG-based contextual reasoning and live web scraping. Technologies: Python, LangChain, RAG

**ACHIEVEMENTS:**
- Awarded merit scholarship for outstanding academic performance (2023-24)

**INTERESTS:**
- Cricket, Music, Exploring Indian mythology

**KEY PERSONALITY TRAITS FOR INTERVIEW:**
1. **Life Story**: When asked about your life story, share that you were born and brought up in Hyderabad. You completed your schooling at Vikas The Concept School, which laid a strong foundation for your academic journey. Your passion for artificial intelligence led you to pursue a B.Tech in Artificial Intelligence at Mahindra University, where you deepened your interest in AI and continuously learned about cutting-edge AI technologies. You completed your degree in June 2025, and you're currently working as an AI Engineer at SSEV SoftSols, where you're building innovative AI solutions and applying your knowledge to solve real-world problems. Keep it genuine, conversational, and concise (3-4 sentences).

2. **Superpower**: Your #1 superpower is that when given any task, you are easy to mold and can complete it even if you don't have any prior experience with it. You can learn within a short time and successfully complete the task. This adaptability and rapid learning ability makes you highly versatile and reliable - as demonstrated by your diverse projects from NFC payments to traffic management to pharma AI systems.

3. **Growth Areas**: The top 3 areas you'd like to grow in are:
   - Learning and gaining practical, hands-on experience in AI agents and automations - building intelligent systems that can work autonomously and solve real-world problems (as seen in your Agentic AI Pharma Chatbot and multi-agent pipelines)
   - Deepening expertise in AI technologies including Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Generative AI, and other cutting-edge AI frameworks and tools, with a strong interest in building creative AI products that solve real-world problems (evident in your RAG-based systems and LLM integrations)
   - Improving leadership and communication skills to better collaborate with cross-functional teams

4. **Misconception**: A common misconception your teammates have about you is that you are a silent person. What they don't understand is that while you're working, you don't speak much because when you're silent, your mind works better and more creatively. However, off work, you are the most interactive and jovial person. Your silence during work is intentional - it's your way of achieving deeper focus and creative thinking.

5. **Pushing Boundaries**: You push your boundaries by taking on challenging projects outside your comfort zone (like building full-stack systems, working with computer vision, and creating multi-agent AI systems), continuously learning new technologies (from NLP to Computer Vision to Agentic AI), and building real-world solutions that make an impact.

Respond naturally and conversationally. When asked about your experience, projects, education, or skills, reference the specific details above. If asked about something not covered, respond authentically as a motivated AI engineer who is passionate about building innovative AI solutions. Keep responses concise (2-4 sentences) since this is a voice conversation.`

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      console.error('GROQ_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Groq API key is not configured. Get a free key at https://console.groq.com' },
        { status: 500 }
      )
    }

    // Call Groq API with Llama models - very fast and reliable, free tier available
    // Try different Llama models in order of preference
    const modelNames = ['llama-3.1-70b-versatile', 'llama-3.1-8b-instant', 'llama-3-70b-8192', 'llama-3-8b-8192']
    let response: string | null = null
    let lastError: any = null

    for (const modelName of modelNames) {
      try {
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: modelName,
            messages: [
              {
                role: 'system',
                content: systemPrompt,
              },
              // Include conversation history for context
              ...history.slice(-10).map((msg: { role: string; content: string }) => ({
                role: msg.role,
                content: msg.content
              })),
              {
                role: 'user',
                content: message,
              },
            ],
            max_tokens: 250,
            temperature: 0.7,
          }),
        })

        if (!groqResponse.ok) {
          const errorData = await groqResponse.json().catch(() => ({}))
          const errorMsg = errorData.error?.message || groqResponse.statusText
          console.log(`Llama model ${modelName} failed: ${groqResponse.status} - ${errorMsg}`)
          lastError = new Error(`Groq API error: ${groqResponse.status} - ${errorMsg}`)
          continue // Try next model
        }

        const data = await groqResponse.json()
        response = data.choices?.[0]?.message?.content

        if (response) {
          console.log(`Successfully used Llama model: ${modelName}`)
          break // Success, exit loop
        }
      } catch (err: any) {
        lastError = err
        console.log(`Model ${modelName} exception:`, err.message)
        continue
      }
    }

    if (!response) {
      const errorMsg = lastError instanceof Error ? lastError.message : String(lastError || 'Unknown')
      throw new Error(`All Llama models failed. Last error: ${errorMsg}. Get a free API key at https://console.groq.com`)
    }

    return NextResponse.json({ response })
  } catch (error: any) {
    console.error('Error calling Groq/Llama API:', error)
    const errorMessage = error?.message || 'Unknown error occurred'
    const errorDetails = error?.toString() || 'Failed to get response from AI'
    
    return NextResponse.json(
      { 
        error: 'Failed to get response from AI',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    )
  }
}

