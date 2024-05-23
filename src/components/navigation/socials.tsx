"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { socials } from "@/data";

export default function Socials() {
  return (
    <nav className="sm:mr-4">
      <ul className="flex h-full items-center justify-center sm:gap-x-4">
        {socials.map((link, index) => {
          return (
            <li key={index}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="transition-all duration-300 hover:scale-110 hover:text-primary"
                      variant="ghost"
                      size="icon"
                      aria-label={link.name}
                      asChild
                    >
                      <Link href={link.href} target="_blank">
                        <span className="text-xl">{link.icon}</span>
                        <span className="sr-only">={link.name}</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
