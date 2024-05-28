"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { projects } from "@/data";

export default function Projects() {
  return (
    <div className="">
      <div className="flex w-full flex-col items-center justify-center overflow-hidden">
        <h2 className="relative z-20 pb-2 text-center text-4xl tracking-wider">
          Projects
        </h2>
        <div className="relative h-20 w-[40rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-foreground to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-foreground to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Core component */}
          <SparklesCore
            className="-mt-16 h-full w-full"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={500}
            particleColor="#1db954"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>

        <div className="">
          <TracingBeam className="px-6">
            <div className="container relative mx-auto grid grid-cols-1 gap-20 pt-4 antialiased xl:grid-cols-2">
              {projects.map((item, index) => (
                <CardContainer key={index}>
                  <CardBody className="group/card relative h-auto w-auto rounded-lg border border-border bg-card p-6 text-card-foreground hover:shadow-2xl hover:shadow-foreground sm:w-[30rem]">
                    <CardItem className="text-xl font-bold" translateZ="50">
                      {item.title}
                    </CardItem>
                    <CardItem
                      className="mt-2 max-w-sm text-sm text-muted-foreground"
                      as="p"
                      translateZ="60"
                    >
                      {item.description}
                    </CardItem>
                    <CardItem className="mt-4 w-full" translateZ="100">
                      <BackgroundGradient>
                        <Image
                          className="h-60 w-full rounded-lg object-cover group-hover/card:shadow-xl"
                          src={item.image}
                          height="1000"
                          width="1000"
                          alt="Thumbnail"
                        />
                      </BackgroundGradient>
                    </CardItem>
                    <div className="mt-10 flex items-center justify-between">
                      <CardItem translateZ={20}>
                        <Link href={item.source}>
                          <HoverBorderGradient as="button" aria-label="Source">
                            <span>Source</span>
                          </HoverBorderGradient>
                        </Link>
                      </CardItem>
                      <CardItem translateZ={20}>
                        <Link href={item.preview}>
                          <HoverBorderGradient as="button" aria-label="Preview">
                            <span>Preview</span>
                          </HoverBorderGradient>
                        </Link>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </div>
  );
}
