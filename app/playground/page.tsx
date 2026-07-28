import { TypographySection } from "@/modules/playground/sections/typography-section";
import { ColorsSection } from "@/modules/playground/sections/colors-section";
import { ButtonsSection } from "@/modules/playground/sections/buttons-section";
import { BadgesSection } from "@/modules/playground/sections/badges-section";
import { CardsSection } from "@/modules/playground/sections/cards-section";
import { InputsSection } from "@/modules/playground/sections/inputs-section";
import { AvatarsSection } from "@/modules/playground/sections/avatars-section";
import { FeedbackSection } from "@/modules/playground/sections/feedback-section";
import { SpacingSection } from "@/modules/playground/sections/spacing-section";
import { AnimationsSection } from "@/modules/playground/sections/animations-section";
import { FlaskConical } from "lucide-react";

export default function PlaygroundPage() {
  return (
    <main className="px-6 py-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-10 pb-6 border-b border-card-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-lg bg-primary-50 dark:bg-primary-100/20 border border-primary-100 dark:border-primary-500/20 flex items-center justify-center">
            <FlaskConical className="h-5 w-5 text-primary-500" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
              UI Playground
            </h1>
            <p className="text-sm text-foreground/50">
              Stage 6.1 · Mdafha Portfolio · Development Sandbox
            </p>
          </div>
        </div>
        <p className="text-sm text-foreground/60 max-w-2xl leading-relaxed">
          An isolated environment for previewing, experimenting, and customizing UI components.
          All components use the existing design system — no dummy APIs, no business logic.
          Use the sidebar to navigate between sections.
        </p>

        {/* Quick stats */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Components", value: "11" },
            { label: "Sections", value: "10" },
            { label: "Design Tokens", value: "40+" },
            { label: "Dark Mode", value: "✓" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-card-border bg-card-bg px-4 py-3"
            >
              <p className="text-xl font-bold text-primary-500">{stat.value}</p>
              <p className="text-xs text-foreground/50 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* All Sections */}
      <div className="space-y-16">
        <TypographySection />
        <ColorsSection />
        <ButtonsSection />
        <BadgesSection />
        <CardsSection />
        <InputsSection />
        <AvatarsSection />
        <FeedbackSection />
        <SpacingSection />
        <AnimationsSection />
      </div>

      {/* Footer */}
      <div className="mt-16 pt-6 border-t border-card-border text-center">
        <p className="text-xs text-foreground/30">
          UI Playground · Development Only · Mdafha Portfolio
        </p>
        <p className="text-xs text-foreground/20 mt-1">
          This page is excluded from production builds via{" "}
          <code className="font-mono">robots: noindex</code>
        </p>
      </div>
    </main>
  );
}
