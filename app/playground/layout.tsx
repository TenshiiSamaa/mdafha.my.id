import type { Metadata } from "next";
import { PlaygroundSidebar } from "@/modules/playground/components/sidebar";

export const metadata: Metadata = {
  title: "UI Playground",
  description: "Development sandbox for UI component experimentation. Not a production page.",
  robots: { index: false, follow: false },
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <PlaygroundSidebar />
      <div className="flex-1 min-w-0 overflow-x-hidden">
        {/* Dev environment banner */}
        <div className="sticky top-0 z-30 w-full bg-status-warning/10 border-b border-status-warning/30 px-4 py-2 flex items-center justify-center gap-2">
          <span className="text-[11px] font-semibold text-status-warning uppercase tracking-wider">
            ⚠ Development Sandbox
          </span>
          <span className="text-[11px] text-status-warning/70">
            · This page is for UI experimentation only and will not be deployed to production.
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
