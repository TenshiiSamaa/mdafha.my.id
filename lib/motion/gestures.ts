import { TargetAndTransition } from "framer-motion";
import { SCALES } from "./tokens";

/**
 * Reusable press and tap feedback gestures
 * Keeps transformations subtle and fast.
 */
export const GESTURES = {
  // Snappy button tap feedback
  tapButton: {
    scale: SCALES.tapSnappy,
  } as TargetAndTransition,

  // Deep press button/card tap feedback
  tapDeep: {
    scale: SCALES.tapDeep,
  } as TargetAndTransition,

  // Soft tap gesture for cards or lists
  tapCard: {
    scale: 0.99,
  } as TargetAndTransition,

  // Snappy spring-back tap transition
  tapTransition: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  },
} as const;
