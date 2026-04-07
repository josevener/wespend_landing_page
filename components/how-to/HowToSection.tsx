"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HowToSectionProps {
  id: string;
  title: string;
  icon?: string;
  description?: string;
  children: ReactNode;
}

export default function HowToSection({ id, title, icon, description, children }: HowToSectionProps) {
  return (
    <section id={id} className="py-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-6">
          {icon && (
            <div className="text-4xl bg-white dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md border border-gray-100 dark:border-gray-700">
              {icon}
            </div>
          )}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            {description && (
              <p className="text-gray-500 dark:text-gray-400 mt-1 max-w-2xl">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-8 pl-4 border-l-2 border-gray-100 dark:border-gray-800 ml-8">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
