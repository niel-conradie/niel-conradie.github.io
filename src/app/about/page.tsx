"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoaderProvider } from "@/components/utils";

import { fade } from "@/utils";

import {
  categories,
  description,
  experience,
  qualification,
  technology,
} from "@/constants/about";

export default function AboutPage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("slidesInView", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = useRef(Autoplay({ delay: 7500, stopOnInteraction: true }));

  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[3.125rem] sm:pb-4 sm:pt-[3.125rem]">
      <LoaderProvider>
        <div className="sm:mb-24">
          <motion.h2
            className="z-30 mb-6 ml-2 select-none text-center text-3xl tracking-wider sm:text-4xl"
            variants={fade({
              direction: "up",
              distance: 50,
              duration: 1,
              delay: 1.5,
            })}
            initial="hidden"
            animate="show"
          >
            About<span className="text-primary">.</span>
          </motion.h2>

          <div className="flex flex-col items-center justify-center gap-6 xl:flex-row xl:gap-x-28">
            <div className="hidden w-96 sm:flex sm:w-[31.375rem]">
              <p className="tracking-wider">{description}</p>
            </div>

            <div className="z-40">
              <Tabs
                defaultValue="technology"
                className="w-80 sm:w-[31.375rem] xl:w-[402px]"
              >
                <TabsList className="grid grid-cols-3">
                  {categories.map((category, index) => (
                    <TabsTrigger key={index} value={category.value}>
                      <span className="tracking-wider transition-all duration-300 hover:text-primary">
                        {category.name}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="technology">
                  <Carousel
                    orientation="horizontal"
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{
                      loop: true,
                    }}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                  >
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <Card className="h-[22.5rem] cursor-grab sm:h-[28.25rem] xl:h-[22.5rem]">
                            <CardHeader></CardHeader>
                            <CardContent className="">
                              <span className="">{index + 1}</span>
                            </CardContent>
                            <CardFooter></CardFooter>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="hidden sm:block">
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </Carousel>
                </TabsContent>

                <TabsContent value="qualification">
                  <Carousel
                    orientation="horizontal"
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{
                      loop: true,
                    }}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                  >
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <Card className="h-[22.5rem] cursor-grab sm:h-[28.25rem] xl:h-[22.5rem]">
                            <CardHeader></CardHeader>
                            <CardContent className="">
                              <span className="">{index + 1}</span>
                            </CardContent>
                            <CardFooter></CardFooter>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="hidden sm:block">
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </Carousel>
                </TabsContent>

                <TabsContent value="experience">
                  <Carousel
                    orientation="horizontal"
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{
                      loop: true,
                    }}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                  >
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <Card className="h-[22.5rem] cursor-grab sm:h-[28.25rem] xl:h-[22.5rem]">
                            <CardHeader></CardHeader>
                            <CardContent className="">
                              <span className="">{index + 1}</span>
                            </CardContent>
                            <CardFooter></CardFooter>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="hidden sm:block">
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </Carousel>
                </TabsContent>
              </Tabs>

              <motion.p
                className="z-30 mt-6 text-center text-sm text-muted-foreground sm:hidden"
                variants={fade({
                  direction: "down",
                  distance: 50,
                  duration: 1,
                  delay: 1.5,
                })}
                initial="hidden"
                animate="show"
              >
                {current} of {count}
              </motion.p>
            </div>
          </div>
        </div>
      </LoaderProvider>
    </main>
  );
}
