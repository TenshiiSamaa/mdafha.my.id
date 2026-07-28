"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Dropdown } from "../ui/dropdown";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  const themeDropdownItems = [
    { label: "Light", onClick: () => setTheme("light") },
    { label: "Dark", onClick: () => setTheme("dark") },
    { label: "System", onClick: () => setTheme("system") },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold text-primary-500 tracking-tight">
          {SITE_CONFIG.shortName}
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-500",
                  isActive ? "text-primary-500" : "text-foreground/75"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Actions panel */}
        <div className="flex items-center space-x-2">
          {/* Theme Mode Switcher */}
          <Dropdown
            trigger={
              <Button variant="ghost" size="sm" className="p-2 h-9 w-9 relative flex items-center justify-center">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            }
            items={themeDropdownItems}
          />

          {/* Mobile Overlay Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
