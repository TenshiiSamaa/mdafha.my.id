# Context Discovery Report — Mdafha Portfolio (v2)

This report outlines the structural audit, design system mappings, architectural philosophies, and engineering constraints of the `mdafha.my.id` repository. It serves as the complete engineering context discovery foundation prior to drafting the official `AGENTS.md` file.

---

## 1. Project Overview
* **Purpose**: Personal professional portfolio showcasing software engineering capabilities, clean code design, and integration with a self-built Headless CMS.
* **Target Users**: Recruiters, tech leads, potential clients, and the developer community.
* **Core Philosophy**: Mobile-first responsive layouts, strict accessibility compliance (WCAG AA), type safety, performance-focused transition systems, and semantic theme scoping.

---

## 2. Current Progress
* **Phase 0 — Planning & Foundation**: Complete. Includes database (MongoDB Atlas + adapter), authentication foundation (configured, but temporarily disabled), and shared UI primitives.
* **Phase 1 — Design System**:
  * ✅ **Stage 06.1** (AI Engineering Context) — Complete.
  * ✅ **Stage 06.2** (Motion Design Foundation) — Complete. Centralized motion tokens, easing curves, gestures, and page transitions are fully configured.
  * 🟡 **Stage 06.3** (Homepage - Mobile First) — In Progress.

---

## 3. Technology Stack
* **Framework**: Next.js 16 (App Router, Turbopack for compilation)
* **Language**: TypeScript (Strict Mode)
* **Styling**: Tailwind CSS v4, PostCSS
* **Authentication**: Auth.js v5 (MongoDB adapter, temporarily disabled)
* **Database**: MongoDB Atlas (MongoClient integration via custom service layers)
* **Animations**: Framer Motion
* **Utilities**: Zod (schema validation), next-themes (theme management), lucide-react (icons)
* **Services**: Resend (email provider), React Email (templated alerts)

---

## 4. Architecture Rules

The repository strictly enforces a unidirectional architecture hierarchy:

```
Routing Layer (app/)
        ↓
Feature Layer (modules/)
        ↓
Shared Components (common/components/)
        ↓
Hooks (hooks/)
        ↓
Services (services/)
        ↓
Database & Models (services/mongodb.ts & types/)
        ↓
External Providers (Resend, Uploadthing, Auth.js)
```

### Layer Responsibilities & Prohibitions:
1. **Routing Layer (`app/`)**:
   * *Responsibility*: Define page layouts, metadata headers, static/dynamic caching properties, page wrappers, and route segments.
   * *Prohibition*: **Must not contain business logic** or direct database query code. Business logic must be deferred to feature modules, actions, or services.
2. **Feature Layer (`modules/`)**:
   * *Responsibility*: Core feature modules containing specific domain-driven sub-components (e.g., guestbook forms, CMS lists), local state management, and Server Actions.
   * *Prohibition*: **Must never import other modules directly** unless explicitly designed as a dependency layer. Always import from `@/common` or `@/lib` for generic tools.
3. **Shared Components (`common/components/`)**:
   * *Responsibility*: Generic design primitives (`common/components/ui/`), layout shells (`common/components/layout/`), and system feedback tools (`common/components/feedback/`).
   * *Prohibition*: **Must remain framework-agnostic** wherever possible. They must not bind directly to route parameters or make direct database queries.
4. **Hooks Layer (`hooks/`)**:
   * *Responsibility*: Reusable React context/state utility hooks (e.g., media queries, mounted state checking).
   * *Prohibition*: Must not import file-system configurations, node-specific modules, or service logic directly.
5. **Services Layer (`services/`)**:
   * *Responsibility*: The sole entry point allowed to communicate with external data adapters, third-party APIs, and the database.
   * *Prohibition*: Must not import or reference React components, hooks, or client-side context models.

---

## 5. Folder Mapping Rules

