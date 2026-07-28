"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Close menu on route changes (render-phase reset)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-background/95 border-b border-card-border p-6 backdrop-blur-md transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary-500",
                    isActive ? "text-primary-500" : "text-foreground/75"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
