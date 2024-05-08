"use client";

import { motion } from "framer-motion";

import { Logo } from "@/components/utils";

import { fadeIn } from "@/utils";

export default function ContactPage() {
  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[3.125rem] sm:pb-4 sm:pt-[3.125rem]">
      <motion.div
        variants={fadeIn({
          direction: "up",
          distance: 0,
          duration: 2,
          delay: 0.25,
        })}
        initial="hidden"
        animate="show"
      >
        <Logo />
      </motion.div>
    </main>
  );
}
