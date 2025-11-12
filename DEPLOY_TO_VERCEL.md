# 🚀 Deploy Your Voice Bot to Vercel - Step by Step Guide

This guide will help you deploy your voice chatbot to Vercel in just a few minutes. **No coding knowledge required!**

## ✅ Prerequisites

1. A GitHub account (free) - [Sign up here](https://github.com/signup)
2. A Vercel account (free) - [Sign up here](https://vercel.com/signup)
3. A Groq API key (free) - [Get one here](https://console.groq.com)

---

## 📝 Step 1: Get Your Groq API Key (2 minutes)

1. Go to [https://console.groq.com](https://console.groq.com)
2. Sign up or log in with your Google/GitHub account
3. Click on **"API Keys"** in the left sidebar
4. Click **"Create API Key"**
5. Give it a name (e.g., "Voice Bot")
6. **Copy the API key** - you'll need it in Step 4
   - It looks like: `gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - ⚠️ **Important**: Copy it now, you won't see it again!

---

## 📦 Step 2: Push Your Code to GitHub (5 minutes)

### Option A: If you already have Git initialized

1. Open Terminal/Command Prompt in your project folder
2. Run these commands:

```bash
git add .
git commit -m "Ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Option B: If you need to create a new GitHub repository

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `voice-bot` (or any name you like)
3. Make it **Public** (required for free Vercel deployment)
4. Click **"Create repository"**
5. Follow the instructions on the page, or use these commands:

```bash
git init
git add .
git commit -m "Initial commit - Voice Bot"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.**

---

## 🚀 Step 3: Deploy to Vercel (3 minutes)

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** (or log in if you have an account)
3. Choose **"Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your GitHub account
5. Click **"Add New Project"**
6. Find your repository (`voice-bot` or whatever you named it)
7. Click **"Import"**

---

## 🔑 Step 4: Add Your API Key (1 minute)

**This is the most important step!**

1. In the Vercel project setup page, scroll down to **"Environment Variables"**
2. Click **"Add"** or the **"+"** button
3. Add the following:
   - **Name**: `GROQ_API_KEY`
   - **Value**: Paste your Groq API key (from Step 1)
4. Click **"Add"** to save
5. **Important**: Make sure the environment is set to **"Production"** (or select all: Production, Preview, Development)

---

## 🎯 Step 5: Deploy! (2 minutes)

1. Scroll down and click **"Deploy"**
2. Wait 2-3 minutes while Vercel builds your app
3. You'll see a progress bar - wait for it to complete
4. Once done, you'll see: **"Congratulations! Your project has been deployed."**
5. Click on the **URL** (it will look like: `https://your-project-name.vercel.app`)

---

## ✅ Step 6: Test Your Deployment

1. Open the URL in your browser (Chrome or Edge recommended)
2. You should see your Voice Bot interface
3. Click **"Start Listening"**
4. Allow microphone permissions when prompted
5. Ask a question like: "What is your name?"
6. The bot should respond with voice!

---

## 🎉 Success!

Your voice bot is now live and accessible to anyone via the URL!

**Share this URL** with anyone who needs to test your voice bot.

---

## 🔧 Troubleshooting

### ❌ "Groq API key is not configured" error

**Solution**: 
1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Make sure `GROQ_API_KEY` is added
4. Click **"Redeploy"** after adding the variable

### ❌ Speech recognition not working

**Solution**:
- Use **Chrome** or **Edge** browser (best support)
- Make sure you're using **HTTPS** (Vercel provides this automatically)
- Allow microphone permissions when prompted

### ❌ Build fails

**Solution**:
- Check that all files are committed to GitHub
- Make sure `package.json` is in the root directory
- Check the build logs in Vercel for specific errors

### ❌ Can't find my repository in Vercel

**Solution**:
- Make sure your GitHub repository is **Public**
- Refresh the Vercel page
- Make sure you've authorized Vercel to access your GitHub account

---

## 📱 Mobile Testing

Your voice bot works on mobile devices too! Just share the URL and users can:
- Open it in Chrome or Safari on their phone
- Click "Start Listening"
- Speak their questions

---

## 🔄 Updating Your Bot

If you need to make changes:

1. Edit your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Updated bot"
   git push
   ```
3. Vercel will automatically redeploy (takes 1-2 minutes)

---

## 💡 Tips

- **Free Tier**: Vercel's free tier is perfect for this project
- **Custom Domain**: You can add a custom domain later if needed
- **Analytics**: Vercel provides basic analytics for free
- **API Limits**: Groq free tier is very generous - perfect for interviews

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the Vercel deployment logs
2. Check browser console for errors (F12)
3. Make sure your API key is correct
4. Verify all environment variables are set

---

**That's it! Your voice bot is now live and ready for the interview! 🎉**

