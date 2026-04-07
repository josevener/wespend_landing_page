"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";

interface NavItem {
  id: string;
  label: string;
}

interface HowToNavigationProps {
  items: NavItem[];
}

export default function HowToNavigation({ items }: HowToNavigationProps) {
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveItem(visibleEntry.target.id);
        }
      },
      { threshold: 0.1, rootMargin: "-10% 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-24 hidden lg:block w-64 pr-8 max-h-[80vh] overflow-y-auto no-scrollbar">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
        Contents
      </h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={clsx(
                "block py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 border-l-2",
                activeItem === item.id
                  ? "bg-teal-50 text-teal-700 border-teal-500 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-400"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
