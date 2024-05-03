"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { socials } from "@/constants";

export default function Socials() {
  return (
    <nav className="sm:mr-4">
      <ul className="flex h-full items-center justify-center sm:gap-x-4">
        {socials.map((link, index) => {
          return (
            <li key={index}>
              <Button
                variant="ghost"
                size="icon"
                aria-label={link.name}
                asChild
              >
                <Link href={link.href}>
                  <span className="text-xl">{link.icon}</span>
                  <span className="sr-only">={link.name}</span>
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
