import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "Home Page",
};

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return <>{children}</>;
}
