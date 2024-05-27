import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niel Conradie | GitHub",
  description: "Niel Conradie GitHub Pages",
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
