# Quick Start Guide

## 🚀 Get Your Voice Chatbot Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Get Your OpenAI API Key
1. Visit [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key

### Step 3: Create Environment File
Create a file named `.env.local` in the root directory:
```
OPENAI_API_KEY=sk-your-key-here
```

### Step 4: Customize Your Responses (IMPORTANT!)
Open `app/api/chat/route.ts` and update the `systemPrompt` with YOUR actual answers to:
- Life story
- Superpower
- Growth areas
- Misconception
- How you push boundaries

### Step 5: Run Locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in Chrome or Edge.

### Step 6: Test
1. Click "Start Listening"
2. Ask: "What should we know about your life story?"
3. Listen to the response!

### Step 7: Deploy
See `DEPLOYMENT.md` for detailed deployment instructions.

**Recommended**: Deploy to Vercel (takes 5 minutes, completely free)

---

## 🎯 What You Need Before Submission

✅ Customized responses in `app/api/chat/route.ts`  
✅ Working deployment URL (Vercel/Netlify/etc.)  
✅ API key configured in deployment platform  
✅ Tested with all sample questions  

---

## 💡 Tips

- Use Chrome or Edge for best voice recognition
- Grant microphone permissions when prompted
- Speak clearly and wait for the response
- Test all the suggestion buttons

Good luck with your interview! 🎉

