"use client";

import { Cube, LoaderProvider } from "@/components/utils";

export default function ContactPage() {
  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[3.125rem] sm:pb-4 sm:pt-[3.125rem]">
      <LoaderProvider>
        <Cube />
      </LoaderProvider>
    </main>
  );
}
