import type * as React from "react";

/**
 * Shared UI Type Definitions
 * Digunakan oleh seluruh komponen UI di project ini.
 */

// ── Size Variants ───────────────────────────────────────────────────────────

/** Standard size scale untuk komponen interaktif */
export type Size = "sm" | "md" | "lg";

/** Extended size scale termasuk xs dan xl */
export type SizeExtended = "xs" | "sm" | "md" | "lg" | "xl";

// ── Color Variants ──────────────────────────────────────────────────────────

/** Semantic color intent variants */
export type ColorVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "ghost"
  | "outline";

/** Status color variants (untuk feedback states) */
export type StatusVariant = "success" | "warning" | "error" | "info";

// ── Layout Direction ────────────────────────────────────────────────────────

export type Direction = "horizontal" | "vertical";
export type Alignment = "start" | "center" | "end";
export type Justify = "start" | "center" | "end" | "between" | "around";

// ── Base Component Props ────────────────────────────────────────────────────

/** Props dasar yang dimiliki hampir semua UI components */
export interface BaseComponentProps {
  /** Custom Tailwind class names */
  className?: string;
  /** Unique element ID */
  id?: string;
}

/** Props untuk komponen yang memiliki children */
export interface WithChildren {
  children: React.ReactNode;
}

/** Props untuk komponen yang memiliki optional children */
export interface WithOptionalChildren {
  children?: React.ReactNode;
}

// ── Icon Props ──────────────────────────────────────────────────────────────

/** Tipe standar untuk Lucide React icon component */
export type LucideIcon = React.ComponentType<{
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}>;
