/**
 * Mdafha Portfolio Site Constants
 */

export const SITE_CONFIG = {
  name: "Mdafha Portfolio",
  shortName: "Mdafha",
  domain: "https://mdafha.my.id",
  author: "Mdafha",
  email: "admin@example.com",
  github: "mdafha",
  twitter: "@mdafha",
  description:
    "Personal portfolio website demonstrating production-grade software engineering practices and self-built Headless CMS integration.",
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Career", href: "/career" },
  { label: "Certificates", href: "/certificates" },
] as const;
