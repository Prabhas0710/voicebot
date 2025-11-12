# Deployment Guide

This guide will help you deploy your voice chatbot to a public URL.

## Quick Deploy to Vercel (Recommended - Easiest)

### Step 1: Prepare Your Code
1. Make sure you've customized the responses in `app/api/chat/route.ts` with your personal answers
2. Commit your code to a GitHub repository

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login (free account works)
2. Click "Add New Project"
3. Import your GitHub repository
4. In the "Environment Variables" section, add:
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key (get it from [platform.openai.com/api-keys](https://platform.openai.com/api-keys))
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete
7. Your app will be live at a URL like: `https://your-project-name.vercel.app`

### Step 3: Test Your Deployment
1. Visit your deployment URL
2. Test the voice functionality
3. Try asking the sample questions

**That's it!** Your chatbot is now live and accessible to anyone via the URL.

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Go to Site settings → Environment variables
6. Add `OPENAI_API_KEY` with your API key value
7. Deploy!

## Getting an OpenAI API Key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up or log in
3. Go to API Keys section
4. Click "Create new secret key"
5. Copy the key (you won't see it again!)
6. Add it to your deployment platform's environment variables

**Note**: OpenAI offers $5 free credit for new accounts, which should be enough for testing and the interview.

## Cost Considerations

- GPT-3.5-turbo is very affordable (~$0.002 per 1K tokens)
- For the interview assessment, you'll likely use less than $1 worth of API calls
- The free $5 credit should be more than sufficient

## Troubleshooting

### "OpenAI API key is not configured" error
- Make sure you added `OPENAI_API_KEY` to your platform's environment variables
- Redeploy after adding the environment variable

### Speech recognition not working
- Use Chrome or Edge browser for best compatibility
- Make sure microphone permissions are granted
- Check that you're using HTTPS (required for speech recognition)

### Deployment fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18+ in your platform settings
- Check build logs for specific errors

## Security Note

Never commit your `.env.local` file or API keys to GitHub. The API key should only be added as an environment variable in your deployment platform.

