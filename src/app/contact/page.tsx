"use client";

import { motion } from "framer-motion";

import { Logo } from "@/components/utils";

import { fadeIn } from "@/utils";

export default function ContactPage() {
  return (
    <main className="flex min-h-[calc(100svh)] items-center justify-center px-4 py-[50px] sm:pb-4 sm:pt-[50px]">
      <motion.div
        variants={fadeIn({
          direction: "up",
          distance: 0,
          duration: 3,
          delay: 0,
        })}
        initial="hidden"
        animate="show"
      >
        <Logo />
      </motion.div>
    </main>
  );
}
