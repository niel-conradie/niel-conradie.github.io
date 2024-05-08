"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { projects } from "@/constants";

import { fadeIn } from "@/utils";

export default function ProjectsPage() {
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

  const plugin = useRef(Autoplay({ delay: 15000, stopOnInteraction: true }));

  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[3.125rem] sm:pb-4 sm:pt-[3.125rem]">
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
          <h2 className="mb-6 ml-2 text-center text-3xl tracking-wider sm:text-4xl">
            Projects<span className="text-primary">.</span>
          </h2>

          <div>
            <Carousel
              className="w-80 sm:w-[31.375rem] xl:w-[68.875rem]"
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
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="xl:basis-1/3">
                    <Card className="h-[22.5rem] cursor-grab sm:h-[28.25rem] xl:h-[24.5rem]">
                      <CardHeader>
                        <CardTitle className="text-center text-base tracking-wider sm:text-lg">
                          {project.title}
                        </CardTitle>

                        <CardDescription className="text-center text-sm tracking-wider sm:text-base">
                          {project.description}
                          <span className="text-primary">.</span>
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <Image
                          className="rounded-lg"
                          src={project.image}
                          alt={project.title}
                          width={500}
                          height={500}
                        />
                      </CardContent>

                      <CardFooter>
                        <div className="h-full w-full">
                          <div className="flex items-center justify-between sm:justify-evenly">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  className="w-20 transition-all duration-300 hover:text-primary"
                                  variant="outline"
                                  aria-label="Stack"
                                >
                                  <span className="tracking-wider">Stack</span>
                                </Button>
                              </DialogTrigger>

                              <DialogContent className="h-96 w-80">
                                <DialogHeader>
                                  <DialogTitle className="mb-5 text-center">
                                    Technology Stack
                                  </DialogTitle>

                                  <div className="flex flex-wrap items-center justify-center gap-2">
                                    {project.tags.map((tag, index) => (
                                      <Badge key={index} variant="outline">
                                        <div className="flex items-center justify-center gap-x-2">
                                          <span className="text-sm">
                                            {tag.icon}
                                          </span>
                                          <span className="tracking-wider">
                                            {tag.name}
                                          </span>
                                        </div>
                                      </Badge>
                                    ))}
                                  </div>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                            <Button
                              className="w-20 transition-all duration-300 hover:text-primary"
                              variant="outline"
                              aria-label="Source"
                              asChild
                            >
                              <Link href={project.source} target="_blank">
                                <span className="tracking-wider">Source</span>
                              </Link>
                            </Button>

                            <Button
                              className="w-20 transition-all duration-300 hover:text-primary"
                              variant="outline"
                              aria-label="Source"
                              asChild
                            >
                              <Link href={project.preview} target="_blank">
                                <span className="tracking-wider">Preview</span>
                              </Link>
                            </Button>
                          </div>
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

            <p className="mt-6 text-center text-sm text-muted-foreground sm:hidden">
              {current} of {count}
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
