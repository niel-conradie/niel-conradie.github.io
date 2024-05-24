"use client";

import React from "react";

import { FloatingNav } from "@/components/ui/floating-navbar";

import { navItems } from "@/data";

export default function Navbar() {
  return (
    <nav className="relative w-full">
      <FloatingNav navItems={navItems} />
    </nav>
  );
}
