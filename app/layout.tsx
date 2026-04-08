import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wespend.vercel.app"),
  title: {
    default: "WeSpend — Offline-First Budget Tracker & Expense Manager",
    template: "%s | WeSpend",
  },
  description: "Take control of your finances with WeSpend. An offline-first personal finance app designed for simple, fast, and stress-free money tracking. Perfect for tracking income, expenses, and budgets.",
  keywords: ["budget tracker", "expense manager", "personal finance", "offline-first", "money tracking", "Philippines", "GCash tracker", "Maya tracker"],
  authors: [{ name: "WeSpend Team" }],
  creator: "WeSpend",
  publisher: "WeSpend",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://wespend.vercel.app",
    siteName: "WeSpend",
    title: "WeSpend — Simple, Offline-First Budget Tracking",
    description: "Manage your income, track expenses, and make smarter financial decisions—all from one secure, offline-first app.",
    images: [
      {
        url: "/app_images/Dashboard.png",
        width: 1200,
        height: 630,
        alt: "WeSpend Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WeSpend — Take Control of Your Finances",
    description: "The simplest offline-first budget tracker. No internet needed to stay on top of your money.",
    images: ["/app_images/Dashboard.png"],
  },
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
  category: "finance",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
