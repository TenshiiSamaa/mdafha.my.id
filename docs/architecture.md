# System Architecture Specification — Mdafha Portfolio

This document defines the production-grade system architecture, communication patterns, request lifecycles, and security models of the `mdafha.my.id` application. It serves as the master blueprint for human engineers and automated coding agents to maintain high consistency as the project scales.

---

## 1. High-Level Overview

The system is structured as an N-tier application utilizing Next.js Server Components at the boundary, delegating to feature-scoped modular structures, and communicating through repository wrappers to a MongoDB database.

```
                  [ Web Browser / Client ]
                             │
                             ▼ (HTTPS)
                 [ Routing Layer (app/) ]
                             │
                             ▼ (RSC / Render)
                [ Feature Modules (modules/) ]
                             │
                             ▼ (Server Actions)
               [ Repository Layer (services/) ]
                             │
                             ▼ (MongoClient Connection)
                  [ Database (MongoDB) ]
```

### Flow of Execution:
1.  **Browser**: Initiates HTTP requests or triggers user interactions (Framer Motion animations, Server Action submissions).
2.  **Next.js App Router**: Matches requested routes, resolves layouts, and executes Root Server Components.
3.  **Modules**: Processes feature-scoped business logic and formats domain-specific component grids.
4.  **Shared Components**: Consumes generic primitive tokens (e.g. Buttons, Card boxes) to build accessible templates.
5.  **Server Actions**: Securely handles server-side modifications (like Guestbook submissions) triggered by the browser.
6.  **Repository Layer**: Encapsulates specific raw database query interfaces, enforcing validation.
7.  **Database**: Fetches data from MongoDB Atlas database.
8.  **External Services**: Accesses third-party interfaces (Uploadthing for assets, Resend for email notifications).
9.  **Response**: Streams HTML segments or JSON action results back to the browser.

---

## 2. Layer Architecture

To prevent tight coupling, the codebase enforces strict separation of concerns:

### Routing Layer (`app/`)
*   **Purpose**: Manages routing paths, static layout wrapping, metadata definitions, and cache controls.
*   **Allowed Dependencies**: `@/modules` (feature pages), `@/common` (shell layout), and `@/lib` (metadata/transitions).
*   **Forbidden Dependencies**: **Must not directly query databases** or construct raw network requests.

### Business Layer (`modules/`)
*   **Purpose**: Encapsulates feature-scoped parts (e.g., home sections, guestbook forms).
*   **Allowed Dependencies**: `@/common/components/ui`, `@/lib`, and database schemas.
*   **Forbidden Dependencies**: Must not import from other business folders directly to avoid circular dependency chains.

### Shared UI (`common/components/`)
*   **Purpose**: Design system primitives (buttons, inputs) and layout utilities (containers, sections).
*   **Allowed Dependencies**: Tailwind configuration utilities and standard React hooks.
*   **Forbidden Dependencies**: Must not depend on any business layers or specific routing page parameters.

### Repository Layer (`services/`)
*   **Purpose**: Data access layer wrapping MongoDB collections or third-party web services.
*   **Allowed Dependencies**: `@/types`, `@/lib/validations`, and raw database clients.
*   **Forbidden Dependencies**: Must never import React components, hooks, or client-side assets.

---

## 3. Folder Architecture

