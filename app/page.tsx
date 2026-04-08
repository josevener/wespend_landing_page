import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "WeSpend — Offline-First Budget Tracker & Expense Manager",
  description: "Take control of your finances. Manage income, track expenses, and get AI insights with WeSpend—the simple, secure, offline-first app.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "WeSpend",
  "url": "https://wespend.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://wespend.vercel.app/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "WeSpend",
  "operatingSystem": "Android, iOS",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "PHP"
  },
  "description": "An offline-first budget tracker and personal finance app."
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={appSchema} />
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

