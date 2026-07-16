# Corporate Financial Website

A premium corporate financial website built with Next.js 14, React 18, TypeScript, Tailwind CSS, SWR, and Framer Motion. 

This project features high-end corporate styling, fluid animations, dynamic page transitions, and structured pages for various business divisions (Wealth Management, Global Advisory, Asset Management, Alternative Investments, and more).

## Tech Stack
- **Framework**: Next.js 14.2.35 (App Router)
- **State & Transitions**: React 18, Framer Motion
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Type Checking**: TypeScript 5
- **Quality Assurance**: ESLint

## Features
- **Modern Typography & Design**: A server-compatible premium typography system (`Heading`, `Text`, etc.).
- **Dynamic Services**: Pre-rendered service division pages (e.g. `/services/wealth-management`).
- **SEO Ready**: Semantic HTML structures, dynamic metadata configuration, and clean index layouts.
- **Interactive Animations**: Staggered scroll animations, cards hover micro-interactions, and visual transitions using Framer Motion.

## Environment Variables
Create a `.env` file in the root directory or configure them in Vercel. See [.env.example](.env.example) for reference:
- `CONTENTFUL_SPACE_ID`: The space ID for the Contentful CMS instance.
- `CONTENTFUL_ACCESS_TOKEN`: The delivery access token for Contentful.
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN`: The preview access token for content editors.
- `CONTENTFUL_ENVIRONMENT`: Defaults to `master`.

## Getting Started

### Installation
```bash
npm install
```

### Run Locally (Development Server)
```bash
npm run dev
```

### Production Build
Generates an optimized production bundle ready for Vercel:
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## Production Deployment on Vercel
This repository is configured to build directly on Vercel with the build command `npm run build`.

1. Go to your Vercel Dashboard and click **Add New** > **Project**.
2. Select your repository (`HappiProgrammer/Cooporate_Website`).
3. Set the **Root Directory** to `corporate-financial-website` (if not already selected).
4. Configure optional Environment Variables (`CONTENTFUL_SPACE_ID`, etc.) if CMS integration is active.
5. Click **Deploy**.
