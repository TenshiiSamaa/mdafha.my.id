import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function Header({ className, title, description, ...props }: HeaderProps) {
  return (
    <div className={cn("border-b border-card-border bg-card-bg/10 py-8 md:py-12", className)} {...props}>
      <Container>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-base md:text-lg text-foreground/70 max-w-3xl">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
