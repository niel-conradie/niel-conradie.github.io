"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Autoplay from "embla-carousel-autoplay";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
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
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import { qualifications } from "@/data";

export default function Technology() {
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

  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }));

  return (
    <div className="">
      <Carousel
        className="w-96 md:w-[550px] xl:w-[1150px]"
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
          {qualifications.map((item, index) => (
            <CarouselItem key={index} className="py-14 xl:basis-1/2">
              <CardContainer>
                <CardBody className="group/card relative h-[400px] w-80 cursor-grab rounded-lg border border-border bg-card p-6 text-card-foreground shadow-[0_8px_16px_rgb(0_0_0/0.4)] hover:shadow-[0_10px_20px_rgb(0_0_0/0.8)] md:h-[480px] md:w-[480px] xl:h-[480px]">
                  <CardItem
                    className="text-center text-xl font-bold"
                    as="h4"
                    translateZ="50"
                  >
                    {item.name}
                  </CardItem>
                  <CardItem
                    className="mt-2 text-center text-sm text-muted-foreground"
                    as="p"
                    translateZ="75"
                  >
                    {item.location}
                  </CardItem>
                  <CardItem className="mt-4 w-full" translateZ="100">
                    <Image
                      className="w-full rounded-lg object-cover group-hover/card:shadow-xl"
                      src={item.image}
                      alt={item.name}
                      width="1000"
                      height="1000"
                    />
                  </CardItem>
                  <div className="mt-6 flex items-center justify-between">
                    <CardItem translateZ="50">
                      <Link href={item.link} target="_blank">
                        <HoverBorderGradient
                          className="sm:w-32"
                          as="button"
                          clockwise={true}
                          aria-label="Source"
                        >
                          <span className="tracking-wider">Source</span>
                        </HoverBorderGradient>
                      </Link>
                    </CardItem>
                    <CardItem translateZ="50">
                      <Dialog>
                        <DialogTrigger asChild>
                          <HoverBorderGradient
                            className="sm:w-32"
                            as="button"
                            clockwise={false}
                            aria-label="Preview"
                          >
                            <span className="tracking-wider">Preview</span>
                          </HoverBorderGradient>
                        </DialogTrigger>
                        <DialogContent className="h-fit w-fit">
                          <DialogHeader>
                            <DialogTitle className="text-center">
                              {item.name}
                            </DialogTitle>
                          </DialogHeader>
                          <Image
                            className="rounded-lg p-4"
                            src={item.image}
                            alt={item.name}
                            width="1000"
                            height="1000"
                          />
                        </DialogContent>
                      </Dialog>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* NAVIGATION */}
        <div className="hidden sm:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <p className="text-center text-sm text-muted-foreground sm:hidden">
        {current} of {count}
      </p>
    </div>
  );
}
