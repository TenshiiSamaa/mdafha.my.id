import { SectionHeader, PreviewBlock } from "../components/preview-block";

const COLOR_TOKENS = [
  // Primary
  { name: "primary-50", var: "--primary-50", label: "Primary 50" },
  { name: "primary-100", var: "--primary-100", label: "Primary 100" },
  { name: "primary-500", var: "--primary-500", label: "Primary 500 (Brand)" },
  { name: "primary-600", var: "--primary-600", label: "Primary 600" },
  { name: "primary-700", var: "--primary-700", label: "Primary 700" },
  // Neutral
  { name: "neutral-50", var: "--neutral-50", label: "Neutral 50" },
  { name: "neutral-100", var: "--neutral-100", label: "Neutral 100" },
  { name: "neutral-800", var: "--neutral-800", label: "Neutral 800" },
  { name: "neutral-900", var: "--neutral-900", label: "Neutral 900" },
  { name: "neutral-950", var: "--neutral-950", label: "Neutral 950" },
  // Status
  { name: "status-success", var: "--status-success", label: "Status Success" },
  { name: "status-warning", var: "--status-warning", label: "Status Warning" },
  { name: "status-error", var: "--status-error", label: "Status Error" },
] as const;

interface ColorSwatchProps {
  cssVar: string;
  label: string;
  name: string;
}

function ColorSwatch({ cssVar, label, name }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-1.5 min-w-[100px]">
      <div
        className="h-12 w-full rounded-md border border-card-border shadow-sm"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <div>
        <p className="text-xs font-medium text-foreground">{label}</p>
        <p className="text-[10px] font-mono text-foreground/40">{name}</p>
      </div>
    </div>
  );
}

export function ColorsSection() {
  return (
    <section>
      <SectionHeader
        id="colors"
        title="Colors & Tokens"
        description="Design token color palette defined in globals.css. All values adapt between light and dark mode automatically."
      />

      <PreviewBlock
        title="Primary Scale — Indigo"
        description="Brand color family used for interactive elements and accents"
        className="flex-wrap items-start gap-4"
      >
        {COLOR_TOKENS.filter((c) => c.name.startsWith("primary")).map((c) => (
          <ColorSwatch key={c.name} cssVar={c.var} label={c.label} name={c.var} />
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="Neutral Scale — Slate"
        description="Used for backgrounds, surfaces, and text"
        className="flex-wrap items-start gap-4"
      >
        {COLOR_TOKENS.filter((c) => c.name.startsWith("neutral")).map((c) => (
          <ColorSwatch key={c.name} cssVar={c.var} label={c.label} name={c.var} />
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="Status Colors"
        description="Semantic colors for success, warning, and error states"
        className="flex-wrap items-start gap-4"
      >
        {COLOR_TOKENS.filter((c) => c.name.startsWith("status")).map((c) => (
          <ColorSwatch key={c.name} cssVar={c.var} label={c.label} name={c.var} />
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="Surface & Border"
        description="Adaptive background and border tokens for cards and panels"
        className="flex-wrap items-start gap-4"
      >
        <div className="flex flex-col gap-1.5 min-w-[140px]">
          <div
            className="h-12 w-full rounded-md border border-card-border shadow-sm"
            style={{ backgroundColor: "var(--background)" }}
          />
          <p className="text-xs font-medium text-foreground">Background</p>
          <p className="text-[10px] font-mono text-foreground/40">--background</p>
        </div>
        <div className="flex flex-col gap-1.5 min-w-[140px]">
          <div
            className="h-12 w-full rounded-md border border-card-border shadow-sm bg-card-bg"
          />
          <p className="text-xs font-medium text-foreground">Card BG</p>
          <p className="text-[10px] font-mono text-foreground/40">--card-bg</p>
        </div>
        <div className="flex flex-col gap-1.5 min-w-[140px]">
          <div
            className="h-12 w-full rounded-md shadow-sm"
            style={{ backgroundColor: "var(--card-border)", outline: "1px solid var(--card-border)" }}
          />
          <p className="text-xs font-medium text-foreground">Card Border</p>
          <p className="text-[10px] font-mono text-foreground/40">--card-border</p>
        </div>
      </PreviewBlock>

      <PreviewBlock
        title="Foreground Opacity Scale"
        description="Text color with different opacity levels"
        className="flex-col items-start gap-2"
      >
        {[
          ["100%", "text-foreground", "Primary text"],
          ["80%", "text-foreground/80", "Body text"],
          ["60%", "text-foreground/60", "Secondary text"],
          ["40%", "text-foreground/40", "Disabled / placeholder"],
          ["20%", "text-foreground/20", "Subtle dividers"],
        ].map(([opacity, cls, label]) => (
          <div key={opacity} className="flex items-center gap-3">
            <span className={`text-sm font-medium ${cls}`}>{label}</span>
            <code className="text-[10px] font-mono text-foreground/30">{cls} · {opacity}</code>
          </div>
        ))}
      </PreviewBlock>
    </section>
  );
}
