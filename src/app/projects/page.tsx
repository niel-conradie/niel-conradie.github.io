"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { Projects } from "@/components/projects";
import { Button } from "@/components/ui/button";

import { fadeIn } from "@/utils";

import { filters, projects } from "@/constants";

export default function ProjectsPage() {
  const [search, setSearch] = useState<string>("");

  function filterProjects(search: string) {
    return projects.filter((project) =>
      project.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }

  const filteredProjects = filterProjects(search);

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
        <h2 className="mb-4 text-center text-2xl sm:text-4xl">Projects</h2>
        <div className="mb-4 text-center">
          {filters.map((filter, index) => {
            return (
              <Button
                key={index}
                className="transition-all duration-300"
                variant="ghost"
                aria-label={filter.name}
                onClick={() => setSearch(filter.value)}
              >
                <span
                  className={
                    search === filter.value
                      ? "text-primary hover:text-primary"
                      : ""
                  }
                >
                  {filter.name}
                </span>
              </Button>
            );
          })}
        </div>

        <div className="">
          <Projects projects={filteredProjects} />
        </div>
      </motion.div>
    </main>
  );
}
