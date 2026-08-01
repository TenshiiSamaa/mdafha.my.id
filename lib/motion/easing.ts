/**
 * Reusable Easing Curves and Spring Presets
 * Focuses on natural acceleration/deceleration physics.
 */

export const EASING_CURVES = {
  easeStandard: [0.4, 0, 0.2, 1],      // General motion (Tailwind ease-in-out default)
  easeAccelerate: [0.4, 0, 1, 1],    // Exit transitions
  easeDecelerate: [0, 0, 0.2, 1],      // Entrance transitions
  easeEmphasized: [0.2, 0.8, 0.2, 1],  // Fluid, responsive spring-like curves
} as const;

export const SPRING_PRESETS = {
  // Snappy spring (great for micro-interactions, tooltips, tags)
  snappy: {
    type: "spring",
    stiffness: 400,
    damping: 28,
  },
  
  // Default spring (general elements, scale transforms)
  default: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
  
  // Gentle spring (fluid and slow, ideal for dialogs and modal reveals)
  gentle: {
    type: "spring",
    stiffness: 180,
    damping: 22,
  },
} as const;
