import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/";

import { cn } from "@/lib/utils";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niel Conradie | Portfolio",
  description: "Portfolio Website",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
