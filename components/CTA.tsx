import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section id="download" className="py-24 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Download WeSpend Now!</h2>
        <p className="mb-8 text-lg md:text-xl text-gray-300">
          Get the full app directly from our website. No app stores required. Install and start managing your finances instantly!
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Button
            className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105"
            onClick={() => window.location.href="/downloads/WeSpend.apk"}
          >
            Download for Android
          </Button>
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105"
            onClick={() => window.location.href="/downloads/WeSpend.ipa"}
          >
            Download for iOS
          </Button>
        </div>
      </div>
    </section>
  );
}