To preserve clean codebase boundaries, all new files must be placed according to these strict pathways:
* **Feature Component (e.g., Hero section)**: `modules/home/components/hero.tsx` (grouped by feature area).
* **Generic UI Primitives (e.g., a button)**: `common/components/ui/button.tsx` (reusable and design-system bound).
* **Shared Layout Frame (e.g., section wrapper)**: `common/components/layout/section.tsx`.
* **General Helper Function**: `lib/helpers.ts` or `lib/utils.ts`.
* **Database & Service Client logic**: `services/` (e.g., `services/github.ts`).
* **Validation Schema**: `lib/validations/` (e.g., `lib/validations/guestbook.ts`).
* **TypeScript Types**: `types/` (grouped by domain, e.g., `types/database.ts`).
* **Reusable Hooks**: `hooks/` (prefixed with `use`).

---

## 6. Component Hierarchy Rules

We enforce a strict bottom-up dependency rule to avoid circular dependencies:

```
Primitive UI (common/components/ui)
        ↓
Shared Layout (common/components/layout)
        ↓
Feature Components (modules/<feature>/components)
        ↓
Pages & Layouts (app/)
```

* **Direction of Dependencies**: Higher levels can import lower levels (e.g., a module component can import `Button`). Lower levels **must never** import higher levels.
* **Circular Dependencies**: Do not import components across horizontal levels (e.g., a primitive component must not import another primitive component unless it is a sub-compound element).

---

## 7. Import Rules
* **Alias Imports**: Always use the defined path aliases instead of complex relative imports.
  * `@/common/*` for shared components and layouts.
  * `@/modules/*` for specific features.
  * `@/services/*` for database and external wrappers.
  * `@/hooks/*` for react utilities.
  * `@/lib/*` for tokens, constants, and utilities.
* **Prohibited Imports**:
  * Never allow relative paths going up beyond the project root (e.g., `../../../common/`).
  * Never import from `app/` inside `common/` or `modules/`.

---

## 8. Naming Conventions

All codebase identifiers must follow this naming convention:
* **Folders**: lowercase kebab-case (e.g., `common/components`, `lib/motion`).
* **Files**: kebab-case (e.g., `theme-provider.tsx`, `github-statistics.ts`).
* **React Components**: PascalCase (e.g., `PageTransition`, `Button`).
* **React Hooks**: camelCase starting with `use` (e.g., `useMediaQuery`).
* **Types & Interfaces**: PascalCase (e.g., `ColorPalette`, `ThemePreset`).
* **Enums**: PascalCase (e.g., `CategoryType`).
* **Constants**: UPPER_SNAKE_CASE (e.g., `DURATIONS`, `EASING_CURVES`).
* **Utility Functions**: camelCase (e.g., `disableMotionIfPreferred`).
* **Server Actions**: camelCase postfixed with `Action` or containing clear action verbs (e.g., `submitGuestbookEntry`).
* **MongoDB Models**: PascalCase singular (e.g., `Project`, `Certificate`).
* **Zod Schemas**: camelCase postfixed with `Schema` (e.g., `guestbookInputSchema`).

---

## 9. Git & Commit Convention

Every commit message must follow the semantic commit standard:
* `feat:`: Introducing a new feature or stage (e.g., `feat: implement homepage mobile layouts`).
* `fix:`: Bug fixes or layout resolution (e.g., `fix: resolve SSR hydration warning in footer`).
* `refactor:`: Code changes that neither fix a bug nor add a feature (e.g., `refactor: extract motion variants`).
* `perf:`: Changes that improve execution performance (e.g., `perf: add image size attributes`).
* `style:`: CSS, markup, formatting, or lint resolution without logic changes (e.g., `style: format global.css tokens`).
* `docs:`: Documentation updates (e.g., `docs: update roadmap status`).
* `test:`: Adding or correcting tests.
* `chore:`: Dependency updates, build configurations, or file cleanups (e.g., `chore: clean legacy playground files`).

---

