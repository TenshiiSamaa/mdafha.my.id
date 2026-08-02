# AI Engineering Operating Manual (AGENTS.md)

Welcome, AI Agent. This document is your mandatory operational guide for coding within the `mdafha.my.id` repository. Read this file and the referenced documents completely before proposing or writing any code modifications.

---

## 1. Repository Overview
*   **Purpose**: Personal professional portfolio showcasing software engineering capabilities, clean code design, and integration with a self-built Headless CMS.
*   **Tech Stack**: Next.js 16 (App Router, Turbopack), TypeScript (Strict), Tailwind CSS v4, Framer Motion, MongoDB Atlas, Auth.js (v5), Resend, React Email, Zod, and next-themes.
*   **Current Stage**: **Stage 06.3 — Homepage (Mobile First)** (Phase 1 — Design System).
*   **Core Philosophy**: Mobile-first responsive layouts, strict accessibility compliance (WCAG AA), type safety, performance-focused transition systems, and semantic theme scoping.

---

## 2. Mandatory Reading Order
Before editing or creating any file, you must read the project documentation in this exact order:
1.  [docs/project-roadmap.md](file:///c:/Users/Acer/Music/Project%20note%20js/mdafha.my.id/docs/project-roadmap.md) — Current stage scope and task definitions.
2.  [docs/implementation-status.md](file:///c:/Users/Acer/Music/Project%20note%20js/mdafha.my.id/docs/implementation-status.md) — Technical constraints and feature flags.
3.  [docs/context-discovery-report.md](file:///c:/Users/Acer/Music/Project%20note%20js/mdafha.my.id/docs/context-discovery-report.md) — Technical boundaries and project conventions.
4.  [docs/engineering-handbook.md](file:///c:/Users/Acer/Music/Project%20note%20js/mdafha.my.id/docs/engineering-handbook.md) — Coding conventions, typing rules, and layout structures.
5.  [docs/architecture.md](file:///c:/Users/Acer/Music/Project%20note%20js/mdafha.my.id/docs/architecture.md) — Request lifecycles, folder boundaries, rendering paths, and data flows.

---

## 3. AI Workflow

```
Read Roadmap -> Find Current Stage -> Check Implementation Status -> Create Plan -> Wait for User Approval -> Implement -> Validate -> Update Status docs
```

1.  **Read Roadmap & Find Stage**: Identify the active stage scope.
2.  **Formulate Plan**: Write a detailed implementation plan in markdown.
3.  **Wait for Approval**: Stop and wait for the user to explicitly approve your plan.
4.  **Implement**: Write the code following the rules in the [Engineering Handbook](file:///c:/Users/Acer/Music/Project%20note%20js/mdafha.my.id/docs/engineering-handbook.md).
5.  **Validate**: Run the validation pipeline.
6.  **Update Documentation**: Document your changes in roadmap/status files.

---

## 4. Key Development Rules
*   **No Direct Database Queries from UI**: Components must access database collections exclusively through the Repository layer under `services/`.
*   **Server Components by Default**: Minimize client-side bundle size. Mark elements with `"use client"` only when utilizing React hooks or registering DOM event listeners.
*   **Strict Typing**: Zero usage of `any`. Enable strict null checks and type safety parameters.
*   **Path Aliases Only**: Use `@/common`, `@/modules`, `@/services`, `@/lib`, and `@/hooks` for all module references. Relative paths beyond root boundaries are forbidden.

---

## 5. Documentation Maintenance
Do not modify documentation files silently. If a code change alters roadmap status, architecture diagrams, or engineering guidelines, you must update the corresponding file in `docs/` and summarize the change in your turn report.

---

## 6. Validation Pipeline
Every task is considered incomplete unless the following commands compile successfully without errors:
1.  `npm run lint` — Checks for ESLint code style and formatting rules.
2.  `npx tsc --noEmit` — Validates TypeScript compiler type safety.
3.  `npm run build` — Confirms Next.js production builds compile cleanly.

---

## 7. Design System Reference
*   **Palette Mappings**: Standardized on Zinc Neutral for Light Theme (`#fafafa`) and Porcelain White for Dark Theme (`#090d16`).
*   **Accents**: Marine Deep (`#2563eb`) maps to primary actions and link targets. Obsidian Violet (`#7c3aed`) wraps certificates, highlights, and secondary borders.
*   **Responsiveness**: Build all components mobile-first. Target larger resolutions progressively using Tailwind grid queries (`md:`, `lg:`).
*   **Accessibility**: Maintain WCAG AA contrast standards. Mobile touch targets must be at least `44px` x `44px`.

---

## 8. Motion Rules
All UI animations must utilize the motion system under `lib/motion/`.
*   Do not write custom cubic beziers or spring parameters inside components.
*   Reuse the centralized motion tokens (`DURATIONS.fast`, `EASING_CURVES.easeStandard`, `variants.ts`).
*   Always wrap animations in `disableMotionIfPreferred()` to respect accessibility settings.

---

## 9. Folder Ownership Boundaries
*   `app/` — Routing layers and metadata headers. **No business logic.**
*   `modules/` — Feature-scoped components and Server Actions.
*   `common/` — Generic primitives and shell structures (containers, buttons, loader animations).
*   `services/` — Repositories, database wrappers, and third-party APIs.
*   `lib/` — Design tokens, constants, and global utility helpers.

---

## 10. AI Behavior Rules
*   **Preserve APIs**: Never change public prop interfaces or function structures of existing components.
*   **No Redesigns**: Do not adjust colors, spacing, typography, or layouts unless explicitly asked.
*   **Ask When Uncertain**: If project requirements or endpoints are ambiguous, do not make assumptions. Stop and ask the user for clarification.

---

## 11. Code Standards Summary
Follow the SOLID, DRY, and KISS principles as defined in the [Engineering Handbook](file:///c:/Users/Acer/Music/Project%20note%20js/mdafha.my.id/docs/engineering-handbook.md#2-code-philosophy).

---

## 12. Commit Philosophy
Follow the semantic commit standard:
*   `feat: [description]` — New feature implementations.
*   `fix: [description]` — Layout repairs or bug resolutions.
*   `refactor: [description]` — Code cleanups and logic restructuring.
*   `docs: [description]` — Documentation updates.
*   `chore: [description]` — Cleanups or configuration updates.

---

## 13. Pull Request Checklist
Before requesting review, confirm:
- [ ] Code compiles with 0 ESLint errors.
- [ ] TypeScript check yields 0 errors.
- [ ] Production build succeeds.
- [ ] Mobile-first responsiveness is fully verified.
- [ ] Accessibility touch boundaries and keyboard focus indicators are active.

---

## 14. Future Roadmap Exclusions
Do not implement the following components early:
*   Admin CMS dashboards (`app/admin/`).
*   Uploadthing file management services.
*   Resend mail handlers and templates.
*   These are mapped to future development phases and must not be created ahead of schedule.

---

## 15. Decision Priority
Resolve conflicts in system rules using this hierarchy:
1.  User Instructions
2.  `docs/project-roadmap.md`
3.  `docs/implementation-status.md`
4.  `docs/context-discovery-report.md`
5.  `docs/engineering-handbook.md`
6.  `docs/architecture.md`
7.  `AGENTS.md` (This file)
8.  `README.md`
9.  Existing Code Patterns
