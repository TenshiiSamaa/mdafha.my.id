/**
 * Barrel export — common/components/feedback
 * Import semua feedback components dari satu titik:
 *   import { Loading, ErrorState, EmptyState, NotFoundState } from "@/common/components/feedback"
 */

export { Loading } from "./loading";

export { ErrorState } from "./error-state";
export type { ErrorStateProps } from "./error-state";

export { EmptyState } from "./empty-state";
export type { EmptyStateProps } from "./empty-state";

export { NotFoundState } from "./not-found";
