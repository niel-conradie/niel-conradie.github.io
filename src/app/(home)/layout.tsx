import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "Home Page",
  icons: {
    icon: "https://niel-conradie.github.io/favicon.ico",
  },
};

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <>{children}</>;
}
