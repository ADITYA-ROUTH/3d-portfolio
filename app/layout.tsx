import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Chatbot from "@/components/Chatbot";
import { ThemeProvider } from "@/components/ThemeProvider";
import AudioPlayer from "@/components/AudioPlayer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://3d-portfolio-khf5-bwj4efq5q-aditya-rouths-projects.vercel.app";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────
  title: {
    default: "Aditya Routh | 3D Portfolio — AI/ML Engineer",
    template: "%s | Aditya Routh",
  },
  description:
    "Aditya Routh's immersive 3D portfolio — showcasing AI/ML projects, full-stack engineering, and interactive web experiences powered by Three.js, Next.js, and React Three Fiber.",
  keywords: [
    "Aditya Routh",
    "3D Portfolio",
    "AI/ML Engineer",
    "Three.js",
    "React Three Fiber",
    "Next.js",
    "Full-Stack Developer",
    "Machine Learning",
    "Computer Vision",
    "Web Developer",
    "Kolkata",
    "India",
  ],
  authors: [{ name: "Aditya Routh", url: siteUrl }],
  creator: "Aditya Routh",
  publisher: "Aditya Routh",

  // ── Canonical & Alternate ─────────────────────────────
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph ────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aditya Routh — 3D Portfolio",
    title: "Aditya Routh | 3D Portfolio — AI/ML Engineer",
    description:
      "Explore Aditya Routh's immersive 3D portfolio featuring AI/ML projects, interactive web experiences, and stunning Three.js visualizations.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Aditya Routh — 3D Portfolio | AI/ML Engineer",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Aditya Routh | 3D Portfolio — AI/ML Engineer",
    description:
      "Immersive 3D portfolio showcasing AI/ML projects and interactive web experiences.",
    images: ["/opengraph-image"],
    creator: "@adityarouth",
  },

  // ── Robots ────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
  },

  // ── Verification (add your IDs when available) ────────
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aditya Routh",
              url: siteUrl,
              jobTitle: "AI/ML Engineer & Full-Stack Developer",
              description:
                "Aspiring AI/ML engineer pursuing B.Tech in CSE (AI/ML). Specializing in deep learning, computer vision, and interactive 3D web experiences.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/ADITYA-ROUTH",
                "https://www.linkedin.com/in/aditya-routh-231ab92a0",
              ],
              knowsAbout: [
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Three.js",
                "React",
                "Next.js",
                "Python",
                "TensorFlow",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased bg-background text-foreground relative`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="data-theme" defaultTheme="default" enableSystem={false}>
          {children}
          <Chatbot />
          <AudioPlayer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
