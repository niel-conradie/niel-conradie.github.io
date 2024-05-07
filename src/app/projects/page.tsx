"use client";

import { motion } from "framer-motion";

import { Projects } from "@/components/projects";

import { fadeIn } from "@/utils";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-[calc(100svh)] items-center justify-center px-4 py-[50px] sm:pb-4 sm:pt-[50px]">
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
        <div className="">
          <Projects />
        </div>
      </motion.div>
    </main>
  );
}
