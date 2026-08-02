# Engineering Handbook — Mdafha Portfolio

This document establishes the definitive coding guidelines, component hierarchies, state models, database boundaries, accessibility standards, and validation workflows for the `mdafha.my.id` codebase. All developers and AI agents must follow these rules without exception.

---

## 1. Engineering Principles

*   **Simplicity**: Prefer clear, explicit logic over clever, implicit abstractions. Simple code is cheaper to debug, audit, and rewrite.
*   **Readability**: Code is read far more often than it is written. Use self-explanatory variable naming, explicit typings, and semantic structures.
*   **Maintainability**: Separate business rules from DOM frameworks. Keep side-effects isolated to service layers to support modular swaps.
*   **Scalability**: Layout modules must accommodate incoming CMS collections (e.g., dynamic certificates, projects) without structural changes.
*   **Consistency**: Follow existing rules for folders, imports, layout containers, and hooks. Do not introduce alternative code design patterns.
*   **Accessibility First**: Accessibility is not a final polish. It must be built into the DOM skeleton from the start (keyboard tabs, ARIA labels).
*   **Performance First**: Optimize asset pipelines (lazy loading, optimized WebP images) and compute costs (caching, RSC) to maintain fast load times.
*   **Mobile-First PROGRESSIVE ENHANCEMENT**: Start layouts on mobile screens (`default` styles). Progressively introduce larger grid structures and overlays using Tailwind media queries (`md:`, `lg:`).

---

## 2. Code Philosophy

*   **SOLID**:
    *   *Single Responsibility (SRP)*: Components must do one thing (e.g., `<Button>` renders a tag, it does not fetch page data).
    *   *Open/Closed (OCP)*: UI elements should be customizable using class modifiers (`className`) without modifying their core properties.
    *   *Liskov Substitution (LSP)*: Custom primitives must extend native HTML element parameters safely (e.g., custom input inherits `React.InputHTMLAttributes`).
    *   *Interface Segregation (ISP)*: Define narrow, explicit React prop interfaces. Do not pass heavy, unmapped objects.
    *   *Dependency Inversion (DIP)*: Depend on abstract service interfaces (database repositories) rather than concrete implementations.
