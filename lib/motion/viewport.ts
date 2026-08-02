import { UseInViewOptions } from "framer-motion";

/**
 * Reusable Viewport Helpers for Scroll-triggered Animations
 */

export const VIEWPORT_PRESETS = {
  // Default entry trigger (fires once when 15% visible)
  default: {
    once: true,
    amount: 0.15,
  },
  
  // Repeating entry trigger (re-fires every time it is 15% visible)
  repeat: {
    once: false,
    amount: 0.15,
  },
  
  // Custom margin trigger (good for items near page top/bottom)
  marginTrigger: {
    once: true,
    amount: 0.1,
    margin: "0px 0px -50px 0px",
  },
} as const satisfies Record<string, UseInViewOptions>;

/**
 * Dynamically configures viewport parameters with safety controls.
 */
export function getViewportConfig(
  options: Partial<UseInViewOptions> = {}
): UseInViewOptions {
  return {
    once: options.once ?? true,
    amount: options.amount ?? 0.15,
    margin: options.margin,
  };
}
