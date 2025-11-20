import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-shadow ${scrolled ? "shadow-lg" : ""} bg-white dark:bg-gray-900`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 md:py-6 px-4">
        <h1 className="text-2xl font-bold tracking-tight text-teal-700 dark:text-teal-400">WeSpend</h1>
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#features" className="hover:text-yellow-400 transition">Features</a>
          <a href="#screenshots" className="hover:text-yellow-400 transition">Screenshots</a>
          <a href="#download" className="hover:text-yellow-400 transition">Download</a>
        </nav>
      </div>
    </header>
  );
}
