import Image from "next/image";
import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface SlideshowProps {
  project: {
    title: string;
    description: string;
    source: string;
    preview: string;
    images: {
      src: string;
      alt: string;
    }[];
    tags: {
      name: string;
      icon: any; // FIXME: Add Type
    }[];
  };
}

export default function Slideshow({ project }: SlideshowProps) {
  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
        watchDrag: false,
      }}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {project.images.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image.src} alt={image.alt} width={500} height={500} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
