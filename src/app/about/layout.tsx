import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "About Page",
  icons: {
    icon: "./favicon.ico",
  },
};

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <>{children}</>;
}
