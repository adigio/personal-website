# Agent Notes

Personal website built with Next.js App Router.

## Developer workflow

- Use `pnpm` (lockfile and workspace config present). Do not use npm/yarn.
- Dev server: `pnpm dev` (http://localhost:3000).
- Build: `pnpm build`.
- Lint: `pnpm lint` (runs ESLint; config is flat config in `eslint.config.mjs`).
- There is no test runner configured.
- There is no typecheck script; type-checking is done by Next.js during builds via `next build`.

## Project structure

- `app/` — Next.js App Router source.
  - `app/page.tsx` — root page entry point.
  - `app/layout.tsx` — root layout with Geist/Geist Mono fonts loaded via `next/font/google`.
  - `app/globals.css` — Tailwind v4 entry (`@import "tailwindcss"`) plus custom theme tokens.
- `public/` — static assets.
- `next.config.ts` — currently empty/default.
- `postcss.config.mjs` — Tailwind v4 PostCSS plugin (`@tailwindcss/postcss`).
- `pnpm-workspace.yaml` — pnpm workspace config; allows native builds for `sharp` and `unrs-resolver`.

## Toolchain specifics

- Next.js 16.x, React 19, TypeScript 5 strict mode.
- Tailwind CSS v4 (the `@import "tailwindcss"` syntax; no `tailwind.config` file).
- Path alias `@/*` resolves to `./*`.
- ESLint uses `eslint-config-next` flat presets (`core-web-vitals`, `typescript`) with explicit ignores for `.next/`, `out/`, `build/`, and `next-env.d.ts`.

## Verification order

1. `pnpm lint`
2. `pnpm build`

No other checks exist.
