import { SectionHeader, PreviewBlock } from "../components/preview-block";
import { Card } from "@/common/components/ui";
import { Badge } from "@/common/components/ui";
import { Button } from "@/common/components/ui";
import { Avatar } from "@/common/components/ui";
import { Separator } from "@/common/components/ui";
import { ExternalLink, GitFork, Star } from "lucide-react";

export function CardsSection() {
  return (
    <section>
      <SectionHeader
        id="cards"
        title="Cards"
        description="Card component with glassmorphism styling. Compose card contents freely using any child elements."
      />

      <PreviewBlock title="Basic Card" hint="<Card>">
        <Card className="p-6 w-full max-w-sm">
          <h3 className="text-lg font-semibold text-foreground mb-2">Card Title</h3>
          <p className="text-sm text-foreground/60">
            This is a basic card component with backdrop-blur glass styling. Use it as a
            building block for any content panel.
          </p>
        </Card>
      </PreviewBlock>

      <PreviewBlock
        title="Card Sizes"
        description="Cards adapt to their content — no fixed sizes"
        className="flex-wrap items-start gap-4"
      >
        <Card className="p-4 w-40">
          <p className="text-xs font-medium text-foreground">Small</p>
          <p className="text-xs text-foreground/50 mt-1">Compact card</p>
        </Card>
        <Card className="p-5 w-60">
          <p className="text-sm font-medium text-foreground">Medium</p>
          <p className="text-sm text-foreground/50 mt-1">Standard card width</p>
        </Card>
        <Card className="p-6 w-80">
          <p className="text-base font-medium text-foreground">Wide Card</p>
          <p className="text-sm text-foreground/50 mt-1">For richer content layouts</p>
        </Card>
      </PreviewBlock>

      <PreviewBlock
        title="Project Card (Composed)"
        description="Example of composing multiple components inside a card"
        className="flex-wrap gap-4"
      >
        {["Portfolio Website", "Blog CMS"].map((name) => (
          <Card key={name} className="p-5 w-full max-w-sm flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-foreground">{name}</h3>
                <p className="text-xs text-foreground/50 mt-0.5">Personal Project · 2025</p>
              </div>
              <Badge variant="success">Live</Badge>
            </div>

            <p className="text-sm text-foreground/65 leading-relaxed">
              A production-grade portfolio website built with Next.js, TypeScript, and MongoDB
              as a self-hosted headless CMS.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {["Next.js", "TypeScript", "MongoDB"].map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>

            <Separator />

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1.5 flex-1">
                <GitFork className="h-3.5 w-3.5" />
                Source
              </Button>
              <Button variant="primary" size="sm" className="gap-1.5 flex-1">
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </Button>
            </div>
          </Card>
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="Stats Card"
        description="Key metric highlights"
        className="flex-wrap gap-4"
      >
        {[
          { label: "Projects", value: "12", sub: "completed" },
          { label: "Stars", value: "340+", sub: "on GitHub" },
          { label: "Experience", value: "3 yrs", sub: "professional" },
        ].map((stat) => (
          <Card key={stat.label} className="p-5 flex flex-col items-center text-center w-36">
            <p className="text-2xl font-extrabold text-primary-500">{stat.value}</p>
            <p className="text-sm font-medium text-foreground mt-1">{stat.label}</p>
            <p className="text-xs text-foreground/45">{stat.sub}</p>
          </Card>
        ))}
      </PreviewBlock>

      <PreviewBlock
        title="Profile Card"
        description="Avatar + info + action composited into card"
        className="justify-center"
      >
        <Card className="p-6 max-w-xs w-full">
          <div className="flex flex-col items-center text-center gap-3">
            <Avatar fallback="MD" className="h-16 w-16 text-lg" />
            <div>
              <p className="font-bold text-foreground">Mdafha</p>
              <p className="text-sm text-foreground/55">Software Engineer</p>
            </div>
            <div className="flex gap-1.5">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
            </div>
            <Separator />
            <div className="flex gap-2 w-full">
              <Button variant="outline" size="sm" className="flex-1 gap-1">
                <GitFork className="h-3.5 w-3.5" />
                GitHub
              </Button>
              <Button variant="primary" size="sm" className="flex-1 gap-1">
                <Star className="h-3.5 w-3.5" />
                Follow
              </Button>
            </div>
          </div>
        </Card>
      </PreviewBlock>

      <PreviewBlock title="On Dark Background" dark className="flex-wrap gap-4">
        <Card className="p-5 w-60">
          <h3 className="font-semibold text-white mb-1">Dark Surface Card</h3>
          <p className="text-sm text-white/50">
            Card with dark background for contrast testing.
          </p>
        </Card>
      </PreviewBlock>
    </section>
  );
}
