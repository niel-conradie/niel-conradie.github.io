import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "About Page",
  icons: {
    icon: "https://niel-conradie.github.io/favicon.ico",
  },
};

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <>{children}</>;
}
