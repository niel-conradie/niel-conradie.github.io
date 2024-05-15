"use client";

import Link from "next/link";
import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LoaderProvider, Logo } from "@/components/utils";

import { fade } from "@/utils";

import { description, title } from "@/constants/home";

// TODO: Make StaggerChildren Function
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.0125,
      delayChildren: 0.25,
    },
  },
};

const containerItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75 } },
};

export default function HomePage() {
  const plugin = useRef(Autoplay({ delay: 7500 }));

  const _description = description.split("");

  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[3.125rem] sm:pb-4 sm:pt-[3.125rem]">
      <LoaderProvider>
        <div className="flex flex-col xl:container sm:mb-24 xl:flex-row">
          <div className="mb-6 sm:mb-0 xl:w-1/2">
            <motion.div
              variants={fade({
                direction: "up",
                distance: 25,
                duration: 1,
                delay: 1.5,
              })}
              initial="hidden"
              animate="show"
            >
              <Carousel
                className="w-screen xl:w-full"
                plugins={[plugin.current]}
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                  watchDrag: false,
                }}
              >
                <CarouselContent>
                  {title.map((item, index) => (
                    <CarouselItem key={index}>
                      <h2 className="mb-6 ml-2 select-none text-center text-3xl tracking-wider sm:text-4xl">
                        {item}
                        <span className="text-primary">.</span>
                      </h2>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>

            <div className="flex items-center justify-center px-4 sm:px-0">
              <motion.p
                className="select-none text-center tracking-wider sm:w-[34/375rem]"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {_description.map((item, index) => (
                  <motion.span
                    key={index}
                    className="mx-[0.0125em]"
                    variants={containerItem}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
              <motion.div
                variants={fade({
                  direction: "right",
                  distance: 25,
                  duration: 1,
                  delay: 3.5,
                })}
                initial="hidden"
                animate="show"
              >
                <Button
                  className="transition-all duration-300 hover:text-primary"
                  variant="outline"
                  aria-label="Projects"
                  asChild
                >
                  <Link href={"/projects"}>
                    <span className="select-none tracking-wider">Projects</span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                variants={fade({
                  direction: "left",
                  distance: 25,
                  duration: 1,
                  delay: 3.5,
                })}
                initial="hidden"
                animate="show"
              >
                <Button
                  className="transition-all duration-300 hover:text-primary"
                  variant="outline"
                  aria-label="Contact"
                  asChild
                >
                  <Link href={"/contact"}>
                    <span className="select-none tracking-wider">Contact</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="flex items-center justify-center xl:w-1/2">
            <Logo />
          </div>
        </div>
      </LoaderProvider>
    </main>
  );
}
