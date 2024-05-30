"use client";

import { motion } from "framer-motion";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

import { fade } from "@/utils";

import { loaderWords } from "@/data";

export default function Loader() {
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[5001] flex min-h-screen w-full items-center justify-center bg-background"
      variants={fade({
        direction: "up",
        distance: 0,
        duration: 0.5,
        delay: 4, // FIXME: 4
      })}
      initial="show"
      animate="hidden"
    >
      <TypewriterEffectSmooth words={loaderWords} />
    </motion.div>
  );
}
