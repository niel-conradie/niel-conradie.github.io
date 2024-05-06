"use client";

import { motion } from "framer-motion";

import { Logo } from "@/components/utils";

import { fadeIn } from "@/utils";

export default function AboutPage() {
  return (
    <main className="flex min-h-[calc(100svh)] items-center justify-center px-4 py-[50px] sm:pb-4 sm:pt-[50px]">
      <motion.div
        variants={fadeIn({
          direction: "down",
          distance: 10,
          duration: 1,
          delay: 0.1,
        })}
        initial="hidden"
        animate="show"
      >
        <Logo />
      </motion.div>
    </main>
  );
}
