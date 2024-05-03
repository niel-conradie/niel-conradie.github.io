"use client";

import Link from "next/link";

import { NavbarDesktop, Socials } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 h-[50px] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid h-full grid-cols-2 items-center px-4 lg:grid-cols-3">
        {/* COLUMN 1 START */}
        <div className="hidden lg:block">
          <div className="">
            <NavbarDesktop />
          </div>
        </div>
        {/* COLUMN 1 END */}

        {/* COLUMN 2 START */}
        <div className="">
          {/* LOGO */}
          <div className="flex items-center sm:justify-center">
            <Button variant="ghost" aria-label="Home" asChild>
              <Link href="/">
                <h1 className="text-lg font-semibold">Niel Conradie</h1>
              </Link>
            </Button>
          </div>
        </div>
        {/* COLUMN 2 END */}

        {/* COLUMN 3 START */}
        <div className="">
          <div className="flex items-center justify-end sm:justify-center">
            <Socials />
            <ThemeToggle />
          </div>
        </div>
        {/* COLUMN 3 END */}
      </div>
    </header>
  );
}
