import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { Button } from "../ui/button";

export function NotFoundState() {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center p-6 text-center">
      <HelpCircle className="h-16 w-16 text-primary-500 mb-6" />
      <h2 className="text-2xl font-bold text-foreground">404 - Page Not Found</h2>
      <p className="mt-2 text-sm text-foreground/60 mb-6 max-w-sm">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  );
}