## 10. Performance Rules
* **React Server Components (RSC) by Default**: All layout and page nodes are Server Components by default to minimize client-side bundle weight.
* **Client Components Only When Needed**: Add `"use client"` only for elements with user state (forms, modals, interactive dropdown buttons, motion components).
* **Lazy Loading & Dynamic Imports**: Complex modal windows or sub-features that are hidden on initial render must use `next/dynamic` or React `lazy` to optimize initial load times.
* **Suspense & Streaming**: Slow server-side fetches (e.g., GitHub statistics, guestbook database lists) must be wrapped in `<Suspense>` placeholders to support Next.js page streaming.
* **Image Optimization**: Always use the Next.js `<Image>` component with proper width, height, and placeholder properties. No plain `<img>` tags on main routes.
* **Avoid Layout Thrashing**: Animate only GPU-accelerated properties (`opacity`, `translate`, `scale`). Do not animate properties that force page recalculation (like `width`, `height`, `margin`).

---

## 11. Accessibility Rules (WCAG AA Compliance)
* **Keyboard Navigation**: All interactive components must be focusable using the `Tab` key and navigable using `Enter` or `Space`.
* **Focus Management**: Focus rings (`ring-2 ring-primary`) must be clearly visible during keyboard navigation.
* **Semantic HTML**: Use proper semantic HTML5 tags: `<main>`, `<header>`, `<footer>`, `<section>`, `<nav>`, and structural headings `<h1>`-`<h6>` in hierarchical order.
* **ARIA Landmarks**: Provide descriptive `aria-label`, `aria-expanded`, and `aria-hidden` attributes on stateful items.
* **Touch Targets**: Mobile tap targets (buttons, links, controls) must be at least `44px` x `44px` to prevent misclicks on touch screens.
* **Reduced Motion Compliance**: Build alternative instant animations when `prefers-reduced-motion` is active.

---

## 12. Motion Rules
* **Centralized System**: Use the values defined in `lib/motion/` exclusively. Do not write raw transition/easing arrays in components.
* **Timing & Curves**: Standardize on `DURATIONS.fast` (150ms) for hover elements and `DURATIONS.normal` (300ms) for page components. Always use `EASING_CURVES.easeStandard` or pegs for a fluid feel.
* **No Redundant Variants**: Use the standard variants (`fade`, `fadeUp`, `zoom`) via the `<PageTransition>` wrapper or direct Framer Motion tags.

---

## 13. Design System Rules
* **Official Palette**:
  * **Light Theme**: Zinc Neutral background (`#fafafa`).
  * **Dark Theme**: Porcelain White background (`#090d16`).
* **Accents**:
  * **Marine Deep (`#2563eb`)** for principal interactions, active links, and buttons.
  * **Obsidian Violet (`#7c3aed`)** for highlights, certificates, and accents.
* **Borders over Shadows**: Thin high-contrast borders (`border-[rgba(0,0,0,0.08)]` and `border-[rgba(255,255,255,0.06)]`) are preferred.
* **Sizing Scales**: Layout margins and paddings must stick to the 8px multiplier system (`space-y-4`, `p-8`, `gap-6`, `py-20`).

---

