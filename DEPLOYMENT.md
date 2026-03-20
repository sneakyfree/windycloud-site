# 🚀 WindyCloud Deployment Guide

Complete guide for deploying the WindyCloud marketing website to Cloudflare Pages.

## 📋 Prerequisites

- Cloudflare account
- Domain `windycloud.com` in Cloudflare DNS (already owned via GoDaddy)
- GitHub or GitLab repository (optional, can deploy directly)

## 🎯 Quick Deploy to Cloudflare Pages

### Option 1: Deploy via Git (Recommended)

1. **Push to GitHub/GitLab**
   ```bash
   # If you haven't already, create a GitHub repo
   git remote add origin https://github.com/YOUR_USERNAME/windycloud-site.git
   git push -u origin master
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages** → **Create a project**
   - Select **Connect to Git**
   - Authorize GitHub/GitLab and select your repo

3. **Configure Build Settings**
   - **Production branch:** `master` (or `main`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave default)

4. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will build and deploy automatically
   - Every push to `master` will auto-deploy

### Option 2: Direct Deploy (No Git)

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy directly from local
wrangler pages deploy dist --project-name=windycloud
```

## 🌐 Custom Domain Setup

1. **Add Custom Domain**
   - In Cloudflare Pages project settings
   - Go to **Custom domains** → **Set up a custom domain**
   - Add `windycloud.com`
   - Add `www.windycloud.com` (redirects to apex)

2. **DNS Configuration** (if not auto-configured)
   - Type: `CNAME`
   - Name: `windycloud.com` or `@`
   - Target: `windycloud-site.pages.dev` (your Cloudflare Pages subdomain)
   - Proxy status: **Proxied** (orange cloud)

3. **SSL/TLS**
   - Cloudflare automatically provisions SSL certificates
   - Ensure SSL/TLS mode is **Full** or **Full (strict)**

## 🔧 Environment Variables (Future)

If you add Stripe integration or API keys later:

1. Go to **Pages** → Your project → **Settings** → **Environment variables**
2. Add variables:
   ```
   VITE_STRIPE_PUBLIC_KEY=pk_live_...
   VITE_API_URL=https://api.windycloud.com
   ```
3. Redeploy to apply changes

## 📊 Analytics Setup

### Cloudflare Web Analytics (Free)

1. Go to **Analytics** → **Web Analytics**
2. Click **Add a site**
3. Enter `windycloud.com`
4. Copy the JS snippet
5. Add to `index.html` before `</body>`:
   ```html
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
   ```

## 🚦 Performance Optimization

Cloudflare Pages automatically provides:

- ✅ Global CDN distribution
- ✅ HTTP/3 and QUIC support
- ✅ Brotli compression
- ✅ Automatic minification
- ✅ DDoS protection
- ✅ Web Application Firewall (WAF)

### Additional Optimizations

1. **Enable Auto Minify**
   - Go to **Speed** → **Optimization**
   - Enable Auto Minify for JavaScript, CSS, HTML

2. **Enable Rocket Loader** (Optional)
   - Can speed up JavaScript load times
   - Test thoroughly before enabling on production

3. **Image Optimization**
   - Use Cloudflare Polish (Pro plan required)
   - Or use Cloudflare Images for dynamic image delivery

## 🔄 Continuous Deployment

Every push to `master` triggers:

1. **Build** — Cloudflare runs `npm run build`
2. **Test** — Vite compiles and bundles
3. **Deploy** — New version goes live globally (~30 seconds)
4. **Rollback** — Previous deployments accessible in Pages dashboard

### Preview Deployments

- Every branch and PR gets a unique preview URL
- Format: `branch-name.windycloud-site.pages.dev`
- Perfect for testing before merging

## 🔐 Security Headers

Add security headers in `public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.windycloud.com
```

## 📱 Test Before Launch

1. **Local Build Test**
   ```bash
   npm run build
   npm run preview
   ```

2. **Mobile Responsiveness**
   - Test on actual devices
   - Use Chrome DevTools device emulation

3. **Performance Audit**
   ```bash
   npm install -g lighthouse
   lighthouse http://localhost:4173 --view
   ```

4. **SEO Check**
   - Verify meta tags render correctly
   - Test Open Graph with [OpenGraph.xyz](https://www.opengraph.xyz/)

## 🎯 Post-Launch Checklist

- [ ] Verify `windycloud.com` loads correctly
- [ ] Test all internal anchor links (`#features`, `#pricing`, etc.)
- [ ] Confirm SSL certificate is active (green lock)
- [ ] Check mobile responsiveness on real devices
- [ ] Verify all Windy ecosystem links work
- [ ] Test form submissions (if added later)
- [ ] Run Lighthouse audit (aim for 90+ on all metrics)
- [ ] Submit to Google Search Console
- [ ] Add to Windy Empire footer links on other sites

## 📈 Monitoring

1. **Cloudflare Analytics**
   - Real-time visitor stats
   - Geographic distribution
   - Popular pages and referrers

2. **Uptime Monitoring**
   - Set up [UptimeRobot](https://uptimerobot.com) (free)
   - Monitor `https://windycloud.com` every 5 minutes
   - Alert via email/Telegram if down

3. **Error Tracking** (Optional)
   - Add [Sentry](https://sentry.io) for JavaScript error tracking
   - Cloudflare Workers can catch and log errors

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Page Refresh

Add `public/_redirects`:
```
/*    /index.html   200
```

### Slow Build Times

- Check for large dependencies
- Review bundle size: `npm run build -- --report`

### SSL Not Working

- Ensure Cloudflare proxy is enabled (orange cloud)
- Set SSL/TLS mode to **Full** or **Full (strict)**
- Wait 15 minutes for certificate provisioning

## 📞 Support

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages
- **Vite Docs:** https://vitejs.dev
- **Tailwind CSS Docs:** https://tailwindcss.com

---

**Ready to deploy? Push to GitHub and connect to Cloudflare Pages. You'll be live in minutes! 🚀**
