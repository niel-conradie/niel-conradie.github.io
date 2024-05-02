import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Projects Page",
};

interface ProjectsLayoutProps {
  children: React.ReactNode;
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return <>{children}</>;
}
