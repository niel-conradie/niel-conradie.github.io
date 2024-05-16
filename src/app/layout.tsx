import "@/styles/globals.scss";

import { Inter as FontSans } from "next/font/google";

import { Header } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme/";
import { Particles } from "@/components/utils";

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
    <html lang="en" suppressHydrationWarning>
      <link
        rel="shortcut icon"
        href="/favicon/favicon.ico"
        type="image/x-icon"
      />
      <link
        rel="apple-touch-icon"
        href="/favicon/apple-touch-icon.png"
        sizes="180x180"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-16x16.png"
        sizes="16x16"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          <Particles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
