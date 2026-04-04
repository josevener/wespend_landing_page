import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | WeSpend",
  description: "Privacy Policy for WeSpend - Your Budget Tracker.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "WeSpend is designed as an offline-first budget tracker.",
      "We do not collect, store, or transmit any personal data to external servers.",
      "All financial data, such as expenses, income, and categories, is stored locally on your device only.",
    ],
  },
  {
    title: "2. How We Use Information",
    body: [
      "Since all data remains on your device, your information is used solely to provide app functionality, including tracking expenses and budgets.",
      "We do not access, process, or analyze your data externally.",
    ],
  },
  {
    title: "3. Data Sharing",
    body: ["WeSpend does not share any user data with third parties."],
  },
  {
    title: "4. Permissions",
    body: [
      "The app may request limited device permissions strictly for functionality, if applicable.",
      "These permissions are used only on-device and never for data collection or transmission.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "Because your data is stored locally, you have full control over your information.",
      "Uninstalling the app may delete all stored data unless you manually back it up first.",
    ],
  },
  {
    title: "6. Children's Privacy",
    body: [
      "WeSpend is not specifically directed to children under the age of 13.",
      "We do not knowingly collect personal data from children.",
    ],
  },
  {
    title: "7. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be reflected on this page.",
    ],
  },
  {
    title: "8. Contact Us",
    body: ["If you have any questions or concerns, contact us at:"],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-teal-300 transition hover:text-teal-200"
        >
          Back to home
        </Link>

        <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-sm">
          <div className="border-b border-white/10 bg-white/5 px-6 py-8 sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-300">
              Privacy Policy
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              WeSpend - Your Budget Tracker
            </h1>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Effective Date: April 4, 2026
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              WeSpend (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
              respects your privacy. This Privacy Policy explains how our
              application handles user information.
            </p>
          </div>

          <div className="space-y-10 px-6 py-8 sm:px-10 sm:py-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.title === "8. Contact Us" ? (
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:intern.josevener@gmail.com"
                        className="font-medium text-teal-300 transition hover:text-teal-200"
                      >
                        intern.josevener@gmail.com
                      </a>
                    </p>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
