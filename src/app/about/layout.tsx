import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "About Page",
};

interface Props {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: Props) {
  return <>{children}</>;
}
