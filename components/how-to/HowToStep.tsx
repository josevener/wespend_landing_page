"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HowToStepProps {
  number: number;
  title: string;
  children?: ReactNode;
  icon?: ReactNode;
}

export default function HowToStep({ number, title, children, icon }: HowToStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex gap-4 items-start relative group"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-sm border-2 border-teal-200 dark:border-teal-800 transition-all group-hover:scale-110 group-hover:bg-teal-200 dark:group-hover:bg-teal-800">
        {number}
      </div>
      <div className="flex-grow pt-0.5">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          {icon}
          {title}
        </h4>
        <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
