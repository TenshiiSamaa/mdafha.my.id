"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Type,
  Palette,
  MousePointer,
  Tag,
  Square,
  AlignLeft,
  User,
  AlertCircle,
  Maximize2,
  Zap,
  Menu,
  X,
  Home,
  FlaskConical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/common/components/ui";

const NAV_SECTIONS = [
  { id: "typography", label: "Typography", icon: Type },
  { id: "colors", label: "Colors & Tokens", icon: Palette },
  { id: "buttons", label: "Buttons", icon: MousePointer },
  { id: "badges", label: "Badges", icon: Tag },
  { id: "cards", label: "Cards", icon: Square },
  { id: "inputs", label: "Inputs & Forms", icon: AlignLeft },
  { id: "avatars", label: "Avatars", icon: User },
  { id: "feedback", label: "Feedback States", icon: AlertCircle },
  { id: "spacing", label: "Spacing Scale", icon: Maximize2 },
  { id: "animations", label: "Animations", icon: Zap },
] as const;

// Extracted outside PlaygroundSidebar to comply with react-hooks/static-components
function SidebarNav({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex-1 overflow-y-auto py-3 px-2">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40 px-2 mb-2">
        Components
      </p>
      <ul className="space-y-0.5">
        {NAV_SECTIONS.map(({ id, label, icon: Icon }) => {
          const isActive = pathname === `/playground#${id}`;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={onLinkClick}
                className={cn(
                  "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors",
                  "hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-500",
                  isActive
                    ? "bg-primary-50 dark:bg-primary-100 text-primary-600 font-medium"
                    : "text-foreground/70"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 pt-4 border-t border-card-border px-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40 mb-2">
          Navigation
        </p>
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-foreground/70 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-500 transition-colors"
        >
          <Home className="h-4 w-4 shrink-0" />
          Back to Homepage
        </Link>
      </div>
    </nav>
  );
}

function SidebarHeader() {
  return (
    <div className="px-4 py-5 border-b border-card-border">
      <div className="flex items-center gap-2 mb-1">
        <FlaskConical className="h-5 w-5 text-primary-500" />
        <span className="font-bold text-base text-foreground">UI Playground</span>
      </div>
      <p className="text-xs text-foreground/50 leading-relaxed">
        Sandbox for component experimentation
      </p>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="px-4 py-3 border-t border-card-border">
      <p className="text-[10px] text-foreground/30 leading-relaxed">
        Development only · Not a production page
      </p>
    </div>
  );
}

interface PlaygroundSidebarProps {
  className?: string;
}

export function PlaygroundSidebar({ className }: PlaygroundSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col w-60 shrink-0 sticky top-0 h-screen",
          "border-r border-card-border bg-background/95 backdrop-blur-sm",
          className
        )}
      >
        <SidebarHeader />
        <SidebarNav />
        <SidebarFooter />
      </aside>

      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Button
          variant="primary"
          size="md"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="h-12 w-12 rounded-full shadow-lg p-0 flex items-center justify-center"
          aria-label="Toggle playground navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <aside className="lg:hidden fixed left-0 top-0 z-50 h-full w-72 border-r border-card-border bg-background shadow-xl flex flex-col">
            <SidebarHeader />
            <SidebarNav onLinkClick={() => setMobileOpen(false)} />
            <SidebarFooter />
          </aside>
        </>
      )}
    </>
  );
}
