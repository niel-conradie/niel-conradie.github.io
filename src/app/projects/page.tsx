"use client";

import { motion } from "framer-motion";

import { Projects } from "@/components/projects";

import { fadeIn } from "@/utils";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Slideshow } from "@/components/projects";
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
import Image from "next/image";

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
          <h2 className="mb-6 text-center text-2xl tracking-wider sm:text-4xl">
            Projects<span className="text-primary">.</span>
          </h2>

          <div className="">
            {/* <Projects /> */}
            <Carousel
              className="w-[350px] sm:w-[450px] xl:w-[1400px]"
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
                    <div className="p-1">
                      <Card className="h-[355px] cursor-grab sm:h-[415px] xl:h-[415px]">
                        <CardHeader className="text-center">
                          <CardTitle className="tracking-wider">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="tracking-wider">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Slideshow project={project} />
                          {/* <Image
                            src={project.images[0].src}
                            alt={project.title}
                            width={500}
                            height={500}
                          /> */}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* NAVIGATION START */}
              <div className="hidden sm:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
              {/* NAVIGATION END */}
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