## 14. AI Behavior Rules
* **Folder Preservation**: Never rename or delete core structural directories (`app/`, `common/`, `services/`, `lib/motion/`).
* **API Stability**: Do not modify prop signatures of existing components unless explicitly required.
* **Validation Gating**: Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` after every stage. Do not ignore errors.
* **Zero Placeholders**: Do not insert placeholder text, simulated logs, or dummy mocks inside production paths.
* **Documentation Maintenance**: Never clear out, truncate, or delete historical architecture docs from the `/docs` folder.

---

## 15. Decision Priority

When conflicts in requirement definitions or implementations arise, resolve them using this priority:
1. **User Instructions** (Active conversation requests)
2. **`docs/project-roadmap.md`** (Project roadmap phases)
3. **`docs/implementation-status.md`** (Technology stacks)
4. **Context Discovery Report** (This architecture ruleset)
5. **`AGENTS.md`** (When created)
6. **`README.md`**
7. **Existing Code Patterns**

---

## 16. Error Handling Strategy
* **Global Error Philosophy**: Fail gracefully, capture error states at boundaries, and never leak technical stack traces to the end user.
* **Error Boundaries**: Place React `ErrorBoundary` wraps or Next.js `error.tsx` layers at routing root intersections (e.g., `app/error.tsx`) to catch unhandled rendering exceptions.
* **not-found Handling**: Use Next.js `not-found.tsx` at route segments. Use `notFound()` programmatically inside page nodes when server fetches return null.
* **loading.tsx Usage**: Create scoped `loading.tsx` loaders for App Router page folders to provide automatic skeleton streaming while page promises resolve.
* **Server Action Errors**: Wrap action handlers in try/catch blocks. Return typed result objects (e.g., `{ success: false, error: "Friendly message" }`) instead of throwing uncaught errors to the client.
* **Logging Strategy**: Log system anomalies on the server using custom error classes.
* **Custom Error Classes**: Define domain-specific errors in `lib/errors.ts` extending native `Error` (e.g., `DatabaseError`, `ValidationError`).
* **Retry Philosophy**: Implement linear backoff retries exclusively for critical background fetches (like database reconnections in `services/mongodb.ts`).

---

## 17. Logging & Debugging Rules
* **Development Logging**: Console logs (`console.log`, `console.warn`) are permitted only during active debugging sessions.
* **Production Logging**: Log warnings and database exceptions to secure server consoles. Prevent user-facing logs on production builds.
* **Console Usage Rules**: All temporary diagnostic console messages must be removed before code is submitted.
* **Forbidden Logs**: Never log personal data, authentication tokens, password hashes, email strings, or database credentials.
* **Future Monitoring**: Design with telemetry hooks ready for future Sentry or Logtail integration.

---

## 18. Security Rules
* **Authentication Philosophy**: Secured using Auth.js (v5) with stateless token validations (temporarily disabled for Stage 06).
* **Authorization Layers**: Block administrative routes via Next.js Middleware and verify admin role flags on the database session before executing actions.
* **Input Validation**: Validate every Server Action input payload using strict Zod schemas inside `lib/validations/`.
* **Output Sanitization**: Escape user text rendering to prevent Cross-Site Scripting (XSS).
* **Server Actions Security**: Check user sessions on the server for all write operations.
* **Environment Variable Safety**: Do not prefix private keys or database passwords with `NEXT_PUBLIC_`.
* **Secrets Management**: Keep credentials strictly inside local `.env` files. Never commit secrets to Version Control.

---

## 19. Environment Variable Policy
* **Public Variables**: Prefixed with `NEXT_PUBLIC_` (e.g., `NEXT_PUBLIC_SITE_URL`).
* **Server Variables**: Secret credentials only readable by node environments (e.g., `MONGODB_URI`, `AUTH_SECRET`, `RESEND_API_KEY`).
* **Required Category**: Build fails if `MONGODB_URI` is undefined.
* **Validation Strategy**: Validate environment variables during application startup inside `lib/validations.ts`.
* **New Variables**: AI agents must seek explicit approval before adding new variables to configuration templates.

---

## 20. State Management Strategy
* **React State Preferred**: Use standard component state (`useState`, `useReducer`) for localized UI logic (modals, inputs, form fields).
* **Context API**: Allowed only for global cross-cutting settings (like theme engines, layout switchers).
* **SWR / React Query**: Use SWR for client-side API fetches that require caching and revalidation.
* **localStorage**: Allowed only for non-sensitive client preferences (e.g., dismissing banners, user theme favorites).
* **Cookies**: Allowed for authorization sessions and locales.
* **Forbidden Patterns**: Never use heavy global state libraries (Redux, MobX) unless explicitly requested.

---

## 21. Server / Client Component Rules
* **Server Components by Default**: Default to React Server Components (RSC) to maximize loading speeds.
* **Client Components**: Add `"use client"` only when utilizing hooks (`useState`, `useEffect`, `useContext`) or registering DOM event listeners.
* **Server Actions Rules**: Write actions inside separate files marked with `"use server"`. Pass serialized parameters only.
* **Suspense Usage**: Wrap heavy components in `<Suspense>` loaders to enable partial page rendering.

---

## 22. SEO Strategy
* **Metadata Generation**: Implement Next.js `generateMetadata()` for dynamic routes to generate titles and descriptions.
* **Social Media Cards**: Define OpenGraph and Twitter card schemas inside layout metadata structures.
* **Sitemaps & Robots**: Maintain static/dynamic `sitemap.xml` and `robots.txt` mapping guidelines at root.
* **Canonical URLs**: Output unique canonical URLs on every page metadata instance.

---

## 23. File & Media Strategy
* **Image Storage**: Upload and manage media assets through Uploadthing.
* **Image Optimization**: Use the Next.js `<Image>` component to automate WebP conversion and responsive scaling.
* **Naming Convention**: File uploads must use kebab-case and include descriptive keywords for SEO.
* **Compression**: All portfolio images must be compressed before uploading.

---

## 24. Database Evolution Strategy
* **Repository Pattern**: Wrap all MongoDB operations inside a clean data access layer under `services/`.
* **Collection Naming**: Singular, lowercase kebab-case (e.g., `projects`, `certificates`).
* **Index Strategy**: Define indexes on fields used frequently for sorting or lookup (e.g., `createdAt`).
* **Soft Delete**: Use active flags instead of removing records for CMS documents.

---

## 25. API Design Standards
* **Server Actions Preference**: Use Server Actions for form submissions and internal state modification.
* **REST Routes**: Allowed only for external webhooks or third-party integrations (under `app/api/`).
* **Response Format**: Maintain consistent JSON structures: `{ success: boolean, data?: T, error?: string }`.
* **Validation**: Validate all payloads through Zod schemas before database inserts.

---

## 26. Future Expansion Roadmap
The system's modular architecture is designed to scale clean components into the following systems:
* **CMS Module**: Dashboard routes under `app/admin/` with Server Actions doing validation.
* **Media Uploads**: Integrates with Uploadthing via `services/upload.ts`.
* **Visitor Metrics**: Read/Write stats to MongoDB using service queries.
* **Contact & Mailer**: Send validation alerts via Resend and React Email.

---

## 27. Engineering Checklist
* [ ] Read `docs/project-roadmap.md` to identify the active Stage.
* [ ] Read `docs/implementation-status.md` to align technology stack boundaries.
* [ ] Verify file pathways comply with **Folder Mapping Rules**.
* [ ] Ensure all imported components comply with the **Component Hierarchy**.
* [ ] Verify accessibility focus parameters and touch boundaries.
* [ ] Execute ESLint validation checks (`npm run lint`).
* [ ] Execute TypeScript type check (`npx tsc --noEmit`).
* [ ] Execute production build pipeline (`npm run build`).

---

## 28. Repository Invariants
* Strict TypeScript constraints (`strict: true`, `noImplicitReturns: true`, `noUnusedLocals: true`, `noUnusedParameters: true`).
* Mono-theme config (Zinc Neutral light, Porcelain White dark).
* Centralized motion configurations (`lib/motion/`).
* Separation of Concerns: Primitives under `common/`, features under `modules/`, routes under `app/`.

---

## 29. Readiness Score for AGENTS.md
* **Readiness**: **100%**
* **Rationale**: The engineering boundaries, accessibility standards, error architectures, secure environments, and validation pipelines have been comprehensively audited and structured. No facts are left undefined. The architecture is fully prepared to compile `AGENTS.md` rules.
