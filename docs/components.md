# UI Component System Documentation

This document explains the reusable component tokens, layout blocks, styling patterns, and animations defined in the portfolio.

---

## 1. Directory Structure

All components are strictly separated by responsibility:

*   `common/components/ui/` — Generic design primitives.
*   `common/components/layout/` — Layout systems, containers, headers, and navigation menus.
*   `common/components/feedback/` — Dynamic loading panels, not found displays, and error bounds.
*   `styles/` — Global CSS and utility styles.

---

## 2. Reusable Primitives (`common/components/ui/`)

### Button
*   **Variant Options:** `primary`, `secondary`, `outline`, `ghost`, `danger`.
*   **Size Options:** `sm`, `md`, `lg`.
*   **Additional Props:** `isLoading` (injects inline spinner and disables triggers).

### Input & Textarea
*   Aesthetic: Semitransparent card glass background with sharp focus borders matching theme accents.

### Card
*   Supports backdrop blur glass effects and smooth hover micro-animations.

### Badge
*   Variants: `default` (primary background), `secondary` (gray background), `outline`, `success`, `warning`, `error`.

### Modal
*   Accessible dialog container featuring a dark overlay backdrop, close triggers, and automatic Escape key listener.

### Dropdown
*   Uses Framer Motion animations to reveal list items when the trigger node is clicked. Closes automatically on outside click.

### Skeleton & Spinner
*   Provides animated pulse blocks and spinning visual components.

---

## 3. Layout System (`common/components/layout/`)

*   **Container (`container.tsx`):** Standardizes max width sizing constraints across layouts (`max-w-7xl`).
*   **Section (`section.tsx`):** Adds consistent top/bottom padding heights.
*   **Navbar (`navbar.tsx`):** Sticky, backdrop-blur desktop navigation panel including logo, page links, and next-themes switcher integration.
*   **MobileMenu (`mobile-menu.tsx`):** Overlay drawer toggle for mobile screen sizes.
*   **Header (`header.tsx`):** Displays banner descriptions for specific routes.
*   **Footer (`footer.tsx`):** Common page footnotes.

---

## 4. Animation Variants (`lib/animations.ts`)

Integrated using Framer Motion:
*   `fadeIn` — Slow opacity transition.
*   `slideUp` — Translates elements from Y: 20px on load.
*   `scaleUp` — Expands elements slightly from 95% scale.
*   `staggerContainer` — Delays load staggering of children.

---

## 5. Typography System (`styles/typography.ts`)

A collection of Tailwind style mappings exported under `TYPOGRAPHY`:
*   `h1` — Hero titles.
*   `h2`, `h3`, `h4` — Heading increments.
*   `p` — Body texts.
*   `lead` — Highlighting subheads.
*   `code` — Terminal block scripts.
