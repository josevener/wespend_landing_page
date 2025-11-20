export default function Features() {
  const features = [
    { icon: "💰", title: "Track Expenses", desc: "Track all expenses and income easily." },
    { icon: "📊", title: "Financial Insights", desc: "Get detailed insights on your spending habits." },
    { icon: "🔔", title: "Smart Alerts", desc: "Receive notifications for budgets, bills, and payments." },
    { icon: "⚡", title: "Fast & Secure", desc: "Your data is secure and synced across all devices instantly." },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">App Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 duration-300 transition-all"
            >
              <div className="text-6xl mb-6">{f.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
