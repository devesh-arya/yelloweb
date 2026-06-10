# Yelloweb — Full-Stack Web Development Studio

Brand colors: #fdb930 (amber) · #003e51 (teal)

## Quick start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
```

## Project structure

```
yelloweb/
├── src/
│   ├── app/
│   │   ├── layout.tsx              ← root layout, fonts, metadata
│   │   ├── globals.css             ← Tailwind + brand styles
│   │   ├── page.tsx                ← Home
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── why-us/page.tsx
│   │   ├── industries/page.tsx
│   │   ├── contact/page.tsx
│   │   └── api/contact/route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── index.tsx           ← all page sections
│   │   │   └── CTABanner.tsx
│   │   └── ui/
│   │       ├── Motion.tsx          ← 10 scroll animations
│   │       └── RotatingWord.tsx
│   ├── lib/
│   │   └── data.ts                 ← ★ edit all copy here
│   └── types/
│       └── index.ts
├── tailwind.config.js
├── next.config.mjs
├── tsconfig.json
├── postcss.config.js
├── eslint.config.mjs
├── package.json
└── Dockerfile
```

## Edit content
All site copy lives in `src/lib/data.ts` — services, testimonials, etc.

## Brand colors
`tailwind.config.js`:
- `y-400: #fdb930` (amber primary)
- `teal: #003e51` (teal primary)

## Deploy
```bash
# Vercel (recommended)
vercel --prod

# Docker
docker build -t yelloweb .
docker run -p 3000:3000 yelloweb
```
