import { SectionHeader, PreviewBlock } from "../components/preview-block";
import { Badge } from "@/common/components/ui";

export function BadgesSection() {
  return (
    <section>
      <SectionHeader
        id="badges"
        title="Badges"
        description="Semantic label components for status indicators, tags, and category markers."
      />

      <PreviewBlock title="All Variants" hint="variant=">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </PreviewBlock>

      <PreviewBlock title="Use Case — Project Technologies" description="Tech stack tags">
        <Badge variant="secondary">Next.js</Badge>
        <Badge variant="secondary">TypeScript</Badge>
        <Badge variant="secondary">Tailwind CSS</Badge>
        <Badge variant="secondary">MongoDB</Badge>
        <Badge variant="secondary">Framer Motion</Badge>
      </PreviewBlock>

      <PreviewBlock title="Use Case — Project Status">
        <Badge variant="success">Completed</Badge>
        <Badge variant="warning">In Progress</Badge>
        <Badge variant="error">On Hold</Badge>
        <Badge variant="default">Featured</Badge>
        <Badge variant="outline">Open Source</Badge>
      </PreviewBlock>

      <PreviewBlock title="Use Case — Skill Level">
        <Badge variant="success">Expert</Badge>
        <Badge variant="secondary">Intermediate</Badge>
        <Badge variant="outline">Learning</Badge>
      </PreviewBlock>

      <PreviewBlock
        title="On Dark Background"
        dark
      >
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success">Active</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Inactive</Badge>
      </PreviewBlock>

      <PreviewBlock
        title="Badge in context — with heading"
        className="items-start gap-3 flex-col"
      >
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-foreground">Portfolio Website</h3>
          <Badge variant="success">Live</Badge>
          <Badge variant="default">Featured</Badge>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary">Next.js 16</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Tailwind v4</Badge>
          <Badge variant="secondary">MongoDB</Badge>
        </div>
      </PreviewBlock>
    </section>
  );
}
