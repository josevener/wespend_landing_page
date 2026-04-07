import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowToContent from "@/components/how-to/HowToContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Use WeSpend — Guide & Tutorial",
  description: "Learn how to track your money effortlessly with WeSpend. A complete guide on setting up accounts, tracking expenses, and using Gaby, your AI financial assistant.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I get started with WeSpend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you first open the app, choose your accounts like Cash, E-wallets (GCash, Maya), and Bank Accounts to get started."
      }
    },
    {
      "@type": "Question",
      "name": "Does WeSpend work offline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, WeSpend is an offline-first app. Your data stays on your device and you can log transactions without an internet connection."
      }
    },
    {
      "@type": "Question",
      "name": "How does the AI assistant Gaby work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can chat with Gaby using natural language like '500 for lunch'. Gaby will automatically categorize and date the transaction for you."
      }
    }
  ]
};

export default function HowToPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Header />
      <HowToContent />
      <Footer />
    </>
  );
}

