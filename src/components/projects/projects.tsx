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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { filters, projects } from "@/constants";

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  // function filterProjects(search: string) {
  //   return projects.filter((project) =>
  //     project.tags.some((tag) =>
  //       tag.toLowerCase().includes(search.toLowerCase()),
  //     ),
  //   );
  // }

  // const filteredProjects = filterProjects(search);

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
      {/* <div className="mb-4 text-center">
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
      </div> */}

      <Carousel
        className="w-[350px] sm:w-[450px] xl:w-[1400px]"
        orientation="horizontal"
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
          {projects.map((project, index) => (
            <CarouselItem key={index} className="xl:basis-1/3">
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
                </CardContent>

                <CardFooter>
                  <div className="h-full w-full">
                    <div className="flex items-center justify-between sm:justify-evenly">
                      {/* STACK START */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="w-20 transition-all duration-300"
                            variant="outline"
                            aria-label="Stack"
                          >
                            <span className="tracking-wider text-primary">
                              Stack
                            </span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="h-[400px] w-[320px]">
                          <DialogHeader>
                            <DialogTitle className="text-center">
                              Technology Stack
                            </DialogTitle>
                            <DialogDescription></DialogDescription>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                              {project.tags.map((tag, index) => (
                                <Badge key={index} variant="outline">
                                  <span className="tracking-wider">
                                    {tag.name}
                                  </span>
                                </Badge>
                              ))}
                            </div>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      {/* STACK END */}

                      {/* SOURCE START */}
                      <Button
                        className="w-20 transition-all duration-300"
                        variant="outline"
                        aria-label="Source"
                        asChild
                      >
                        <Link href={project.source}>
                          <span className="tracking-wider text-primary">
                            Source
                          </span>
                        </Link>
                      </Button>
                      {/* SOURCE END */}

                      {/* PREVIEW START */}
                      <Button
                        className="w-20 transition-all duration-300"
                        variant="outline"
                        aria-label="Preview"
                        asChild
                      >
                        <Link href={project.preview}>
                          <span className="tracking-wider text-primary">
                            Preview
                          </span>
                        </Link>
                      </Button>
                      {/* PREVIEW END */}
                    </div>
                  </div>
                </CardFooter>
              </Card>
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
    </>
  );
}
