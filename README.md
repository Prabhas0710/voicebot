# Voice Chatbot - 100x Interview Assessment

A voice-enabled chatbot web application built with Next.js, React, and Google Gemini API. This chatbot responds to interview questions with personalized voice responses.

## Features

- 🎤 **Voice Input**: Uses Web Speech API for speech-to-text
- 🔊 **Voice Output**: Text-to-speech using browser's built-in speech synthesis
- 🤖 **AI-Powered**: Integrated with Google Gemini Pro for intelligent responses
- 💬 **Personalized Responses**: Pre-configured to answer interview questions authentically
- 🎨 **Modern UI**: Beautiful, responsive design with smooth animations
- 📱 **Mobile-Friendly**: Works on all devices and browsers

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Google Gemini API** - Gemini Pro for AI responses (free tier available)
- **Web Speech API** - Browser-based speech recognition and synthesis
- **CSS3** - Modern styling with gradients and animations

### Free API Alternatives

If you prefer not to use OpenAI, you can replace it with:
- **Groq API** - Free tier available, very fast
- **Hugging Face Inference API** - Free tier available
- **Anthropic Claude** - Requires API key but offers free tier

To switch, modify `app/api/chat/route.ts` to use the alternative API client.

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- Google Gemini API key (get one from [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

**Note**: The `.env.local` file has already been created with your API key.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

### Quick Deploy (Recommended - 5 minutes)

**See `QUICK_DEPLOY.md` for the fastest deployment guide!**

### Detailed Deployment Guide

**See `DEPLOY_TO_VERCEL.md` for step-by-step instructions with screenshots.**

### Quick Steps:

1. **Get Groq API Key**: Visit [console.groq.com](https://console.groq.com) and create a free API key
2. **Push to GitHub**: Commit and push your code to a public GitHub repository
3. **Deploy to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variable: `GROQ_API_KEY` = (your API key)
   - Click Deploy
4. **Done!** Your bot is live at `https://your-project.vercel.app`

**No manual API key entry required for users** - the API key is configured in Vercel's environment variables.

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Railway
- Render
- AWS Amplify
- Google Cloud Run

## Browser Compatibility

- ✅ Chrome/Edge (Full support)
- ✅ Safari (Partial support - may need user interaction)
- ⚠️ Firefox (Limited speech recognition support)

**Note**: For best experience, use Chrome or Edge browsers.

## Usage

1. Click "Start Listening" to begin voice input
2. Speak your question clearly
3. The bot will process your question and respond with voice
4. You can also click the suggestion buttons for quick questions

## Customization

**Important**: Before deploying, customize the responses to reflect YOUR actual answers!

To customize the responses, edit the `systemPrompt` in `app/api/chat/route.ts` (lines 10-28). Update the following sections with your personal answers:

- **Life Story** (line 15): Replace with your actual life story
- **Superpower** (line 17): Your #1 superpower
- **Growth Areas** (lines 19-22): Your top 3 areas for growth
- **Misconception** (line 24): Common misconception about you
- **Pushing Boundaries** (line 26): How you push your limits

The system prompt uses these to generate natural, conversational responses that sound like you.

## License

MIT

## Support

For issues or questions, please contact the developer.

