import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  id: string;
  title: string;
  description?: string;
  badge?: string;
}

export function SectionHeader({ id, title, description, badge }: SectionHeaderProps) {
  return (
    <div id={id} className="scroll-mt-8 mb-6">
      <div className="flex items-center gap-3 mb-1">
        <h2 className="text-xl font-bold text-foreground tracking-tight">{title}</h2>
        {badge && (
          <span className="text-[10px] font-semibold uppercase tracking-wider bg-primary-50 dark:bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full border border-primary-100 dark:border-primary-50/20">
            {badge}
          </span>
        )}
      </div>
      {description && (
        <p className="text-sm text-foreground/55 leading-relaxed max-w-2xl">{description}</p>
      )}
      <div className="mt-4 h-px bg-card-border" />
    </div>
  );
}

interface PreviewBlockProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  /** Set to true when the preview needs a dark background */
  dark?: boolean;
  /** Optional code snippet to display below the preview */
  hint?: string;
}

export function PreviewBlock({
  title,
  description,
  children,
  className,
  dark,
  hint,
}: PreviewBlockProps) {
  return (
    <div className="mb-6 rounded-lg border border-card-border overflow-hidden">
      {/* Preview Area */}
      <div
        className={cn(
          "p-6 flex flex-wrap items-center gap-4 min-h-[100px]",
          dark
            ? "bg-neutral-950 dark:bg-neutral-900"
            : "bg-neutral-50 dark:bg-neutral-900/60",
          className
        )}
      >
        {children}
      </div>

      {/* Label Bar */}
      <div className="px-4 py-2.5 border-t border-card-border bg-background/60 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-foreground/80">{title}</p>
          {description && (
            <p className="text-[11px] text-foreground/45 mt-0.5">{description}</p>
          )}
        </div>
        {hint && (
          <code className="text-[11px] font-mono text-primary-500 bg-primary-50 dark:bg-primary-100 px-1.5 py-0.5 rounded shrink-0">
            {hint}
          </code>
        )}
      </div>
    </div>
  );
}
