import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Projects Page",
  icons: {
    icon: "https://niel-conradie.github.io/favicon.ico",
  },
};

interface ProjectsLayoutProps {
  children: React.ReactNode;
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return <>{children}</>;
}
