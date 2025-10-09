# Portfolio Website - Deployment Guide

This README documents how this portfolio website is deployed using GitHub Pages with a custom GoDaddy domain.

## 🏗️ Architecture Overview

This project uses:
- **React + TypeScript + Vite** for the frontend
- **GitHub Pages** for hosting
- **GoDaddy Custom Domain** (`jaskirat.website`)
- **docs folder** as the build output directory

## 📁 Project Structure

```
jaskiraaaat/
├── src/                    # Source code (React components)
├── docs/                   # Build output (GitHub Pages serves from here)
│   ├── CNAME              # Custom domain configuration
│   ├── index.html         # Built HTML
│   └── assets/            # Built CSS/JS assets
├── public/                # Static assets (copied to docs during build)
├── vite.config.ts         # Build configuration
└── package.json           # Dependencies and scripts
```

## ⚙️ Configuration Details

### Vite Configuration (`vite.config.ts`)

Key settings:
```typescript
{
  base: '/',              // Root path for custom domain
  build: {
    outDir: 'docs'        // Output to docs folder (required for GitHub Pages)
  }
}
```

### CNAME File

Located at `docs/CNAME`, contains:
```
jaskirat.website
```

This file tells GitHub Pages to serve the site from your custom domain.

## 🚀 How to Deploy Changes

### Step-by-Step Process

1. **Make your changes** in the `src/` directory

2. **Test locally**:
   ```bash
   npm run dev
   ```
   This starts a development server at `http://localhost:3000`

3. **Build for production**:
   ```bash
   npm run build
   ```
   This creates optimized production files in the `docs/` folder

4. **Verify the CNAME file exists**:
   ```bash
   cat docs/CNAME
   ```
   Should output: `jaskirat.website`
   
   ⚠️ **IMPORTANT**: The CNAME file must exist in `docs/` for the custom domain to work!

5. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

6. **Wait for deployment** (usually 1-3 minutes)
   - GitHub Pages automatically detects changes to the `docs/` folder
   - Visit your website at `https://jaskirat.website` to see changes

## 🌐 GitHub Pages Setup

### Repository Settings

Your GitHub repository should have these settings:

1. Go to **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main` (or your default branch)
4. **Folder**: `/docs`
5. **Custom domain**: `jaskirat.website`

### How It Works

- GitHub Pages serves static files from the `docs/` folder
- When you push changes to the `docs/` folder, GitHub automatically redeploys
- The CNAME file ensures the site is accessible via your custom domain

## 🔗 GoDaddy Domain Configuration

### DNS Settings

Your GoDaddy domain should have these DNS records:

1. **A Records** (point to GitHub Pages):
   ```
   @ → 185.199.108.153
   @ → 185.199.109.153
   @ → 185.199.110.153
   @ → 185.199.111.153
   ```

2. **CNAME Record** (for www subdomain):
   ```
   www → <your-github-username>.github.io
   ```

### Verification

To verify DNS is working:
```bash
nslookup jaskirat.website
```

## 🛠️ Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production (outputs to `docs/`) |
| `npm run preview` | Preview production build locally |
| `npm install` | Install dependencies |

## ✅ Deployment Checklist

Before pushing changes, ensure:

- [ ] Code builds successfully (`npm run build`)
- [ ] `docs/CNAME` file exists and contains `jaskirat.website`
- [ ] All new files are committed to git
- [ ] Tested locally with `npm run dev`

## 🐛 Troubleshooting

### Changes not appearing on the website?

1. **Check build was successful**:
   - Run `npm run build` and ensure no errors
   - Verify files exist in `docs/` folder

2. **Check git push was successful**:
   ```bash
   git status
   git log --oneline -n 1
   ```

3. **Check GitHub Pages status**:
   - Go to your repository → **Settings** → **Pages**
   - Check the deployment status at the top

4. **Clear browser cache**:
   - Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
   - Or open in incognito mode

5. **Check CNAME file**:
   ```bash
   cat docs/CNAME
   ```
   Should show `jaskirat.website`

### Custom domain not working?

1. **Verify DNS settings** in GoDaddy (see above)
2. **Verify CNAME file** exists in `docs/` folder
3. **Check GitHub Pages settings** have custom domain configured
4. DNS changes can take 24-48 hours to propagate

### Build errors?

1. **Delete node_modules and reinstall**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node.js version**:
   ```bash
   node --version
   ```
   Should be v18 or higher

## 📝 Important Notes

1. **Never delete the `docs/` folder** - this is what GitHub Pages serves
2. **Always build before pushing** - GitHub Pages serves static files, not source code
3. **CNAME file is critical** - without it, custom domain won't work
4. **Commit the docs folder** - it must be in your git repository
5. **Build output changes every time** - the asset filenames have hashes that change with each build

## 🔄 Typical Workflow

```bash
# 1. Make changes to source files
vim src/components/Hero.tsx

# 2. Test locally
npm run dev

# 3. Build for production
npm run build

# 4. Verify CNAME exists
ls docs/CNAME

# 5. Commit and push
git add .
git commit -m "Update hero section"
git push origin main

# 6. Wait 1-3 minutes, then check https://jaskirat.website
```

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)
- [GoDaddy DNS Setup Guide](https://www.godaddy.com/help/add-a-cname-record-19236)

---

**Last Updated**: October 2025
