"use client";

import { useState } from "react";
import { SectionHeader, PreviewBlock } from "../components/preview-block";
import { Button } from "@/common/components/ui";
import { Loader2, Trash2, Download, Plus, ArrowRight } from "lucide-react";

export function ButtonsSection() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const simulateLoad = (id: string) => {
    setLoadingId(id);
    setTimeout(() => setLoadingId(null), 2000);
  };

  return (
    <section>
      <SectionHeader
        id="buttons"
        title="Buttons"
        description="Button variants, sizes, states, and icon combinations. Click loading buttons to see animated state."
      />

      <PreviewBlock
        title="Variants"
        description="primary · secondary · outline · ghost · danger"
        hint="variant="
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </PreviewBlock>

      <PreviewBlock title="Sizes" hint="size=">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </PreviewBlock>

      <PreviewBlock
        title="Loading State"
        description="Click each button to trigger loading animation"
        hint="isLoading="
      >
        <Button
          variant="primary"
          isLoading={loadingId === "a"}
          onClick={() => simulateLoad("a")}
        >
          Save Changes
        </Button>
        <Button
          variant="secondary"
          isLoading={loadingId === "b"}
          onClick={() => simulateLoad("b")}
        >
          Processing
        </Button>
        <Button
          variant="outline"
          isLoading={loadingId === "c"}
          onClick={() => simulateLoad("c")}
        >
          Uploading
        </Button>
      </PreviewBlock>

      <PreviewBlock title="Disabled State" hint="disabled">
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
        <Button variant="outline" disabled>Outline Disabled</Button>
        <Button variant="ghost" disabled>Ghost Disabled</Button>
      </PreviewBlock>

      <PreviewBlock
        title="With Icons"
        description="Buttons combined with Lucide React icons"
      >
        <Button variant="primary" size="md" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
        <Button variant="secondary" size="md" className="gap-2">
          <Download className="h-4 w-4" />
          Download CV
        </Button>
        <Button variant="outline" size="md" className="gap-2">
          View All
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="danger" size="md" className="gap-2">
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </PreviewBlock>

      <PreviewBlock
        title="Icon-Only Buttons"
        description="Square buttons without text labels"
      >
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="md" className="h-10 w-10 p-0">
          <Download className="h-4 w-4" />
        </Button>
        <Button variant="primary" size="md" className="h-10 w-10 p-0">
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="danger" size="lg" className="h-12 w-12 p-0">
          <Trash2 className="h-5 w-5" />
        </Button>
      </PreviewBlock>

      <PreviewBlock
        title="Full Width"
        description="Block-level button"
        className="flex-col"
      >
        <Button variant="primary" size="lg" className="w-full">
          Full Width Primary Button
        </Button>
        <Button variant="outline" size="md" className="w-full">
          Full Width Outline Button
        </Button>
      </PreviewBlock>

      <PreviewBlock
        title="On Dark Background"
        dark
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </PreviewBlock>

      <PreviewBlock
        title="Custom Spinner"
        description="Using the inline Loader2 icon for custom loading UI"
      >
        <Button variant="primary" disabled className="gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Custom Loading
        </Button>
      </PreviewBlock>
    </section>
  );
}
