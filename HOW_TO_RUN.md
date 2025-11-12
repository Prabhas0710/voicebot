# 🚀 How to Run Your Voice Bot Locally

## Quick Start (3 Steps)

### Step 1: Install Dependencies (if not already done)
```bash
cd /Users/mac8/Desktop/chatbot
npm install
```

### Step 2: Make Sure API Key is Set
Your `.env.local` file should contain:
```
GROQ_API_KEY=your_groq_api_key_here
```

If you don't have a Groq API key:
1. Visit: https://console.groq.com
2. Sign up/Login
3. Create an API key
4. Add it to `.env.local`

### Step 3: Run the Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Open your browser and go to:
```
http://localhost:3000
```

---

## 🎯 Testing Your Bot

1. **Click "Start Listening"** button
2. **Allow microphone permissions** when prompted
3. **Speak your question** clearly
4. **Wait for the response** - the bot will speak back!

### Test Questions:
- "What is your name?"
- "What is your education status?"
- "What is your superpower?"
- "Where do you work?"

---

## 📋 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Check for errors
npm run lint
```

---

## 🌐 Browser Requirements

- ✅ **Chrome** (Recommended - Best support)
- ✅ **Edge** (Recommended - Best support)
- ⚠️ **Safari** (Works but may need user interaction first)
- ❌ **Firefox** (Limited speech recognition support)

**Important**: Use Chrome or Edge for the best experience!

---

## 🔧 Troubleshooting

### ❌ "Module not found" error
**Solution**: Run `npm install` again

### ❌ "GROQ_API_KEY is not configured" error
**Solution**: 
1. Check that `.env.local` exists in the root directory
2. Make sure it contains: `GROQ_API_KEY=your_key_here`
3. Restart the dev server: Stop (Ctrl+C) and run `npm run dev` again

### ❌ Speech recognition not working
**Solution**:
- Use Chrome or Edge browser
- Make sure you're on `http://localhost:3000` (not `https://`)
- Allow microphone permissions when prompted
- Check browser settings if microphone is blocked

### ❌ Port 3000 already in use
**Solution**: 
- Stop other applications using port 3000, OR
- Run on a different port: `npm run dev -- -p 3001`

### ❌ Build errors
**Solution**:
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (should be 18+): `node --version`
- Clear cache: `rm -rf .next` then `npm run dev`

---

## 🎉 Success!

If you see:
- ✅ "Ready" in terminal
- ✅ Voice Bot interface in browser
- ✅ "Start Listening" button works
- ✅ Microphone permissions granted

**You're all set!** Your bot is running locally.

---

## 📝 Next Steps

Once you've tested locally:
1. **Deploy to Vercel** (see `DEPLOYMENT_SUMMARY.md`)
2. **Get your public URL**
3. **Submit the URL** for the interview

---

## 💡 Tips

- Keep the terminal window open while running
- Press `Ctrl+C` in terminal to stop the server
- Changes to code will auto-reload (hot reload)
- Check browser console (F12) for any errors

---

**Need help?** Check the troubleshooting section above or see `DEPLOYMENT_SUMMARY.md` for deployment help.

