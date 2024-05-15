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
              distance: 25,
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
              className="w-80 sm:w-[40rem] xl:w-[68.75rem] "
              defaultValue="technology"
            >
              <TabsList className="grid grid-cols-3">
                {categories.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    className="transition-all duration-300 hover:!text-primary"
                    value={category.value}
                  >
                    <span className="select-none tracking-wider">
                      {category.name}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* TECHNOLOGY START */}
              <TabsContent value="technology">
                <Carousel
                  setApi={setApi}
                  plugins={[plugin.current]}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    {technologies.map((technology, index) => (
                      <CarouselItem
                        key={index}
                        className="sm:basis-1/2 xl:basis-1/3"
                      >
                        <Card className="h-[22.8125rem] cursor-grab bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:h-[23.4375rem] xl:h-[24.6875rem]">
                          <CardHeader>
                            <CardTitle className="select-none text-center text-base tracking-wider sm:text-lg">
                              {technology.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent>
                            <div className="flex items-center justify-center">
                              <ul className="flex flex-col gap-y-1">
                                {technology.info.map((item, index) => (
                                  <li key={index}>
                                    <div className="flex select-none items-center justify-center gap-x-2">
                                      <span className={`text-lg ${item.class}`}>
                                        {item.icon}
                                      </span>
                                      <span>{item.name}</span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* NAVIGATION */}
                  <div className="hidden sm:block">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </TabsContent>
              {/* TECHNOLOGY END */}

              {/* QUALIFICATION START */}
              <TabsContent value="qualification">
                <Carousel
                  setApi={setApi}
                  plugins={[plugin.current]}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    {qualifications.map((qualification, index) => (
                      <CarouselItem
                        key={index}
                        className="sm:basis-1/2 xl:basis-1/3"
                      >
                        <Card className="h-[22.8125rem] cursor-grab bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:h-[23.4375rem] xl:h-[24.6875rem]">
                          <CardHeader>
                            <CardTitle className="select-none text-center text-base tracking-wider sm:text-lg">
                              {qualification.name}
                            </CardTitle>

                            <CardDescription className="select-none text-center text-sm tracking-wider sm:text-base">
                              {qualification.location}
                            </CardDescription>
                          </CardHeader>

                          <CardContent>
                            <motion.div
                              variants={fade({
                                direction: "up",
                                distance: 0,
                                duration: 0.75,
                                delay: 0,
                              })}
                              initial="hidden"
                              animate="show"
                            >
                              <Image
                                className="select-none rounded-lg"
                                src={qualification.image}
                                alt={qualification.name}
                                width={300}
                                height={200}
                              />
                            </motion.div>
                          </CardContent>

                          <CardFooter>
                            <div className="flex h-full w-full items-center justify-center">
                              <Button
                                className="w-full transition-all duration-300 hover:text-primary"
                                variant="outline"
                                aria-label="Certificate"
                                asChild
                              >
                                <Link href={qualification.link} target="_blank">
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
                  {/* NAVIGATION */}
                  <div className="hidden sm:block">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </TabsContent>
              {/* QUALIFICATION END */}

              {/* EXPERIENCE START */}
              <TabsContent value="experience">
                <Carousel
                  setApi={setApi}
                  plugins={[plugin.current]}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    {experiences.map((experience, index) => (
                      <CarouselItem
                        key={index}
                        className="sm:basis-1/2 xl:basis-1/3"
                      >
                        <Card className="h-[22.8125rem] cursor-grab bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:h-[23.4375rem] xl:h-[24.6875rem]">
                          <CardHeader>
                            <CardTitle className="select-none text-center text-base tracking-wider sm:text-lg">
                              {experience.company}
                            </CardTitle>

                            <CardDescription className="flex select-none flex-col text-center text-sm tracking-wider sm:text-base">
                              <span>{experience.role}</span>
                              <span>
                                {experience.start} - {experience.end}
                              </span>
                            </CardDescription>
                          </CardHeader>

                          <CardContent>
                            <motion.div
                              variants={fade({
                                direction: "up",
                                distance: 0,
                                duration: 0.75,
                                delay: 0,
                              })}
                              initial="hidden"
                              animate="show"
                            >
                              <Image
                                className="select-none rounded-lg"
                                src={experience.image}
                                alt={experience.company}
                                width={300}
                                height={200}
                              />
                            </motion.div>
                          </CardContent>

                          <CardFooter>
                            <div className="mt-1 flex h-full w-full items-center justify-center">
                              <Button
                                className="w-full transition-all duration-300 hover:text-primary"
                                variant="outline"
                                aria-label="Contact"
                                asChild
                              >
                                <Link href={experience.link} target="_blank">
                                  <span className="select-none tracking-wider">
                                    Contact
                                  </span>
                                </Link>
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* NAVIGATION */}
                  <div className="hidden sm:block">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </TabsContent>
              {/* EXPERIENCE END */}
            </Tabs>

            <motion.p
              className="mt-6 text-center text-sm text-muted-foreground sm:hidden"
              variants={fade({
                direction: "down",
                distance: 25,
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
