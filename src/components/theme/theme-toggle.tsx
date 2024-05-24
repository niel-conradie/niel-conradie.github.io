"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const onClickToggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button
      className="transition-all duration-300 hover:scale-110 hover:text-primary"
      variant="ghost"
      size="icon"
      aria-label="Toggle Theme"
      onMouseDown={onClickToggle}
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
