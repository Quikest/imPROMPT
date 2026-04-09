# imPROMPT

Prompt engineering experiments repo by Quikest. MIT licensed.

## Stack

- **Next.js 16** (App Router, Turbopack dev server)
- **React 19**, **TypeScript 5.9**
- **Tailwind CSS v4** via `@tailwindcss/postcss` (no tailwind.config — uses CSS-based config)
- **shadcn/ui** (base-vega style) with **Base UI** (`@base-ui/react`) as headless primitives
- **class-variance-authority (CVA)** for component variants
- **next-themes** for dark mode (system preference + 'd' hotkey toggle)
- **Hugeicons** for icons
- **Fonts:** Geist (sans/heading), JetBrains Mono (mono) via next/font/google

## Commands

```sh
npm run dev        # Dev server (Turbopack)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
npm run format     # Prettier (ts/tsx files)
npm run typecheck  # tsc --noEmit
```

## Project Structure

```
app/           → Routes and layouts (App Router, RSC by default)
components/    → Reusable components
  ui/          → shadcn/ui + Base UI primitives (button, etc.)
components/theme-provider.tsx → Client-side theme wrapper
hooks/         → Custom React hooks
lib/           → Utilities (cn() in lib/utils.ts)
public/        → Static assets
```

## Conventions

- Main branch: `main`
- ES modules (`"type": "module"`)
- Path alias: `@/*` → project root (e.g. `@/components/ui/button`)
- shadcn aliases: `@/ui`, `@/utils`, `@/lib`, `@/hooks`
- Colors use **OKLch** color space via CSS custom properties (globals.css)
- Dark mode: CSS `.dark` class + custom `:dark` Tailwind variant (`:is(.dark *)`)
- `cn()` helper (clsx + tailwind-merge) for composing Tailwind classes
- Components use Base UI unstyled primitives + CVA for variant styling
- `"use client"` only where needed (theme-provider, interactive components)
