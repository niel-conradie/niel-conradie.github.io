import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Contact Page",
};

interface ContactLayoutProps {
  children: React.ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