The directory layout enforces single-responsibility boundaries:
*   `app/`: Next.js App Router routing segments. Owns the route entry files (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`).
*   `modules/`: Feature-scoped business folders. Owns components, actions, and custom sub-states.
*   `common/`: Shared layout primitives and feedback screens.
*   `hooks/`: Reusable react hooks.
*   `lib/`: Design tokens, motion system configs, and global helpers.
*   `services/`: Communication layer for external systems and MongoDB access.
*   `types/`: Type definitions and interfaces.
*   `styles/`: CSS sheets and Tailwind typography mappings.

---

## 4. Request Lifecycle

The application processes requests through a unidirectional path:

```
[ User Request ] -> [ App Router ] -> [ Server Component ] -> [ Repository (MongoDB) ]
                                                                        │
[ Client Interaction ] <- [ Hydration ] <- [ HTML Stream ] <- [ Zod Validation ]
```

1.  **User Request**: Browser navigates to page.
2.  **App Router**: Matches path and initiates page execution.
3.  **Server Component**: Resolves layout promises and requests database fetches.
4.  **Repository**: Fetches raw data from MongoDB Atlas.
5.  **Data Validation**: Formats and validates retrieved structures through Zod schemas.
6.  **HTML Stream**: Next.js streams the server-rendered HTML down to the browser.
7.  **Hydration**: React attaches client-side event handlers and animations.
8.  **Client Interaction**: User triggers form actions or micro-interactions.

---

## 5. Rendering Strategy

The portfolio utilizes Next.js rendering optimizations:
*   **Server Components (RSC)**: Renders static nodes on the server, sending 0kb JS for structural components.
*   **Client Components**: Embedded selectively using `"use client"` for dynamic forms, sliders, and animation shells.
*   **Static Rendering**: Main routes (Home, Projects) are pre-rendered during build to maximize delivery speed.
*   **Streaming & Suspense**: Heavy sections (like contribution charts) stream lazily to support partial page loading.
*   **Error & Not Found**: Bound globally via Next.js `error.tsx` and programmatically using `notFound()`.

---

## 6. Theme System

The design uses `next-themes` and CSS custom variables:
*   **Tokens Configuration**: Defined in [app/globals.css](file:///c:/Users/Acer/Music/Project%20note%20js/mdafha.my.id/app/globals.css).
*   **Official Palettes**:
    *   **Light Theme**: Zinc Neutral background (`#fafafa`) with dark text (`#111827`).
    *   **Dark Theme**: Porcelain White background (`#090d16`) with light text (`#f9fafb`).
*   **Accents**:
    *   **Marine Deep (`#2563eb`)** handles primary inputs and interaction indicators.
    *   **Obsidian Violet (`#7c3aed`)** is used for badges, highlight certificates, and borders.

---

## 7. Motion Architecture

The motion system is configured in `lib/motion/`:
*   **Motion Tokens**: Standard timings (`DURATIONS.fast` = 150ms) and spring settings are used for all components.
*   **Framer Motion Variants**: Common variants (`fade`, `fadeUp`, `staggerContainer`) are configured centrally.
*   **Reduced Motion**: All animations are passed through `disableMotionIfPreferred` to strip transitions if the user prefers reduced motion.

---

## 8. Data Layer

The database access layer wraps raw operations in a repository pattern:
*   **Database Client**: MongoClient instance configured with reuse limits in `services/mongodb.ts`.
*   **Validation**: Every document written to or read from MongoDB must validate against a Zod schema.
*   **Repository Wrapper**: Deconstructs CRUD functions to prevent raw collection strings from leaking into page logic.

---

## 9. Authentication Flow

*   **Framework**: Auth.js (v5) configured with OAuth adapters.
*   **Status**: Currently disabled for Stage 06.
*   **Session Flow**: Restores user details dynamically using lightweight cookies.
*   **Protected Access**: Admin panel routes (`app/admin/*`) are protected using middleware session validation checks.

---

## 10. External Integrations

*   **GitHub API**: Fetches repository data and statistics.
*   **Uploadthing**: File storage client used for images and certificates.
*   **Resend & React Email**: Email delivery service for contact notifications.

---

## 11. Component Architecture

*   **Primitive Components**: Primitives under `common/components/ui/` extend standard HTML interfaces and are styled using Tailwind classes.
*   **Layout Components**: Framework shell units (`Navbar`, `Footer`, `Section`).
*   **Feature Components**: Complex components located in `modules/` that manage local state and Server Actions.
*   **Composition Rules**: Standardize nesting configurations. Business features must not be placed inside generic primitives.

---

## 12. File Dependency Rules

*   **Alias imports**: Always use alias pathways (`@/common`, `@/modules`, `@/lib`, `@/services`).
*   **Circular Imports**: Avoid circular imports by enforcing bottom-up dependency rules (primitives cannot import features).

---

## 13. State Management

*   **Local State**: Managed using React `useState` and `useReducer` inside Client Components.
*   **Context API**: Reserved for application-wide states (such as Theme Provider).
*   **SWR**: Standard client-side fetcher used for real-time guestbook updates.

---

## 14. Error Handling

*   **Operational Errors**: Captured at the boundary and returned as formatted `{ success: false, error: string }` results.
*   **System Exceptions**: Captured using React `ErrorBoundary` and Next.js `error.tsx` pages.

---

## 15. Performance Strategy

*   **Asset Compression**: Images are compressed using WebP and rendered through Next.js `<Image>`.
*   **RSC Caching**: Cache data queries using Next.js caching APIs.
*   **Dynamic Loading**: Heavy modal boxes are loaded dynamically using `next/dynamic`.

---

## 16. Security Architecture

*   **Input Validation**: All payloads are validated using Zod.
*   **SQL/NoSQL Injection**: Prevent injection by avoiding raw MongoDB queries inside strings; queries must use typed query objects.
*   **CSRF & XSS Protection**: Next.js Server Actions automatically protect against CSRF. Rendered outputs are escaped by default to prevent XSS.

---

## 17. SEO Architecture

*   **Dynamic Metadata**: Configured using `generateMetadata()` at the route level.
*   **XML Sitemaps**: Dynamic `sitemap.xml` automatically registers newly updated projects.
*   **Structured Data**: Generates JSON-LD schema blocks for better search indexing.

---

## 18. Deployment Flow

*   **Development**: Tested locally using `npm run dev` with PostCSS compilation.
*   **Build Pipeline**: Runs ESLint, type checking, and Turbopack builds.
*   **Hosting**: Deployed on Vercel with serverless functions.

---

## 19. Future Expansion

The system architecture is designed to support modular expansions:
*   **Admin Dashboard**: Fully secure `/admin` sub-route used to manage CMS collections.
*   **Upload Integration**: File uploads managed via Uploadthing API handlers.

---

## 20. Engineering Principles Summary

The Mdafha Portfolio project is built on SOLID, DRY, and KISS principles. Business logic remains separated from UI layers, ensuring scalability, security, and maintainability.
