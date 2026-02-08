# NAIRmatchu - Quick Deployment Guide

## 🚀 Deployment Checklist

### Before Deployment

- [ ] Update WhatsApp number in `.env.local` and Vercel
- [ ] Add real images/logo to replace placeholders
- [ ] Test all pages and links locally
- [ ] Update meta descriptions for SEO
- [ ] Add Google Analytics ID (optional)

### Vercel Deployment Steps

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Import from GitHub repository
   - Vercel auto-detects Next.js

3. **Configure Environment Variables**
   ```
   NEXT_PUBLIC_APP_URL=https://nairmatchu.com
   NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
   NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi, I'm interested in NAIRmatchu
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

### Custom Domain Setup

1. **In Vercel Dashboard**
   - Go to Project Settings > Domains
   - Add your domain (e.g., nairmatchu.com)

2. **Update DNS Settings**
   - Add CNAME record pointing to Vercel
   - Wait for DNS propagation (can take up to 48 hours)

### Post-Deployment

- [ ] Test all functionality on live site
- [ ] Check mobile responsiveness
- [ ] Test WhatsApp links
- [ ] Verify all pages load correctly
- [ ] Set up monitoring/analytics

### Performance Optimization

- Images: Use Next.js Image component for optimization
- Fonts: Already optimized with next/font
- Caching: Configured in next.config.js
- Lighthouse Score: Aim for 90+ on all metrics

### Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test locally first with `npm run build`

---

**Your NAIRmatchu website is production-ready!** 🎊
