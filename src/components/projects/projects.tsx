import Image from "next/image";
import Link from "next/link";

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
} from "@/components/ui/carousel";

interface Project {
  name: string;
  description: string;
  image: string;
  pages: string;
  github: string;
  tags: string[];
}

interface Projects {
  projects: Project[];
}

export default function Projects({ projects }: Projects) {
  return (
    <Carousel className="w-[350px] sm:w-[550px] xl:w-[1400px]">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="xl:basis-1/3">
            <Card className="h-[355px] cursor-grab sm:h-[470px] xl:h-[415px]">
              <CardHeader className="text-center">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
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
                        <span className="text-primary">GitHub</span>
                      </Link>
                    </Button>
                    <Button
                      className="transition-all duration-300"
                      variant="outline"
                      aria-label="Pages"
                      asChild
                    >
                      <Link href={project.pages}>
                        <span className="text-primary">Pages</span>
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
  );
}
