import { Variants } from "framer-motion";
import { DURATIONS } from "./tokens";
import { EASING_CURVES, SPRING_PRESETS } from "./easing";

/**
 * Type-safe and warning-free helper to strip transforms and timing offsets
 * if the user has requested "prefers-reduced-motion".
 * Prevents Next.js SSR hydration mismatch errors.
 */
export function disableMotionIfPreferred(variants: Variants): Variants {
  if (typeof window === "undefined") return variants;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReduced) return variants;

  const reduced: Variants = {};
  for (const [key, val] of Object.entries(variants)) {
    if (typeof val === "object" && val !== null) {
      const cleaned: Record<string, unknown> = {};
      for (const [prop, propVal] of Object.entries(val)) {
        // Strip out translation, rotation, and scaling transformations
        if (!["x", "y", "scale", "rotate", "rotateX", "rotateY", "skewX", "skewY"].includes(prop)) {
          cleaned[prop] = propVal;
        }
      }
      reduced[key] = {
        ...cleaned,
        transition: { duration: 0 }, // instantaneous transition
      };
    } else {
      reduced[key] = val;
    }
  }
  return reduced;
}

/**
 * Standard Reusable Motion Variants
 */

// 1. Fade
export const fade: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeStandard } },
  exit: { opacity: 0, transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeStandard } },
};

// 2. Fade Up (Y offset slide entry)
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: DURATIONS.normal, ease: EASING_CURVES.easeDecelerate } },
  exit: { opacity: 0, y: 16, transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeAccelerate } },
};

// 3. Fade Down
export const fadeDown: Variants = {
  initial: { opacity: 0, y: -16 },
  animate: { opacity: 1, y: 0, transition: { duration: DURATIONS.normal, ease: EASING_CURVES.easeDecelerate } },
  exit: { opacity: 0, y: -16, transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeAccelerate } },
};

// 4. Slide Left (X offset slide entry from right to left)
export const slideLeft: Variants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0, transition: { duration: DURATIONS.normal, ease: EASING_CURVES.easeDecelerate } },
  exit: { opacity: 0, x: 24, transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeAccelerate } },
};

// 5. Slide Right (X offset slide entry from left to right)
export const slideRight: Variants = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0, transition: { duration: DURATIONS.normal, ease: EASING_CURVES.easeDecelerate } },
  exit: { opacity: 0, x: -24, transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeAccelerate } },
};

// 6. Zoom
export const zoom: Variants = {
  initial: { opacity: 0, scale: 0.93 },
  animate: { opacity: 1, scale: 1, transition: SPRING_PRESETS.default },
  exit: { opacity: 0, scale: 0.93, transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeAccelerate } },
};

// 7. Stagger Container
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

// 8. Stagger Children
export const staggerChildren: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.normal, ease: EASING_CURVES.easeDecelerate },
  },
};

// 9. Page Transition
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.normal, ease: EASING_CURVES.easeDecelerate, delay: 0.05 },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeAccelerate },
  },
};

// 10. Modal Window (Centered Dialog)
export const modal: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: SPRING_PRESETS.gentle,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeAccelerate },
  },
};

// 11. Drawer (Slide from bottom or side sheet)
export const drawer: Variants = {
  initial: { y: "100%", opacity: 0.8 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATIONS.normal, ease: EASING_CURVES.easeDecelerate },
  },
  exit: {
    y: "100%",
    opacity: 0.8,
    transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeAccelerate },
  },
};

// 12. Dropdown (Popover list popup)
export const dropdown: Variants = {
  initial: { opacity: 0, scale: 0.96, y: -4 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATIONS.fast, ease: EASING_CURVES.easeDecelerate },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -4,
    transition: { duration: 0.1, ease: EASING_CURVES.easeAccelerate },
  },
};

// 13. Tooltip (Spring micro zoom)
export const tooltip: Variants = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1, transition: SPRING_PRESETS.snappy },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.08 } },
};

// 14. Loading Spinner (Infinite Rotate)
export const spinner: Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: "linear" },
  },
};

// 15. Skeleton Shimmer (Infinite opacity pulse)
export const skeleton: Variants = {
  animate: {
    opacity: [0.4, 0.9, 0.4],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};

// 16. Progress Bar Indeterminate Fill Shimmer
export const progress: Variants = {
  animate: {
    x: ["-100%", "100%"],
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
};
