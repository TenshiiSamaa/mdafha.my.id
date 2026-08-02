import { TargetAndTransition } from "framer-motion";
import { SCALES } from "./tokens";

/**
 * Reusable Hover Transitions
 * Calibrated for smooth transforms on interactive components.
 */
export const HOVER_PRESETS = {
  // Subtle vertical lift (great for interactive cards)
  lift: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" },
  } as TargetAndTransition,

  // Subtle scale lift (for buttons)
  scale: {
    scale: SCALES.hoverLift,
    transition: { duration: 0.15, ease: "easeOut" },
  } as TargetAndTransition,

  // Delicate scale lift (for larger cards/banners)
  scaleSubtle: {
    scale: SCALES.hoverTiny,
    transition: { duration: 0.2, ease: "easeOut" },
  } as TargetAndTransition,

  // Translation offset for inside icons (e.g. arrow moving right on hover)
  iconTranslateRight: {
    x: 4,
    transition: { duration: 0.15, ease: "easeOut" },
  } as TargetAndTransition,

  // Image brightness zoom hover effect
  imageZoom: {
    scale: 1.05,
    filter: "brightness(1.05)",
    transition: { duration: 0.3, ease: "easeOut" },
  } as TargetAndTransition,

  // Subtle background glow/border accent hover
  buttonGlow: {
    boxShadow: "0 0 12px var(--accent1-glow)",
    transition: { duration: 0.2, ease: "easeOut" },
  } as TargetAndTransition,
} as const;
