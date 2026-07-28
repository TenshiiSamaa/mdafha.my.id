import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "error";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
        {
          "border-transparent bg-primary-600 text-white": variant === "default",
          "border-transparent bg-neutral-100 dark:bg-neutral-800 text-foreground": variant === "secondary",
          "border-card-border text-foreground": variant === "outline",
          "border-transparent bg-status-success/10 text-status-success": variant === "success",
          "border-transparent bg-status-warning/10 text-status-warning": variant === "warning",
          "border-transparent bg-status-error/10 text-status-error": variant === "error",
        },
        className
      )}
      {...props}
    />
  );
}
