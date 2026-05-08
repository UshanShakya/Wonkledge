# Step 01: Tailwind CSS and shadcn/ui Setup

## Status

- Completed

## Source Requirement

- `context/progress-tracker.md` lists the current goal as: Configure Tailwind CSS and shadcn/ui on top of the initialized Next.js app.
- `CLAUDE.md` build order lists this as the next task after project setup.
- `context/ui-context.md` requires a dark-mode-only Wonkledge design system using CSS custom properties.
- `context/code-standards.md` requires Tailwind CSS utilities and shadcn/ui primitives where appropriate.

## Task

Install and configure Tailwind CSS and shadcn/ui for the existing Next.js 15 App Router project without changing product behavior yet.

## Scope

- Install Tailwind CSS dependencies needed for the current Next.js setup.
- Add Tailwind configuration files.
- Wire Tailwind into `app/globals.css`.
- Preserve the Wonkledge dark theme CSS custom properties.
- Initialize shadcn/ui configuration.
- Add any required utility helper such as `lib/utils.ts`.
- Do not manually edit generated `components/ui/*` files unless a selected shadcn component requires it.
- Do not start Clerk, Prisma, route groups, dashboards, or feature implementation in this step.

## Checklist

- [x] Confirm current project setup and dependency versions.
- [x] Install Tailwind CSS and supporting packages.
- [x] Configure Tailwind content paths for App Router, components, features, and lib files.
- [x] Map Wonkledge theme tokens so Tailwind/shadcn styling can use the dark design system.
- [x] Initialize shadcn/ui with project aliases.
- [x] Add the base utility helper required by shadcn/ui.
- [x] Verify the home route still renders with the dark Wonkledge shell.
- [x] Run verification commands.
- [x] Update `context/progress-tracker.md` after completion.

## Completion Criteria

- Tailwind CSS is installed and active.
- shadcn/ui is configured for the project.
- The app remains dark-mode only.
- Existing Wonkledge CSS variables remain available.
- TypeScript, lint, and production build pass.
- This step file is marked `Completed`.
- `context/progress-tracker.md` records the completed setup and the next task.

## Verification Commands

```bash
npm run typecheck
npm run lint
npm run build
```

## Completion Notes

- Tailwind CSS 4 is installed with the official `@tailwindcss/postcss` integration.
- PostCSS config uses `postcss.config.js` so the Next.js build pipeline reliably discovers and applies the Tailwind plugin.
- Tailwind is wired through `app/globals.css` using CSS-first theme tokens and explicit `@source` paths for `app`, `components`, `features`, and `lib`.
- Wonkledge dark theme CSS custom properties were preserved and mapped to Tailwind/shadcn-compatible color tokens.
- shadcn/ui is initialized with `components.json`, project aliases, Lucide icon configuration, and `lib/utils.ts`.
- No generated `components/ui/*` primitives were manually created or edited in this step.
- The home route now uses Tailwind utility classes while preserving the existing dark Wonkledge shell.
- Verified the production CSS output contains generated Tailwind utilities such as `.grid`, `.min-h-screen`, `.bg-background`, and token-based text/background classes.
- Fixed non-standard `@theme inline` syntax and corrected `@source` paths in `app/globals.css` to resolve utility generation issues in Next.js 15.
- Verified with:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
