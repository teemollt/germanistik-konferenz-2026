# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Astro-based static website** for the Asian German Studies Conference (Asiatische Germanistentagung - AGT) 2027, taking place in Incheon, South Korea. The site is multilingual (German and English) and deployed via GitHub Pages.

## Development Commands

```bash
npm install              # Install dependencies
npm run dev             # Start dev server at localhost:4321
npm run build           # Build production site to ./dist/
npm run preview         # Preview build locally
npm run deploy          # Deploy to GitHub Pages (gh-pages)
```

## Architecture

### Internationalization (i18n)

- **Content structure**: All translatable content lives in [src/i18n/content.ts](src/i18n/content.ts)
- **Language system**: Client-side language switching between German (`de`) and English (`en`)
- **Dynamic updates**: Uses `data-lang-key` attributes on HTML elements; JavaScript in [src/layouts/Layout.astro](src/layouts/Layout.astro) handles language switching
- **List rendering**: Arrays (like conference history) use `data-lang-key-list` attributes

### Component Structure

- **Layout**: [src/layouts/Layout.astro](src/layouts/Layout.astro) - base template with language switching logic and AOS animation initialization
- **Components**: Reusable sections in [src/components/](src/components/) (Header, HeroSection, ThemeSection, InformationenSection, TeamSection, Footer, etc.)
- **Pages**: Main pages in [src/pages/](src/pages/) and information subpages in [src/pages/informationen/](src/pages/informationen/)

### Styling

- **Tailwind CSS**: Configured via [tailwind.config.js](tailwind.config.js) and [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)
- **Global styles**: [src/styles/global.css](src/styles/global.css)
- **Animations**: AOS (Animate On Scroll) library for scroll animations

### Deployment

- **Target**: GitHub Pages at https://www.agt2027.shop/
- **Deploy command**: `npm run deploy` (uses gh-pages package)
- **Configuration**: See [astro.config.mjs](astro.config.mjs) for site URL

## Important Patterns

### Adding/Modifying Translatable Content

1. Edit [src/i18n/content.ts](src/i18n/content.ts) - add keys to both `de` and `en` objects
2. Use the key in Astro components with `data-lang-key="yourKey"`
3. For lists/arrays, use `data-lang-key-list="yourArrayKey"`

### Mobile Menu

Mobile menu toggle logic is centralized in [src/layouts/Layout.astro](src/layouts/Layout.astro) - handles both menu open/close and link click behaviors.

## Conference-Specific Notes

- Registration forms link to Google Forms (may be blocked in some regions like China)
- Alternative email registration: agt2027.incheon@gmail.com
- Conference date: August 23-26, 2027
- Main branch for PRs: `main`
