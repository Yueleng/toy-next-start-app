import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const normalizedSiteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(normalizedSiteUrl),
  title: {
    default: "Cumulus Studio",
    template: "%s | Cumulus Studio",
  },
  description:
    "A modern Next.js demo with a guided landing page, responsive contact section, and interactive user explorer powered by JSONPlaceholder.",
  keywords: [
    "Next.js app router",
    "demo project",
    "contact form UI",
    "user directory",
    "JSONPlaceholder",
  ],
  authors: [{ name: "Cumulus Studio" }],
  creator: "Cumulus Studio",
  openGraph: {
    title: "Cumulus Studio",
    description:
      "Explore the contact showcase, user explorer, and starter layout built with Next.js and Tailwind.",
    url: "/",
    siteName: "Cumulus Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Abstract sky with clouds and color gradients",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cumulus Studio",
    description:
      "Contact UI, user explorer, and starter layout built with Next.js.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    creator: "@cumulus_studio",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-4 text-sm font-medium text-gray-700">
            <Link href="/" className="rounded px-3 py-2 transition hover:bg-gray-100 hover:text-gray-900">
              Home
            </Link>
            <Link href={"/about"} className="rounded px-3 py-2 transition hover:bg-gray-100 hover:text-gray-900">
              About
            </Link>
            <Link href={"/contact"} className="rounded px-3 py-2 transition hover:bg-gray-100 hover:text-gray-900">
              Contact
            </Link>
            <Link href={"/users"} className="rounded px-3 py-2 transition hover:bg-gray-100 hover:text-gray-900">
              Users
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
