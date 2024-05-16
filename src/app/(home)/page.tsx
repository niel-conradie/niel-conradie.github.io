"use client";

import Link from "next/link";
import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import { Cube } from "@/components/home";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LoaderProvider } from "@/components/utils";

import { fade } from "@/utils";

import { description, title } from "@/constants/home";

export default function HomePage() {
  const plugin = useRef(Autoplay({ delay: 7500 }));

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

            <motion.div
              className="flex items-center justify-center px-4 sm:px-0"
              variants={fade({
                direction: "up",
                distance: 25,
                duration: 1,
                delay: 2,
              })}
              initial="hidden"
              animate="show"
            >
              <p className="max-w-[34.375rem] select-none text-center tracking-wider">
                {description}
              </p>
            </motion.div>

            <div className="my-6 hidden items-center justify-center gap-x-6 sm:flex">
              <motion.div
                variants={fade({
                  direction: "right",
                  distance: 25,
                  duration: 1,
                  delay: 2.5,
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
                  delay: 2.5,
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

          <motion.div
            className="mt-16 flex items-center justify-center sm:mt-20 xl:mt-0 xl:w-1/2"
            variants={fade({
              direction: "up",
              distance: 0,
              duration: 0,
              delay: 3,
            })}
            initial="hidden"
            animate="show"
          >
            <Cube />
          </motion.div>
        </div>
      </LoaderProvider>
    </main>
  );
}
