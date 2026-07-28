/**
 * Design Token Constants
 *
 * TypeScript constants yang mencerminkan CSS custom properties di globals.css.
 * Gunakan ini di tempat yang tidak bisa menggunakan Tailwind class — misalnya
 * untuk nilai inline style, Framer Motion, atau Canvas/SVG.
 */

// ── Border Radius ───────────────────────────────────────────────────────────

export const RADIUS = {
  sm: "0.25rem",   // 4px  — untuk badge, tag kecil
  md: "0.5rem",    // 8px  — untuk input, button
  lg: "0.75rem",   // 12px — untuk card, panel
  xl: "1rem",      // 16px — untuk modal, dialog besar
  full: "9999px",  // untuk pill, avatar
} as const;

// ── Shadow ──────────────────────────────────────────────────────────────────

export const SHADOW = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  glow: "0 0 20px rgba(99, 102, 241, 0.15)",
  glowDark: "0 0 30px rgba(99, 102, 241, 0.25)",
} as const;

// ── Spacing (base 4px grid) ─────────────────────────────────────────────────

export const SPACING = {
  0: "0px",
  1: "0.25rem",  // 4px
  2: "0.5rem",   // 8px
  3: "0.75rem",  // 12px
  4: "1rem",     // 16px
  5: "1.25rem",  // 20px
  6: "1.5rem",   // 24px
  8: "2rem",     // 32px
  10: "2.5rem",  // 40px
  12: "3rem",    // 48px
  16: "4rem",    // 64px
  20: "5rem",    // 80px
  24: "6rem",    // 96px
} as const;

// ── Z-Index ─────────────────────────────────────────────────────────────────

export const Z_INDEX = {
  base: 0,
  dropdown: 20,
  sticky: 40,
  overlay: 50,
  modal: 60,
  toast: 70,
  tooltip: 80,
} as const;

// ── Transition Durations ────────────────────────────────────────────────────

export const DURATION = {
  fast: 0.15,    // Quick micro-interactions
  normal: 0.3,   // Standard transitions
  slow: 0.5,     // Entrance animations
  slower: 0.8,   // Hero/page transitions
} as const;

// ── Breakpoints (matches Tailwind v4 defaults) ──────────────────────────────

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
