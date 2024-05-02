import Link from "next/link";

import { ThemeToggle } from "@/components/theme";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid h-[59px] grid-cols-2 items-center px-4 md:grid-cols-3">
        {/* COLUMN 1 START */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-lg font-semibold">Niel Conradie</h1>
          </Link>
        </div>
        {/* COLUMN 1 END */}

        {/* COLUMN 2 START */}
        <div className="hidden md:block"></div>
        {/* COLUMN 2 END */}

        {/* COLUMN 3 START */}
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
        {/* COLUMN 3 END */}
      </div>
    </header>
  );
}
