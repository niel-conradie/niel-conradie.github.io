"use client";

import Image from "next/image";
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

export default function HomePage() {
  const plugin = useRef(Autoplay({ delay: 7500 }));

  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[3.125rem] sm:pb-4 sm:pt-[3.125rem]">
      <LoaderProvider>
        <div className="flex flex-col xl:container sm:mb-24 xl:flex-row">
          <div className="mb-6 xl:w-1/2">
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

            <div className="flex items-center justify-center px-4 sm:px-0">
              <p className="text-center tracking-wider sm:w-[550px]">
                {description}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
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
