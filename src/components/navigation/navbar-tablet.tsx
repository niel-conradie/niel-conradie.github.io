"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { routes } from "@/constants";

export default function NavbarTablet() {
  const pathname = usePathname();

  return (
    <Sheet>
      <div className="flex items-center justify-center">
        <SheetTrigger>
          <Menu className="h-8 w-8" />
        </SheetTrigger>
      </div>
      <SheetContent side={"left"}>
        <nav className="flex h-full items-center justify-center">
          <ul className="flex flex-col gap-y-10">
            {routes.map((link, index) => (
              <li key={index}>
                <SheetClose asChild>
                  <Button
                    className="transition-all duration-300"
                    variant="ghost"
                    aria-label={link.name}
                    asChild
                  >
                    <Link href={link.href}>
                      <div className="flex items-center gap-x-4">
                        <span
                          className={`text-4xl ${pathname === link.href ? "text-primary hover:text-primary" : ""}`}
                        >
                          {link.icon}
                        </span>
                        <span className="text-2xl">{link.name}</span>
                      </div>
                      <span className="sr-only">={link.name}</span>
                    </Link>
                  </Button>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        {/* <Link className="mt-10 text-lg font-medium" href={link.href}>
                  {link.name}
                </Link> */}
      </SheetContent>
    </Sheet>
  );
}
