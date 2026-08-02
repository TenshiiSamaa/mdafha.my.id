"use client";

import React from "react";
import { motion } from "framer-motion";
import { pageTransition, disableMotionIfPreferred } from "./variants";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable Page Transition Wrapper Component
 * Automatically respects screen reader reduced-motion parameters.
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const safeVariants = disableMotionIfPreferred(pageTransition);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={safeVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
