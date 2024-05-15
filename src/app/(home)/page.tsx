"use client";

import { motion } from "framer-motion";

import { LoaderProvider, Logo } from "@/components/utils";

import { fade } from "@/utils";

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[3.125rem] sm:pb-4 sm:pt-[3.125rem]">
      <LoaderProvider>
        <div className="z-50 flex flex-col gap-4">
          <div className="">
            <h2 className="mb-4 text-center text-2xl tracking-wider">
              Software Developer
            </h2>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              deleniti ducimus explicabo sapiente ad, ea quae magnam officia qui
              molestiae.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Logo />
          </div>
        </div>
      </LoaderProvider>
    </main>
  );
}
