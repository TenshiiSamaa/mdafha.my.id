import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({ className, children, id, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", className)} {...props}>
      {children}
    </section>
  );
}
