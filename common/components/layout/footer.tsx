import { Container } from "./container";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-card-border bg-card-bg/10 py-8">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
        <p>
          &copy; {currentYear} {SITE_CONFIG.author}. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm">
          Designed with production-grade engineering guidelines.
        </p>
      </Container>
    </footer>
  );
}
