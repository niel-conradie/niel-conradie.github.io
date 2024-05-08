import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Logo() {
  return (
    <Button
      className="transition-all duration-300"
      variant="ghost"
      aria-label="Home"
      asChild
    >
      <Link href="/">
        <h1 className="text-lg font-semibold tracking-wider">Niel Conradie</h1>
      </Link>
    </Button>
  );
}
