import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Projects Page",
};

interface Props {
  children: React.ReactNode;
}

export default function ProjectsLayout({ children }: Props) {
  return <>{children}</>;
}
