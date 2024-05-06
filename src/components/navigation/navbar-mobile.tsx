"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { routes } from "@/constants";

import { fadeIn } from "@/utils";

export default function NavbarMobile() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="fixed bottom-0 z-50 h-[50px] w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:hidden"
      variants={fadeIn({
        direction: "up",
        distance: 50,
        duration: 1,
        delay: 0,
      })}
      initial="hidden"
      animate="show"
    >
      <ul className="flex h-full items-center justify-center gap-x-8 px-4">
        {routes.map((link, index) => {
          return (
            <li key={index}>
              <Button
                className="transition-all duration-300"
                variant="ghost"
                aria-label={link.name}
                asChild
              >
                <Link
                  className={`${pathname === link.href ? "scale-110 text-primary hover:text-primary" : ""}`}
                  href={link.href}
                >
                  {pathname === link.href ? (
                    <span className="text-2xl">{link.active}</span>
                  ) : (
                    <span className="text-2xl">{link.icon}</span>
                  )}
                  <span className="sr-only">={link.name}</span>
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
