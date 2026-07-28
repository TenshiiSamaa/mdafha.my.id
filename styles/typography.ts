/**
 * Mdafha Portfolio Typography Class Constants
 * Standardizes typography styling rules throughout components.
 */
export const TYPOGRAPHY = {
  h1: "text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl",
  h2: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
  h3: "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
  h4: "text-xl font-medium tracking-tight text-foreground",
  p: "text-base leading-7 text-foreground/80",
  lead: "text-lg text-foreground/75 font-medium leading-8",
  caption: "text-xs text-foreground/50 font-normal leading-normal",
  code: "rounded-sm bg-neutral-100 dark:bg-neutral-800 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
} as const;
