"use client";

import { motion } from "framer-motion";

import { Projects } from "@/components/projects";

import { fadeIn } from "@/utils";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[50px] sm:pb-4 sm:pt-[50px]">
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
        <div className="sm:mb-24">
          <h2 className="mb-8 text-center text-2xl tracking-wider sm:text-4xl">
            Projects<span className="text-primary">.</span>
          </h2>

          <div className="">
            <Projects />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
