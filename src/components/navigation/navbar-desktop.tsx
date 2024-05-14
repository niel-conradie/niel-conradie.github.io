"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { routes } from "@/constants";

export default function NavbarDesktop() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex h-full items-center justify-center gap-x-4 px-4">
        {routes.map((link, index) => (
          <li key={index}>
            <Button
              className="transition-all duration-300 hover:text-primary"
              variant="ghost"
              aria-label={link.name}
              asChild
            >
              <Link className="relative" href={link.href}>
                <span
                  className={`select-none text-sm tracking-wider after:absolute after:bottom-2 after:left-[12.5%] after:block after:h-[1px] after:bg-primary after:text-center after:transition-all after:duration-1000 ${pathname === link.href ? "after:w-[75%]" : "after:w-0"}`}
                >
                  {link.name}
                </span>
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
