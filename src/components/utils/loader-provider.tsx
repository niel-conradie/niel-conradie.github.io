"use client";

import { motion } from "framer-motion";

import { Loader } from "@/components/utils";

import { fade } from "@/utils";

interface LoaderProviderProps {
  children?: React.ReactNode;
}

export default function LoaderProvider({ children }: LoaderProviderProps) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      variants={fade({
        direction: "up",
        distance: 0,
        duration: 0.25,
        delay: 0.25,
      })}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="absolute flex items-center justify-center"
        variants={fade({
          direction: "up",
          distance: 0,
          duration: 0.25,
          delay: 2,
        })}
        initial="show"
        animate="hidden"
      >
        <Loader />
      </motion.div>

      <motion.div
        variants={fade({
          direction: "up",
          distance: 0,
          duration: 0.25,
          delay: 2.25,
        })}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
