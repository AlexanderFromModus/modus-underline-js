# Hosting the Demo Page

This guide covers multiple options for hosting your demo page.

## Quick Start

First, prepare the demo files:

```bash
npm run prepare:demo
```

This will:
1. Build the package (`dist/`)
2. Build demo styles (`assets/css/demo.css`)
3. Copy necessary files to `demo/` directory

## Option 1: GitHub Pages (Recommended)

### Setup

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (or use GitHub Actions)

2. **Using GitHub Actions (Automatic):**
   - The `.github/workflows/deploy-demo.yml` file is already configured
   - Just push to `main` branch and it will auto-deploy
   - Your demo will be available at: `https://yourusername.github.io/modus-underline-js/`

3. **Manual deployment:**
   ```bash
   npm run prepare:demo
   git checkout -b gh-pages
   git add demo/
   git commit -m "Deploy demo"
   git push origin gh-pages
   ```

### Custom Domain (Optional)

Add a `CNAME` file in the `demo/` directory:
```
demo.yourdomain.com
```

## Option 2: Netlify

### Setup

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   npm run prepare:demo
   netlify deploy --prod --dir=demo
   ```

3. **Or connect via Netlify Dashboard:**
   - Go to [netlify.com](https://netlify.com)
   - New site from Git
   - Connect your repository
   - Build command: `npm run prepare:demo`
   - Publish directory: `demo`
   - Deploy!

The `netlify.toml` file is already configured.

## Option 3: Vercel

### Setup

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   npm run prepare:demo
   vercel --prod
   ```

3. **Or connect via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Framework Preset: Other
   - Build Command: `npm run prepare:demo`
   - Output Directory: `demo`
   - Deploy!

The `vercel.json` file is already configured.

## Option 4: Surge.sh

### Setup

1. **Install Surge:**
   ```bash
   npm install -g surge
   ```

2. **Deploy:**
   ```bash
   npm run prepare:demo
   cd demo
   surge
   ```
   Follow the prompts to set up your domain.

## Option 5: Cloudflare Pages

### Setup

1. Go to Cloudflare Dashboard → Pages
2. Create a new project
3. Connect your Git repository
4. Build settings:
   - Build command: `npm run prepare:demo`
   - Build output directory: `demo`
5. Deploy!

## Option 6: Static File Hosting

You can also upload the `demo/` folder to any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any web server

Just upload the contents of the `demo/` directory.

## Updating the Demo

After making changes:

1. Update your code
2. Run: `npm run prepare:demo`
3. Commit and push (if using Git-based hosting)
4. Or redeploy manually

## Troubleshooting

### Bootstrap not loading
- Make sure `index.html` uses the CDN link (already fixed)
- Check browser console for errors

### Styles not loading
- Ensure `assets/css/demo.css` exists
- Run `npm run build:demo` if missing

### JavaScript not working
- Ensure `dist/underline.js` exists
- Run `npm run build` if missing

## Demo URL in README

After deploying, update your `README.md` with the demo URL:

```markdown
## Demo

Live demo: https://your-demo-url.com
```

