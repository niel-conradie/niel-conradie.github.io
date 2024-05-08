"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { routes } from "@/constants";

// TODO: Make StaggerChildren Function
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20, y: 0 },
  show: { opacity: 1, x: 0, y: 0 },
};

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
          <motion.ul
            className="flex flex-col gap-y-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {routes.map((link, index) => (
              <motion.li key={index} variants={item}>
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
                    </Link>
                  </Button>
                </SheetClose>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
