"use client";

import { ChevronLeft, MessageSquare, Plus, CreditCard, PieChart, Activity, Bell, Shield, Settings, Info } from "lucide-react";
import Link from "next/link";
import HowToSection from "@/components/how-to/HowToSection";
import HowToStep from "@/components/how-to/HowToStep";
import HowToNavigation from "@/components/how-to/HowToNavigation";
import { motion } from "framer-motion";

const navItems = [
  { id: "getting-started", label: "Getting Started" },
  { id: "understanding-accounts", label: "Accounts Types" },
  { id: "adding-transactions", label: "Adding Data" },
  { id: "using-gaby", label: "AI Assistant (Gaby)" },
  { id: "home-screen", label: "Home Dashboard" },
  { id: "analytics", label: "Advanced Analytics" },
  { id: "accounts-management", label: "Accounts Management" },
  { id: "recurring", label: "Automation" },
  { id: "budgets", label: "Budgeting" },
  { id: "notifications", label: "Alerts & Reports" },
  { id: "history", label: "Activity History" },
  { id: "privacy", label: "Data & Privacy" },
  { id: "settings", label: "Customization" },
  { id: "tips", label: "Expert Tips" },
];

export default function HowToContent() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12">
      {/* Hero Section */}
      <div className="bg-teal-700 py-16 md:py-24 mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-teal-100 hover:text-white mb-8 transition-colors group"
          >
            <ChevronLeft size={20} className="mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            How to Use WeSpend
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-teal-50 max-w-2xl"
          >
            Learn how to track your money effortlessly—from initial setup to mastering your financial habits with WeSpend.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Navigation Sidebar */}
        <HowToNavigation items={navItems} />

        {/* Content Area */}
        <div className="flex-1 max-w-3xl">
          
          {/* Getting Started */}
          <HowToSection 
            id="getting-started" 
            title="1. Getting Started" 
            icon="🏁"
            description="Welcome to WeSpend! Let's get your foundation right."
          >
            <HowToStep number={1} title="Set up your initial accounts">
              When you first open the app, choose where your money lives.
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span><strong>Cash:</strong> Physical bills in your wallet.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span><strong>E-Wallets:</strong> GCash, Maya, etc.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span><strong>Bank Accounts:</strong> BPI, BDO, UnionBank, etc.</span>
                </li>
              </ul>
              <p className="mt-4 text-teal-600 dark:text-teal-400 font-medium italic">
                💡 Proper naming helps you stay organized later!
              </p>
            </HowToStep>
          </HowToSection>

          {/* Understanding Accounts */}
          <HowToSection 
            id="understanding-accounts" 
            title="2. Understanding Account Types" 
            icon="💳"
            description="Know the difference between where you spend and where you owe."
          >
            <HowToStep number={1} title="Debit Accounts (Assets)">
              These are accounts where you have actual money—Cash, E-wallets, and Bank Savings.
            </HowToStep>
            <HowToStep number={2} title="Credit Accounts (Liabilities)">
              Track your credit cards as debt. WeSpend helps you monitor usage and remaining limits.
            </HowToStep>
          </HowToSection>

          {/* Adding Transactions */}
          <HowToSection 
            id="adding-transactions" 
            title="3. Adding Transactions" 
            icon="➕"
          >
            <HowToStep number={1} title="Tap the + Button">
              Located at the center of your navigation bar for quick access.
            </HowToStep>
            <HowToStep number={2} title="Choose Transaction Type">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h5 className="font-bold text-green-600 mb-1">Income</h5>
                  <p className="text-xs">Money coming in (Salary, Refunds)</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h5 className="font-bold text-red-600 mb-1">Expense</h5>
                  <p className="text-xs">Money going out (Food, Bills)</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h5 className="font-bold text-blue-600 mb-1">Transfer</h5>
                  <p className="text-xs">Move money between accounts</p>
                </div>
              </div>
            </HowToStep>
          </HowToSection>

          {/* Using Gaby */}
          <HowToSection 
            id="using-gaby" 
            title="4. Using Gaby (AI Assistant)" 
            icon="🤖"
            description="Meet Gaby, your smart money companion."
          >
            <HowToStep number={1} title="Natural Language Logging">
              Just chat with Gaby like a friend. No complex forms needed.
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <p className="font-mono text-sm mb-2 text-gray-500">Example Input:</p>
                <p className="font-medium bg-teal-50 dark:bg-teal-900/40 p-3 rounded-lg border border-teal-100 dark:border-teal-800">
                  "500 for lunch yesterday"
                </p>
              </div>
            </HowToStep>
            <HowToStep number={2} title="Automatic Categorization">
              Gaby understands "lunch" is Food and "grab" is Transport. She'll categorize and date it automatically.
            </HowToStep>
          </HowToSection>

          {/* Home Screen */}
          <HowToSection 
            id="home-screen" 
            title="5. Home Dashboard" 
            icon="📊"
          >
            <HowToStep number={1} title="Net Worth Overview">
              See your total financial health (Debit - Credit) at a glance.
            </HowToStep>
            <HowToStep number={2} title="Gaby's Daily Insight">
              Read personalized summaries generated by AI based on your recent spending.
            </HowToStep>
          </HowToSection>

          {/* Analytics */}
          <HowToSection 
            id="analytics" 
            title="6. Advanced Analytics" 
            icon="📈"
          >
            <HowToStep number={1} title="Category Breakdown">
              See exactly which parts of your life are eating up your budget.
            </HowToStep>
            <HowToStep number={2} title="Spending Trends">
              Compare this week/month vs. the last to spot improvements.
            </HowToStep>
          </HowToSection>

          {/* Accounts Management */}
          <HowToSection 
            id="accounts-management" 
            title="7. Accounts Management" 
            icon="🏦"
          >
            <HowToStep number={1} title="Balance Tracking">
              Check available funds across all platforms in one view.
            </HowToStep>
            <HowToStep number={2} title="Interest Earnings">
              Enable daily interest tracking for high-yield savings accounts.
            </HowToStep>
          </HowToSection>

          {/* Recurring */}
          <HowToSection 
            id="recurring" 
            title="8. Automation (Recurring)" 
            icon="🔁"
          >
            <HowToStep number={1} title="Set & Forget">
              Automate your monthly Rent, Salary, or Netflix subscriptions. WeSpend will log them for you on the scheduled date.
            </HowToStep>
          </HowToSection>

          {/* Budgets */}
          <HowToSection 
            id="budgets" 
            title="9. Smart Budgets" 
            icon="💡"
          >
            <HowToStep number={1} title="Set Spending Limits">
              Create limits for categories like "Dining Out" or "Shopping".
            </HowToStep>
            <HowToStep number={2} title="Visual Progress">
              Watch your budget bar fill up. Get warned when you hit 80% and 100%.
            </HowToStep>
          </HowToSection>

          {/* Notifications */}
          <HowToSection 
            id="notifications" 
            title="10. Alerts & Reports" 
            icon="🔔"
          >
            <HowToStep number={1} title="Stay Informed">
              Get push notifications for budget overflows or daily summaries.
              <div className="mt-4 italic text-gray-500">
                "You spent ₱1,200 today across 3 transactions."
              </div>
            </HowToStep>
          </HowToSection>

          {/* History */}
          <HowToSection 
            id="history" 
            title="11. Activity History" 
            icon="🧾"
          >
            <HowToStep number={1} title="Audit Your Activity">
              A clean, grouped list of every peso that moved in or out.
            </HowToStep>
            <HowToSection id="sub-history" title="">
              <HowToStep number={2} title="Filter & Search">
                Easily find that one transaction from last month using search.
              </HowToStep>
            </HowToSection>
          </HowToSection>

          {/* Privacy */}
          <HowToSection 
            id="privacy" 
            title="12. Data & Privacy" 
            icon="💾"
          >
            <HowToStep number={1} title="Offline-First">
              WeSpend works without internet. Your data is saved locally on your device first.
            </HowToStep>
            <HowToStep number={2} title="Your Data, Your Control">
              We don't sell your data. You can export your entire history to CSV/JSON anytime.
            </HowToStep>
          </HowToSection>

          {/* Settings */}
          <HowToSection 
            id="settings" 
            title="13. Customization" 
            icon="⚙️"
          >
            <HowToStep number={1} title="Personalize your UI">
              Switch between Light and Dark mode, or customize your currency and language.
            </HowToStep>
          </HowToSection>

          {/* Expert Tips */}
          <HowToSection 
            id="tips" 
            title="Expert Tips" 
            icon="💡"
          >
            <HowToStep number={1} title="Log as you go">
              The best data is fresh data. Use Gaby's chat immediately after buying coffee.
            </HowToStep>
            <HowToStep number={2} title="Review Weekly">
              Set aside 5 minutes every Sunday to look at your Analytics. Small changes lead to big savings!
            </HowToStep>
          </HowToSection>

          {/* Summary CTA */}
          <div className="mt-24 p-8 bg-teal-50 dark:bg-teal-900/20 rounded-3xl border-2 border-teal-100 dark:border-teal-800 text-center">
            <h2 className="text-3xl font-bold text-teal-900 dark:text-teal-300 mb-4">Ready to start?</h2>
            <p className="text-teal-700 dark:text-teal-400 mb-8">
              Download WeSpend today and take the first step towards financial freedom.
            </p>
            <button className="bg-teal-700 text-white px-8 py-4 rounded-xl shadow-lg font-bold hover:bg-teal-800 transition-colors">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
