"use client";

import Link from "next/link";
import React, { useState } from "react";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { ThemeToggle } from "@/components/theme";

import { cn } from "@/lib/utils";
import { Button } from "./button";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.ul
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex h-[3.125rem] max-w-fit items-center justify-center space-x-4 rounded-lg border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          className,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <li key={`link=${idx}`}>
            <Button
              className="w-18 transition-all duration-300 hover:scale-110 hover:text-primary"
              variant={"ghost"}
              aria-label={navItem.name}
              asChild
            >
              <Link href={navItem.link}>
                <span className="block text-2xl sm:hidden">{navItem.icon}</span>
                <span className="hidden text-sm sm:block">{navItem.name}</span>
                <span className="sr-only block sm:hidden">{navItem.name}</span>
              </Link>
            </Button>
          </li>
        ))}
        <ThemeToggle />
      </motion.ul>
    </AnimatePresence>
  );
};
