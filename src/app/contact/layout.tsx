import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Contact Page",
};

interface Props {
  children: React.ReactNode;
}

export default function ContactLayout({ children }: Props) {
  return <>{children}</>;
}
