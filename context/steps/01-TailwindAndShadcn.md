# Step 01: Tailwind CSS and shadcn/ui Setup

## Status

- Not Started

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

- [ ] Confirm current project setup and dependency versions.
- [ ] Install Tailwind CSS and supporting packages.
- [ ] Configure Tailwind content paths for App Router, components, features, and lib files.
- [ ] Map Wonkledge theme tokens so Tailwind/shadcn styling can use the dark design system.
- [ ] Initialize shadcn/ui with project aliases.
- [ ] Add the base utility helper required by shadcn/ui.
- [ ] Verify the home route still renders with the dark Wonkledge shell.
- [ ] Run verification commands.
- [ ] Update `context/progress-tracker.md` after completion.

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

- Pending.
