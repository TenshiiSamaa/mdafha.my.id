import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/common/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mdafha Portfolio",
    default: "Mdafha Portfolio — Software Engineer Showcase",
  },
  description:
    "Personal portfolio website demonstrating production-grade software engineering practices and self-built Headless CMS integration.",
  keywords: ["Mdafha", "Portfolio", "Software Engineer", "Web Developer", "Next.js", "TypeScript"],
  authors: [{ name: "Mdafha", url: "https://mdafha.my.id" }],
  openGraph: {
    title: "Mdafha Portfolio",
    description: "Personal portfolio website demonstrating production-grade software engineering practices.",
    url: "https://mdafha.my.id",
    siteName: "Mdafha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mdafha Portfolio",
    description: "Personal portfolio website demonstrating production-grade software engineering practices.",
    creator: "@mdafha",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Providers>
          {/* Skip Navigation — Accessibility (WCAG 2.1 AA) */}
          <a href="#main-content" className="skip-nav">
            Skip to main content
          </a>
          <main id="main-content" className="flex flex-col flex-1">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
