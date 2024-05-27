"use client";

import React from "react";

import { SparklesCore } from "@/components/ui/sparkles";

export default function Projects() {
  return (
    <div className="">
      <div className="flex w-full flex-col items-center justify-center overflow-hidden">
        <h2 className="relative z-20 text-center text-4xl pb-2">Projects</h2>
        <div className="relative h-20 w-[40rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-foreground to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-foreground to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Core component */}
          <SparklesCore
            className="h-full w-full"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            particleColor="#1db954"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>

        <div className="min-h-screen"></div>
      </div>
    </div>
  );
}
