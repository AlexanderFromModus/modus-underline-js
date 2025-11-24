# GitHub Pages Setup Guide

Your demo page is already configured to deploy automatically to GitHub Pages!

## Quick Setup (3 Steps)

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. Save (no need to select a branch - GitHub Actions will handle it)

### 2. Push Your Code

Make sure all files are committed and pushed:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 3. Wait for Deployment

- Go to the **Actions** tab in your repository
- You'll see the workflow running: "Deploy Demo to GitHub Pages"
- Wait for it to complete (usually 1-2 minutes)
- Once it's done, your demo will be live!

## Your Demo URL

After deployment, your demo will be available at:

```
https://YOUR_USERNAME.github.io/modus-underline-js/
```

Replace `YOUR_USERNAME` with your GitHub username.

## How It Works

The `.github/workflows/deploy-demo.yml` file automatically:
1. Builds your package (`npm run build`)
2. Builds demo styles (`npm run build:demo`)
3. Prepares demo files (`npm run prepare:demo`)
4. Deploys to GitHub Pages

Every time you push to the `main` branch, it will automatically rebuild and redeploy!

## Manual Deployment

If you want to trigger a deployment manually:

1. Go to **Actions** tab
2. Click **Deploy Demo to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select branch (usually `main`)
5. Click **Run workflow**

## Custom Domain (Optional)

To use a custom domain:

1. Create a file `demo/CNAME` with your domain:
   ```
   demo.yourdomain.com
   ```

2. Update your DNS settings to point to GitHub Pages
3. Push the changes

## Troubleshooting

### Workflow not running?
- Make sure GitHub Pages is set to use **GitHub Actions** (not a branch)
- Check that the workflow file exists: `.github/workflows/deploy-demo.yml`

### Build failing?
- Check the **Actions** tab for error messages
- Make sure `package.json` has all required scripts
- Verify all dependencies are in `package.json`

### Demo not loading?
- Wait a few minutes after deployment (DNS propagation)
- Check the Actions tab to ensure deployment succeeded
- Verify the URL is correct: `https://YOUR_USERNAME.github.io/modus-underline-js/`

## Updating the Demo

Just push your changes to `main` branch - it will auto-deploy!

```bash
git add .
git commit -m "Update demo"
git push origin main
```

That's it! 🚀

