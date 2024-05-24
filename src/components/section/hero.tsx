"use client";

import React from "react";

import { HeroParallax } from "@/components/ui/hero-parallax";

import { heroItems } from "@/data";

export default function Hero() {
  return <HeroParallax heroItems={heroItems} />;
}
