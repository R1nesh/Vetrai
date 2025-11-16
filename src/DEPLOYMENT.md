# Vetrai - GitHub Pages Deployment Guide

This guide will help you deploy the Vetrai traffic intelligence application to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: **Vetrai** (must match the base path in vite.config.ts)
4. Choose "Public" (required for free GitHub Pages)
5. Click "Create repository"

### 2. Push Your Code to GitHub

If starting from scratch:

\`\`\`bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Vetrai Traffic Intelligence Platform"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/Vetrai.git

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

If you already have a local repository:

\`\`\`bash
# Make sure you're on the main branch
git checkout main

# Add all files
git add .

# Commit
git commit -m "Configure for GitHub Pages deployment"

# Push
git push origin main
\`\`\`

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (top right)
3. In the left sidebar, scroll down and click "Pages"
4. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
   - This will allow the automatic deployment workflow to run

### 4. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

1. Trigger when you push to the `main` branch
2. Install dependencies
3. Build the project
4. Deploy to GitHub Pages

**Wait 2-3 minutes** for the first deployment to complete.

### 5. Access Your Deployed Application

Your application will be available at:

\`\`\`
https://YOUR_USERNAME.github.io/Vetrai/
\`\`\`

For example, if your username is `johndoe`:
\`\`\`
https://johndoe.github.io/Vetrai/
\`\`\`

## Monitoring Deployment

1. Go to your repository on GitHub
2. Click the "Actions" tab
3. You'll see the deployment workflow running
4. Click on the workflow run to see detailed logs
5. Green checkmark = successful deployment
6. Red X = failed deployment (check logs for errors)

## Troubleshooting

### Build Fails

If the build fails, check the Actions logs:

1. Common issues:
   - Missing dependencies: Make sure all imports are correct
   - TypeScript errors: Fix any type errors
   - Build configuration: Verify vite.config.ts is correct

### Site Not Loading

If the site deploys but shows a 404:

1. Verify the repository name is exactly **Vetrai**
2. Check that GitHub Pages is enabled with "GitHub Actions" as source
3. Ensure the `base` in vite.config.ts matches your repo name: `/Vetrai/`

### Images or Assets Not Loading

If images don't load after deployment:

1. Use relative paths for assets
2. Import images in your components
3. Place static assets in the `/public` folder

## Updating Your Deployed Application

To update your live application:

\`\`\`bash
# Make your changes to the code

# Stage changes
git add .

# Commit
git commit -m "Description of your changes"

# Push to GitHub
git push origin main
\`\`\`

The site will automatically rebuild and redeploy within 2-3 minutes.

## Custom Domain (Optional)

To use a custom domain:

1. In repository Settings > Pages
2. Under "Custom domain", enter your domain
3. Add a CNAME record in your domain's DNS settings:
   - Type: CNAME
   - Name: @ or www
   - Value: YOUR_USERNAME.github.io

## Environment Variables

For production secrets (like API keys):

**Important**: The TomTom API key is stored in the browser's localStorage, not in environment variables. Users must enter their own API key through the Settings dialog in the application.

This approach:
- ✅ Keeps API keys secure
- ✅ Prevents key exposure in your repository
- ✅ Allows each user to use their own quota

## Performance Optimization

The build is already optimized with:

- Code splitting for vendor libraries
- Minification and compression
- Tree shaking for unused code
- Asset optimization

## Support

If you encounter issues:

1. Check the [GitHub Actions logs](https://github.com/YOUR_USERNAME/Vetrai/actions)
2. Review the [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Verify all configuration files are correct

## Security Notes

- Never commit API keys or secrets to the repository
- The `.gitignore` file should exclude sensitive files
- Use environment variables for sensitive data in production
- TomTom API keys are stored client-side in localStorage

---

**Congratulations!** 🎉 Your Vetrai application is now live on GitHub Pages!

Visit your site and share it with others:
\`https://YOUR_USERNAME.github.io/Vetrai/\`
