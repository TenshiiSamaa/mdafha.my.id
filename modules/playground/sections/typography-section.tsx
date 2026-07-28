import { SectionHeader, PreviewBlock } from "../components/preview-block";
import { TYPOGRAPHY } from "@/styles/typography";
import { cn } from "@/lib/utils";

export function TypographySection() {
  return (
    <section>
      <SectionHeader
        id="typography"
        title="Typography"
        description="All text styles mapped from styles/typography.ts. Applied via the TYPOGRAPHY constant."
      />

      <PreviewBlock title="Heading 1 — .h1" hint="TYPOGRAPHY.h1" className="block">
        <h1 className={cn(TYPOGRAPHY.h1)}>The quick brown fox jumps over the lazy dog</h1>
      </PreviewBlock>

      <PreviewBlock title="Heading 2 — .h2" hint="TYPOGRAPHY.h2" className="block">
        <h2 className={cn(TYPOGRAPHY.h2)}>The quick brown fox jumps over the lazy dog</h2>
      </PreviewBlock>

      <PreviewBlock title="Heading 3 — .h3" hint="TYPOGRAPHY.h3" className="block">
        <h3 className={cn(TYPOGRAPHY.h3)}>The quick brown fox jumps over the lazy dog</h3>
      </PreviewBlock>

      <PreviewBlock title="Heading 4 — .h4" hint="TYPOGRAPHY.h4" className="block">
        <h4 className={cn(TYPOGRAPHY.h4)}>The quick brown fox jumps over the lazy dog</h4>
      </PreviewBlock>

      <PreviewBlock title="Lead Paragraph" hint="TYPOGRAPHY.lead" className="block">
        <p className={cn(TYPOGRAPHY.lead)}>
          This is a lead paragraph, typically used as a subtitle or introductory sentence
          below a heading. It carries slightly more visual weight than body text.
        </p>
      </PreviewBlock>

      <PreviewBlock title="Body Paragraph" hint="TYPOGRAPHY.p" className="block">
        <p className={cn(TYPOGRAPHY.p)}>
          This is regular body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </PreviewBlock>

      <PreviewBlock title="Caption Text" hint="TYPOGRAPHY.caption" className="block">
        <p className={cn(TYPOGRAPHY.caption)}>
          Caption text — used for timestamps, metadata, helper labels, and supplementary information.
        </p>
      </PreviewBlock>

      <PreviewBlock title="Inline Code" hint="TYPOGRAPHY.code" className="block">
        <p className={cn(TYPOGRAPHY.p)}>
          Install the package using{" "}
          <code className={cn(TYPOGRAPHY.code)}>npm install framer-motion</code>{" "}
          then import the{" "}
          <code className={cn(TYPOGRAPHY.code)}>motion</code>{" "}
          component.
        </p>
      </PreviewBlock>

      <PreviewBlock
        title="Font Stack (Dark background)"
        description="Showing font rendering on dark background"
        dark
        className="flex-col items-start gap-2"
      >
        <h2 className={cn(TYPOGRAPHY.h2, "text-white")}>Geist Sans — Heading</h2>
        <p className={cn(TYPOGRAPHY.p, "text-white/70")}>
          Body text on dark background. Geist Sans is the primary typeface.
        </p>
        <code className="font-mono text-sm text-primary-500 bg-primary-50/10 px-2 py-0.5 rounded">
          Geist Mono — Monospace
        </code>
      </PreviewBlock>
    </section>
  );
}
