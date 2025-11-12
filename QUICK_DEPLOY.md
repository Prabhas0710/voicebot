# ⚡ Quick Deploy Guide - 5 Minutes

## 🎯 Fastest Way to Deploy

### 1. Get Groq API Key (1 min)
- Visit: https://console.groq.com
- Sign up → Create API Key → Copy it

### 2. Push to GitHub (2 min)
```bash
git init
git add .
git commit -m "Deploy voice bot"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/voice-bot.git
git push -u origin main
```
*(Create repo on GitHub first if needed)*

### 3. Deploy to Vercel (2 min)
- Visit: https://vercel.com
- Sign up with GitHub
- Click "Add New Project"
- Import your repository
- Add Environment Variable:
  - Name: `GROQ_API_KEY`
  - Value: (paste your API key)
- Click "Deploy"

### 4. Done! 🎉
- Your bot is live at: `https://your-project.vercel.app`
- Share this URL for testing

---

## ✅ Checklist Before Deploying

- [ ] Groq API key obtained
- [ ] Code pushed to GitHub (public repo)
- [ ] Vercel account created
- [ ] Environment variable `GROQ_API_KEY` added
- [ ] Deployment successful
- [ ] Tested the live URL

---

## 🔗 Important Links

- **Groq Console**: https://console.groq.com
- **Vercel**: https://vercel.com
- **GitHub**: https://github.com

---

**Need detailed instructions?** See `DEPLOY_TO_VERCEL.md`

