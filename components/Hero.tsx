import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 text-center overflow-hidden bg-gradient-to-b from-teal-100 to-teal-200 dark:from-gray-800 dark:to-gray-900">
      {/* Optional floating background shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-teal-300 rounded-full opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight md:leading-snug">
          Take Control of Your Finances
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-200">
          Manage your income, track expenses, and make smarter financial decisions—all from one app.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            className="bg-teal-700 text-white px-8 py-4 rounded-xl shadow-lg transform transition-transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
            onClick={() => window.location.href="#download"}
          >
            Download Now
          </Button>
          <Button
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl shadow-lg transform transition-transform hover:text-white hover:-translate-y-1 hover:scale-105 cursor-pointer"
            onClick={() => window.location.href="#features"}
          >
            Learn More
          </Button>
        </div>
        <div className="mt-16 md:mt-24">
          <img
            src="/img/app-screenshot.png"
            alt="WeSpend App Screenshot"
            className="mx-auto rounded-3xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transition-transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
