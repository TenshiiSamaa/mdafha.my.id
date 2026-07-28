"use client";

import { useState } from "react";
import { SectionHeader, PreviewBlock } from "../components/preview-block";
import { Loading, ErrorState, EmptyState, NotFoundState } from "@/common/components/feedback";
import { Skeleton } from "@/common/components/ui";
import { Spinner } from "@/common/components/ui";
import { Button } from "@/common/components/ui";

export function FeedbackSection() {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <section>
      <SectionHeader
        id="feedback"
        title="Feedback States"
        description="Loading, error, empty, and not-found states. Plus skeleton and spinner primitives."
      />

      <PreviewBlock title="Spinner — Sizes" hint="<Spinner size=">
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="sm" className="text-primary-500" />
            <p className="text-[10px] text-foreground/40">sm</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="md" className="text-primary-500" />
            <p className="text-[10px] text-foreground/40">md</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" className="text-primary-500" />
            <p className="text-[10px] text-foreground/40">lg</p>
          </div>
        </div>
      </PreviewBlock>

      <PreviewBlock title="Spinner — Colors">
        <Spinner size="md" className="text-primary-500" />
        <Spinner size="md" className="text-status-success" />
        <Spinner size="md" className="text-status-warning" />
        <Spinner size="md" className="text-status-error" />
        <Spinner size="md" className="text-foreground/40" />
      </PreviewBlock>

      <PreviewBlock
        title="Skeleton — Text Lines"
        hint="<Skeleton />"
        className="flex-col items-stretch gap-2 max-w-md"
      >
        <Skeleton className="h-5 w-3/4 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-2/3 rounded" />
      </PreviewBlock>

      <PreviewBlock
        title="Skeleton — Card"
        description="Skeleton placeholder mimicking a project card"
        className="flex-wrap gap-4"
      >
        {[1, 2].map((i) => (
          <div key={i} className="w-full max-w-xs rounded-lg border border-card-border p-5 space-y-3 bg-card-bg">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-32 rounded" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
            <div className="flex gap-2 pt-1">
              <Skeleton className="h-8 flex-1 rounded-md" />
              <Skeleton className="h-8 flex-1 rounded-md" />
            </div>
          </div>
        ))}
      </PreviewBlock>

      <PreviewBlock title="Loading State Component">
        <Loading />
      </PreviewBlock>

      <PreviewBlock title="Error State — Default">
        <ErrorState />
      </PreviewBlock>

      <PreviewBlock title="Error State — Custom with Retry">
        <ErrorState
          title="Failed to load projects"
          message="Could not fetch data from the server. Check your connection and try again."
          onRetry={() => alert("Retry triggered!")}
        />
      </PreviewBlock>

      <PreviewBlock title="Empty State">
        <EmptyState />
      </PreviewBlock>

      <PreviewBlock title="Empty State — Custom">
        <EmptyState
          title="No projects yet"
          message="Start adding your work to display it here."
        />
      </PreviewBlock>

      <PreviewBlock title="Not Found State">
        <NotFoundState />
      </PreviewBlock>

      <PreviewBlock
        title="Loading Overlay Pattern"
        description="Click the button to see a simulated loading overlay"
        className="flex-col items-center gap-4 min-h-[160px] relative"
      >
        {showLoading && (
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center rounded z-10">
            <div className="flex flex-col items-center gap-3">
              <Spinner size="lg" className="text-primary-500" />
              <p className="text-sm text-foreground/70">Saving changes...</p>
            </div>
          </div>
        )}
        <Button
          variant="primary"
          onClick={() => {
            setShowLoading(true);
            setTimeout(() => setShowLoading(false), 2500);
          }}
          disabled={showLoading}
        >
          Simulate Save
        </Button>
        <p className="text-sm text-foreground/50">Content behind the overlay</p>
      </PreviewBlock>
    </section>
  );
}
