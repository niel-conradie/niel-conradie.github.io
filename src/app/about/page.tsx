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
  experiences,
  qualifications,
  technologies,
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
            className="mb-6 ml-2 select-none text-center text-3xl tracking-wider sm:text-4xl"
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

          <div>
            <Tabs
              className="w-80 sm:w-[34.375rem] xl:w-[68.75rem]"
              defaultValue="technology"
            >
              <TabsList className="grid grid-cols-3">
                {categories.map((category, index) => (
                  <TabsTrigger key={index} value={category.value}>
                    <span className="select-none tracking-wider transition-all duration-300 hover:text-primary">
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
                      <CarouselItem key={index} className="xl:basis-1/3">
                        <Card className="h-[22.8125rem] cursor-grab sm:h-[29.6875rem] xl:h-[24.6875rem]">
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
                    {qualifications.map((qualification, index) => (
                      <CarouselItem key={index} className="xl:basis-1/3">
                        <Card className="h-[22.8125rem] cursor-grab sm:h-[29.6875rem] xl:h-[24.6875rem]">
                          <CardHeader>
                            <CardTitle className="select-none text-center text-base tracking-wider sm:text-lg">
                              {qualification.title}
                            </CardTitle>

                            <CardDescription className="select-none text-center text-sm tracking-wider sm:text-base">
                              {qualification.location}
                            </CardDescription>
                          </CardHeader>

                          <CardContent>
                            <Image
                              className="select-none rounded-lg"
                              src={qualification.image}
                              alt={qualification.title}
                              width={500}
                              height={500}
                            />
                          </CardContent>

                          <CardFooter>
                            <div className="flex h-full w-full items-center justify-center">
                              <Button
                                className="w-full transition-all duration-300 hover:text-primary"
                                variant="outline"
                                aria-label="Certificate"
                                asChild
                              >
                                <Link href={qualification.href} target="_blank">
                                  <span className="select-none tracking-wider">
                                    Certificate
                                  </span>
                                </Link>
                              </Button>
                            </div>
                          </CardFooter>
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
                      <CarouselItem key={index} className="xl:basis-1/3">
                        <Card className="h-[22.8125rem] cursor-grab sm:h-[29.6875rem] xl:h-[24.6875rem]">
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
      </LoaderProvider>
    </main>
  );
}
