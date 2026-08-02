/**
 * Design Tokens for Motion & Animation
 * Centralized constants for durations, delays, scale, and opacity values.
 * Calibrated for smooth, high-fidelity interfaces.
 */

export const DURATIONS = {
  instant: 0,
  fast: 0.15,    // Snappy micro-interactions, hover states, checkbox clicks (150ms)
  normal: 0.3,   // Standard elements entrance, dropdown reveals, slide-ups (300ms)
  slow: 0.5,     // Accordion expand/collapse, dialog transitions, sheets (500ms)
  slower: 0.8,   // Hero layouts, slower decorative entrance animations (800ms)
} as const;

export const DELAYS = {
  none: 0,
  snappy: 0.05,
  stagger: 0.06,  // Gap between staggered children elements
  entrance: 0.1,  // Delayed animation start for page contents
} as const;

export const OPACITY = {
  hidden: 0,
  visible: 1,
} as const;

export const SCALES = {
  hidden: 0.95,     // Standard scale fade-in offset
  zoom: 0.85,       // Pronounced spring zoom offset
  visible: 1,
  hoverLift: 1.02,  // Lift scale for interactive cards/buttons
  hoverTiny: 1.01,  // Delicate hover lift for larger cards
  tapSnappy: 0.98,  // Snappy press feedback
  tapDeep: 0.95,    // Deep press feedback for buttons
} as const;
