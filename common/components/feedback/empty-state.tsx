import { FolderOpen } from "lucide-react";

export interface EmptyStateProps {
  title?: string;
  message?: string;
}

export function EmptyState({
  title = "No data available",
  message = "There are no items to display in this list yet.",
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center p-6 text-center border border-dashed border-card-border rounded-lg bg-card-bg/10 w-full">
      <FolderOpen className="h-10 w-10 text-foreground/30 mb-4" />
      <h3 className="text-lg font-medium text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-foreground/50">{message}</p>
    </div>
  );
}
