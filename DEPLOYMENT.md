# Deployment Guide

This guide will help you deploy your React portfolio to various platforms.

## 🚀 Vercel (Recommended)

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: portfolio
# - Directory: ./
# - Override settings? N
```

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Framework: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click "Deploy"

## 🌐 Netlify

### Option 1: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Option 2: Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 3: Drag & Drop

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area

## 📄 GitHub Pages

### Setup

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Deploy

```bash
# Deploy to GitHub Pages
npm run deploy
```

### Configure GitHub Pages

1. Go to your repository settings
2. Scroll to "Pages" section
3. Source: "Deploy from a branch"
4. Branch: `gh-pages`
5. Folder: `/ (root)`
6. Save

## 🔧 Environment Variables

Create a `.env` file for any environment variables:

```env
# Example environment variables
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 📱 Custom Domain

### Vercel

1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### Netlify

1. Go to your site dashboard
2. Domain management → Add custom domain
3. Update DNS records as instructed

## 🔍 Performance Optimization

### Build Optimization

```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist
```

### Image Optimization

- Use WebP format for images
- Compress images before adding to `public/`
- Consider using a CDN for images

### Code Splitting

```typescript
// Lazy load components
const LazyComponent = lazy(() => import('./Component'));
```

## 🚨 Troubleshooting

### Common Issues

1. **Build fails**: Check for TypeScript errors
2. **Images not loading**: Ensure images are in `public/` folder
3. **Routing issues**: Configure base path in `vite.config.ts`

### Build Commands

```bash
# Check for errors
npm run type-check
npm run lint

# Build and test
npm run build
npm run preview
```

## 📊 Analytics Setup

### Google Analytics

```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics

```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to main.tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

## 🔄 Continuous Deployment

### GitHub Actions (Vercel)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📈 Monitoring

### Performance Monitoring

- **Lighthouse CI**: Automated performance testing
- **Web Vitals**: Core Web Vitals monitoring
- **Bundle Analyzer**: Bundle size analysis

### Error Tracking

- **Sentry**: Error tracking and performance monitoring
- **LogRocket**: Session replay and error tracking

---

**Happy Deploying! 🚀**
