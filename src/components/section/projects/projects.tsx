"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Badge } from "@/components/ui/badge";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Heading } from "@/components/utils";

import { projects } from "@/data";

export default function Projects() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden">
      <Heading title="Projects" />

      <div className="pb-20">
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
                    translateZ="75"
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
                  <CardItem translateZ="75">
                    <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
                      {item.stack.map((item, index) => (
                        <li key={index}>
                          <Badge
                            className="rounded-lg bg-background"
                            variant="outline"
                          >
                            <span
                              className={`${item.class} px-1 py-[0.125rem] text-sm`}
                            >
                              {item.icon}
                            </span>
                            <span className="sr-only">{item.name}</span>
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                  <div className="mt-4 flex items-center justify-between">
                    <CardItem translateZ="50">
                      <Link href={item.source}>
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
                      <Link href={item.preview}>
                        <HoverBorderGradient
                          className="sm:w-32"
                          as="button"
                          clockwise={false}
                          aria-label="Preview"
                        >
                          <span className="tracking-wider">Preview</span>
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
  );
}
