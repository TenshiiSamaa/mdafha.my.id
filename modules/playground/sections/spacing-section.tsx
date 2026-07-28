import { SectionHeader, PreviewBlock } from "../components/preview-block";
import { SPACING, RADIUS, SHADOW } from "@/lib/tokens";

export function SpacingSection() {
  const spacingEntries = Object.entries(SPACING) as [string, string][];
  const radiusEntries = Object.entries(RADIUS) as [string, string][];

  return (
    <section>
      <SectionHeader
        id="spacing"
        title="Spacing Scale"
        description="Base 4px grid spacing system from lib/tokens.ts. Also shows border radius and shadow scales."
      />

      <PreviewBlock
        title="Spacing Scale — Visual"
        description="Each block height matches the spacing value"
        className="flex-col items-start gap-2"
      >
        {spacingEntries.map(([key, value]) => (
          <div key={key} className="flex items-center gap-3">
            <div
              className="bg-primary-500/20 border border-primary-500/30 rounded-sm shrink-0"
              style={{ width: value, height: "16px", minWidth: "4px" }}
            />
            <div className="flex items-center gap-2">
              <code className="text-[11px] font-mono text-primary-600 dark:text-primary-400 w-6">
                {key}
              </code>
              <span className="text-xs text-foreground/50">{value}</span>
              <span className="text-[10px] text-foreground/30">
                · SPACING[{key}]
              </span>
            </div>
          </div>
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="Border Radius Scale"
        className="flex-wrap items-end gap-6"
      >
        {radiusEntries.map(([key, value]) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <div
              className="h-12 w-12 bg-primary-500/20 border-2 border-primary-500/40"
              style={{ borderRadius: value }}
            />
            <p className="text-[10px] text-foreground/50 text-center">
              <span className="font-mono">{key}</span>
              <br />
              <span className="text-foreground/30">{value}</span>
            </p>
          </div>
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="Shadow Scale"
        description="Box shadow tokens — sm, md, lg, and glow effect"
        className="flex-wrap gap-6"
      >
        {(["sm", "md", "lg", "glow"] as const).map((key) => (
          <div key={key} className="flex flex-col items-center gap-3">
            <div
              className="h-16 w-24 bg-background rounded-lg border border-card-border"
              style={{ boxShadow: SHADOW[key] }}
            />
            <p className="text-[10px] font-mono text-foreground/50">SHADOW.{key}</p>
          </div>
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="Gap & Padding Examples"
        description="Common layout spacing patterns using Tailwind classes"
        className="flex-col gap-4 items-stretch"
      >
        {[
          { label: "gap-2 (8px)", className: "gap-2" },
          { label: "gap-4 (16px)", className: "gap-4" },
          { label: "gap-6 (24px)", className: "gap-6" },
          { label: "gap-8 (32px)", className: "gap-8" },
        ].map(({ label, className }) => (
          <div key={label} className={`flex items-center ${className}`}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded bg-primary-500/30 border border-primary-500/40 flex items-center justify-center text-[10px] font-mono text-primary-600"
              >
                {i}
              </div>
            ))}
            <span className="ml-4 text-xs font-mono text-foreground/40">{label}</span>
          </div>
        ))}
      </PreviewBlock>
    </section>
  );
}
