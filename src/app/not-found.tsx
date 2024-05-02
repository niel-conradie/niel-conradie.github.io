import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
  description: "404 Page",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.75rem)] items-center justify-center">
      <h2 className="text-3xl">404</h2>
      <span className="mx-4">|</span>
      <p>Page Not Found</p>
    </div>
  );
}