*   **DRY (Don't Repeat Yourself)**: Avoid duplicate code. Reusable layout constants, validation schemas, and hooks belong in `@/common` or `@/lib`.
*   **KISS (Keep It Simple, Stupid)**: Do not create multi-layered nested components if a single functional unit is sufficient.
*   **YAGNI (You Aren't Gonna Need It)**: Do not write feature structures or database schemas for stages that have not started.
*   **Composition over Inheritance**: Assemble complex layouts by nesting independent components (`<Card><CardHeader/><CardBody/></Card>`) instead of extending class definitions.
*   **Immutable Mindset**: Never modify parameters directly. Always return new arrays or objects when updating states.
*   **Pure Functions**: Utility helpers must remain side-effect free. Given the same inputs, they must return the same output.
*   **Server First**: Compute queries, secure authentication, and validate schemas on the server. Send clean, formatted static structures to the client.

---

## 3. TypeScript Standards

*   **No any**: The `any` type is strictly forbidden. If a structure is unknown, use `unknown`.
*   **Strict Null Checks**: Explicitly declare potential null or undefined states. Never use non-null assertions (`!`).
*   **Discriminated Unions**: Use clear type flags for state models:
    ```typescript
    type ActionResponse<T> = 
      | { success: true; data: T }
      | { success: false; error: string };
    ```
*   **Types vs. Interfaces**: Use `interface` for component props and class definitions. Use `type` for unions, intersections, and metadata models.
*   **Readonly Parameters**: Use `readonly` for static constant configurations and lookup tuples:
    ```typescript
    export const NAVIGATION_LINKS = [
      { label: "Home", href: "/" }
    ] as const;
    ```
*   **Naming Conventions**:
    *   Interfaces and types: PascalCase (e.g., `ButtonProps`).
    *   Generics: Single capital letters starting with `T` (e.g., `TData`, `TResponse`).

---

## 4. React Standards

*   **React Server Components (RSC)**: All components are Server Components by default to optimize performance.
*   **Client Components**: Use `"use client"` ONLY when:
    *   Using React state or hooks (`useState`, `useEffect`, `useContext`).
    *   Registering DOM event listeners (`onClick`, `onChange`).
    *   Importing animations from Framer Motion.
*   **Suspense & Streaming**: Wrap heavy module sections in `<Suspense fallback={<LoadingSkeleton />}>` to stream content to the client.
*   **Hydration Safety**:
    *   Do not read client-only properties (like `window.innerWidth`) during initial rendering to avoid SSR mismatches.
    *   Use `suppressHydrationWarning` on elements prone to browser extension modifications (like `<body>`).
*   **Memoization**: Use `useMemo` and `useCallback` only when passing complex object parameters to dependencies or when rendering expensive lists.
*   **Server Actions**: Write Server Actions inside separate files marked with `"use server"`. Actions must validate inputs using Zod.

---

## 5. Next.js Standards

*   **App Router**: Stick to App Router file structures. Avoid mixing Pages Router structures.
*   **Metadata API**: Define static metadata configs or dynamic `generateMetadata()` methods to set OpenGraph tags.
*   **Layouts**: Layout nodes (`layout.tsx`) must preserve state across navigations. Use layouts to wrap common structures.
*   **Dynamic Routes**: Retrieve parameters directly from route contexts. Validate dynamic params before database queries.
*   **Special Files**:
    *   `loading.tsx`: Scoped loading states for page routes.
    *   `error.tsx`: Scoped error fallback. Must be a Client Component.
    *   `not-found.tsx`: Scoped 404 page handler.
*   **Next.js Images**: Always use `next/image` with predefined dimensions or `fill` configurations. Never use raw `<img>` tags on main routes.

---

## 6. Tailwind Standards

*   **Order of Utility Classes**: Order utility classes systematically:
    1.  Layout / Positioning (`flex`, `grid`, `absolute`, `z-10`)
    2.  Box Model (`w-full`, `h-20`, `p-4`, `m-2`)
    3.  Typography (`text-base`, `font-semibold`)
    4.  Colors & Borders (`bg-surface`, `border-border`, `text-foreground`)
    5.  Transitions & Motion (`transition-all`, `duration-200`)
*   **Spacing System**: Stick to the 8px spacing system (`p-2` = 8px, `p-4` = 16px, `p-6` = 24px, `p-8` = 32px).
*   **Design Tokens**: Use Tailwind variables configured in `global.css` (e.g., `bg-background`, `border-border`, `text-muted-foreground`).
*   **Breakpoints**: Mobile-first approach. Default styles are mobile. Larger screens are progressively targeted using tailwind breakpoints:
    *   `sm:` (640px)
    *   `md:` (768px)
    *   `lg:` (1024px)
    *   `xl:` (1280px)

---

## 7. Component Standards

*   **Primitive Components (`common/components/ui/`)**:
    *   Generic components with no business logic.
    *   Must accept an optional `className` to allow layout overrides.
    *   Props must extend standard HTML attributes:
        ```typescript
        export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
          isLoading?: boolean;
        }
        ```
*   **Shared Components (`common/components/layout/`)**:
    *   Organizes layout structures (e.g., `Navbar`, `Footer`, `Section`, `Container`).
*   **Feature Components (`modules/`)**:
    *   Encapsulates features (e.g., `modules/guestbook/components/guestbook-form.tsx`).
*   **Circular Dependencies**: Components must not import from higher levels in the hierarchy.

---

## 8. Folder Growth Rules

All files must be created in their appropriate directories:
*   `components/`: Localized component UI parts.
*   `hooks/`: Reusable react hooks prefixed with `use`.
*   `actions/`: Server actions marked with `"use server"`.
*   `schemas/`: Validation schemas (Zod).
*   `types/`: Type definitions and interfaces.
*   `constants/`: Non-changing metadata configurations.
*   `utils/`: Helper functions.
*   `services/`: Communication layer for external systems.

---

## 9. Styling Rules

*   **No Inline Styles**: Never use inline `style` attributes. All styles must use Tailwind utility classes.
*   **Semantic Themes**: Utilize theme variables (`var(--background)`, `var(--foreground)`) to support light/dark switching automatically.
*   **Accent Usage**: Use `var(--primary)` (Marine Deep) for focus states and `var(--accent-2)` (Obsidian Violet) for decorative highlights.
*   **Transitions**: Apply `transition-colors duration-200` to prevent sudden jumps on theme changes.

---

## 10. Motion Standards

*   **System Foundation**: Import exclusively from `@/lib/motion`.
*   **Curves & Easing**: Use curves like `EASING_CURVES.easeStandard` for a fluid feel.
*   **Reduced Motion**: All animations must pass through the `disableMotionIfPreferred()` wrapper to respect user preferences.
*   **Transforms**: Animate only `opacity`, `translate`, and `scale`. Avoid animating expensive properties like `width` or `height`.

---

## 11. Accessibility Standards (WCAG AA Compliance)

*   **Keyboard Navigation**: Interactive elements must be focusable via `Tab` and triggerable via `Enter`/`Space`.
*   **Focus Ring Indicators**: Visible focus rings must be styled with `focus-visible:ring-2 focus-visible:ring-primary`.
*   **Semantic Markup**: Use semantic elements (`<header>`, `<main>`, `<nav>`, `<footer>`) to construct the document layout.
*   **Contrast Bounds**: Maintain high contrast matching WCAG AA guidelines.
*   **Touch Targets**: Buttons and interactive tags on mobile devices must have a minimum size of `44px` x `44px`.

---

## 12. Performance Standards

*   **Dynamic Loading**: Lazy load modal overlays using `next/dynamic`.
*   **Code Splitting**: Keep chunk sizes low by avoiding unnecessary heavy libraries.
*   **Next.js Fonts**: Load fonts through Next.js variables to avoid layout shifts.
*   **Memoization Safety**: Do not wrap every component in `memo` unless performance profiling shows rendering bottlenecks.

---

## 13. Database Standards

*   **Repository Pattern**: Wrap all MongoDB operations inside a clean data access layer under `services/`.
*   **Schemas**: Validate all database inputs using Zod.
*   **Indexes**: Define indexes on fields used frequently for sorting or lookup (e.g., `createdAt`).
*   **Soft Delete**: Use active flags instead of removing records for CMS documents.

---

## 14. API Standards

*   **Server Actions Preference**: Use Server Actions for form submissions and internal state modification.
*   **REST Routes**: Allowed only for external webhooks or third-party integrations (under `app/api/`).
*   **Response Format**: Maintain consistent JSON structures: `{ success: boolean, data?: T, error?: string }`.
*   **Validation**: Validate all payloads through Zod schemas before database inserts.

---

## 15. Git Workflow

*   **Branches**: Create descriptive branch names: `feature/stage-06.3-homepage` or `bugfix/hydration-footer`.
*   **Semantic Commits**: Use semantic prefixes (`feat:`, `fix:`, `refactor:`, `perf:`, `style:`, `docs:`, `chore:`).
*   **PR Reviews**: Code must compile cleanly and pass tests before merging into the main branch.

---

## 16. Review Checklist

Before finalizing any task, verify:
*   [ ] ESLint runs cleanly (`npm run lint`).
*   [ ] TypeScript type checking passes (`npx tsc --noEmit`).
*   [ ] Next.js production build succeeds (`npm run build`).
*   [ ] Layout is fully responsive (checked on mobile, tablet, and desktop).
*   [ ] Accessibility focus indicators and touch targets are configured.
*   [ ] Code is clean and free of debug logs.

---

## 17. AI Collaboration Rules

*   **Follow the Roadmap**: Read `docs/project-roadmap.md` to identify the active Stage.
*   **Preserve Existing Code**: Do not change layout rules, spacing, or component parameters unless explicitly instructed.
*   **Incremental Progress**: Complete one Stage fully before starting the next.
*   **Validate Code**: Run the validation check after making changes.

---

## 18. Repository Invariants

The following files and parameters must never change:
*   TypeScript strict configurations.
*   Zinc Neutral (light) and Porcelain White (dark) theme variables.
*   Feature separation hierarchy (`modules/`, `common/`, `app/`).

---

## 19. Decision Priority

When conflicts in requirement definitions or implementations arise, resolve them using this priority:
1.  **User Instructions**
2.  **`docs/project-roadmap.md`**
3.  **`docs/implementation-status.md`**
4.  **Context Discovery Report**
5.  **Engineering Handbook**
6.  **`AGENTS.md`** (When created)
7.  **`README.md`**
8.  **Existing Code Patterns**

---

## 20. Engineering Checklist

Before completing a task, ensure:
*   [ ] Code contains no unused imports or variables.
*   [ ] Page metadata is updated.
*   [ ] Built-in animations support prefers-reduced-motion.
*   [ ] Compilation builds cleanly with 0 warnings.
