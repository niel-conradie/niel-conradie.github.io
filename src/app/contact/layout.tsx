import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Contact Page",
  icons: {
    icon: "./favicon.ico",
  },
};

interface ContactLayoutProps {
  children: React.ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
