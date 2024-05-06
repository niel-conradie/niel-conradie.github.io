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
              className="transition-all duration-300"
              variant="ghost"
              aria-label={link.name}
              asChild
            >
              <Link
                className={`${pathname === link.href ? "text-primary hover:text-primary" : ""}`}
                href={link.href}
              >
                <span className="text-sm">{link.name}</span>
                <span className="sr-only">={link.name}</span>
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
