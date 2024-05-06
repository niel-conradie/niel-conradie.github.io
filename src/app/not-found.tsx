import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
  description: "404 Page",
};

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[calc(100svh)] items-center justify-center px-4 py-[50px] sm:pb-4 sm:pt-[50px]">
      <h2 className="text-3xl">404</h2>
      <span className="mx-4">|</span>
      <p>Page Not Found</p>
    </main>
  );
}
