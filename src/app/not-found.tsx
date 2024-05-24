import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
  description: "404 Page",
};

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center">
      <h2>404</h2>
      <span className="mx-4">|</span>
      <p className="tracking-wider">Page Not Found</p>
    </main>
  );
}
