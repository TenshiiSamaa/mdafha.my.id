import { Spinner } from "../ui/spinner";

export function Loading() {
  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center p-6 text-center">
      <Spinner size="lg" className="text-primary-500" />
      <p className="mt-4 text-sm text-foreground/60">Loading content...</p>
    </div>
  );
}
