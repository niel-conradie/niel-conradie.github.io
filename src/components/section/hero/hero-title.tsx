"use client";

import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { heroTitle } from "@/data";

export default function HeroTitle() {
  const plugin = useRef(Autoplay({ delay: 7500 }));

  return (
    <Carousel
      className="h-full max-w-[34.375rem]"
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
        watchDrag: false,
      }}
    >
      <CarouselContent>
        {heroTitle.map((item, index) => (
          <CarouselItem key={index}>
            <h1 className="pb-2 text-3xl font-bold tracking-wider md:text-5xl">
              {item}
            </h1>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
