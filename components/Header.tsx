import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Always download the same file
  const handleDownload = () => {
    const file = "/downloads/WeSpend.apk";
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "WeSpend.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-lg backdrop-blur-md bg-white/90 dark:bg-gray-900/90"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 md:py-6 px-4">
        <h1 className="text-2xl font-bold tracking-tight text-teal-700 dark:text-teal-400">
          WeSpend
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#features" className="hover:text-yellow-400 transition-colors">
            Features
          </a>
          <a href="#screenshots" className="hover:text-yellow-400 transition-colors">
            Screenshots
          </a>
          <button
            className="hover:text-yellow-400 transition-colors"
            onClick={handleDownload}
          >
            Download
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-700 dark:text-teal-400"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg w-full text-center py-4 space-y-3 transition-all">
          <a
            href="#features"
            className="block hover:text-yellow-400 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <a
            href="#screenshots"
            className="block hover:text-yellow-400 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Screenshots
          </a>
          <button
            className="block hover:text-yellow-400 transition-colors w-full"
            onClick={() => {
              handleDownload();
              setMobileOpen(false);
            }}
          >
            Download
          </button>
        </div>
      )}
    </header>
  );
}
