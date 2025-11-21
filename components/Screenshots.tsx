"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { image } from "framer-motion/client";

export default function Screenshots() {
  const [selected, setSelected] = useState<string | null>(null);

  const images = [
    { name: "Dashboard Screen", src: "/images/Dashboard.png" },
    { name: "Invite Screen", src: "/images/InviteScreen.png" },
    { name: "New Expense Screen", src: "/images/NewExpense.png" },
  ];

  return (
    <section
      id="screenshots"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">App Screenshots</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          A quick preview of the core features and how the app looks in action.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => setSelected(img.src)}
              className="
                cursor-pointer rounded-2xl overflow-hidden
                bg-white/20 backdrop-blur-md
                shadow-lg hover:shadow-xl border border-white/20
                max-w-[250px] w-full aspect-[10/16] relative
              "
            >
              <Image
                src={img.src}
                alt={`Screenshot ${i + 1}`}
                fill
                className="cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Viewer */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="flex flex-col items-center justify-center p-4 bg-white border-none shadow-none">
          <DialogTitle>App Screenshot</DialogTitle>
          {selected && (
            <Image
              src={selected}
              alt={selected}
              width={1200}
              height={2000}
              className="
                rounded-2xl shadow-xl
                max-h-[80vh] w-100
              "
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
