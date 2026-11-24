import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vuppala Pranavi | Software Developer Portfolio",
  description: "Portfolio of Vuppala Pranavi, Information Technology student focused on software development, AI, full-stack applications, and problem solving.",
  keywords: ["Vuppala Pranavi", "Software Developer", "AI", "Full Stack Developer", "BVRIT", "Portfolio"],
  openGraph: {
    title: "Vuppala Pranavi | Software Developer Portfolio",
    description: "Projects, technical skills, coding profiles, and contact information.",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Vuppala Pranavi portfolio" }]
  },
  twitter: { card: "summary_large_image", title: "Vuppala Pranavi | Portfolio", description: "Software development, AI, and full-stack projects." },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
