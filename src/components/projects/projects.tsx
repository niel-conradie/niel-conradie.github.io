import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Autoplay from "embla-carousel-autoplay";

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

import { filters, projects } from "@/constants";

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  function filterProjects(search: string) {
    return projects.filter((project) =>
      project.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }

  const filteredProjects = filterProjects(search);

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
    <>
      <h2 className="mb-4 text-center text-2xl tracking-wider sm:text-4xl">
        Projects
      </h2>
      <div className="mb-4 text-center">
        {filters.map((filter, index) => {
          return (
            <Button
              key={index}
              className="transition-all duration-300"
              variant="ghost"
              aria-label={filter.name}
              onClick={() => setSearch(filter.value)}
            >
              <span
                className={`tracking-wider ${search === filter.value ? "text-primary hover:text-primary" : ""}`}
              >
                {filter.name}
              </span>
            </Button>
          );
        })}
      </div>

      <Carousel
        className="w-[350px] sm:w-[550px] xl:w-[1400px]"
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {filteredProjects.map((project, index) => (
            <CarouselItem key={index} className="xl:basis-1/3">
              <Card className="h-[355px] cursor-grab sm:h-[470px] xl:h-[415px]">
                <CardHeader className="text-center">
                  <CardTitle className="tracking-wider">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="tracking-wider">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                  />
                </CardContent>
                <CardFooter>
                  <div className="h-full w-full">
                    <div className="flex items-center justify-center gap-x-6">
                      <Button
                        className="transition-all duration-300"
                        variant="outline"
                        aria-label="GitHub"
                        asChild
                      >
                        <Link href={project.github}>
                          <span className="tracking-wider text-primary">
                            GitHub
                          </span>
                        </Link>
                      </Button>
                      <Button
                        className="transition-all duration-300"
                        variant="outline"
                        aria-label="Pages"
                        asChild
                      >
                        <Link href={project.pages}>
                          <span className="tracking-wider text-primary">
                            Pages
                          </span>
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
    </>
  );
}
