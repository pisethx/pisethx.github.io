# Personal Website

### [Visit website](https://pisethx.github.io)

Built with [Nuxt 4](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com).

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Prerequisites

- **Node.js 20+** (Nuxt 4 requires Node.js 20 or later)
- If you're using a different Node.js version, use `nvm` to switch:
  ```bash
  nvm use
  # or install if not available
  nvm install
  ```

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

2. **Automatic Deployment**:
   - Every push to `main` or `master` branch will trigger a build
   - The site will be automatically deployed to GitHub Pages
   - You can monitor the deployment in the "Actions" tab

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static)
npm run generate

# Preview the generated site
npm run preview
```

### Troubleshooting

If you encounter build errors:
1. Make sure you're using Node.js 20+
2. Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
3. Clear Nuxt cache: `rm -rf .nuxt .output .data`
