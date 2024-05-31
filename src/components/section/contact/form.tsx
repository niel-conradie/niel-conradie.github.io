"use client";

import React from "react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";

export default function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <CardContainer>
      <CardBody className="group/card relative h-auto w-auto rounded-lg border border-border bg-card p-6 text-card-foreground shadow-[0_8px_16px_rgb(0_0_0/0.4)] hover:shadow-[0_10px_20px_rgb(0_0_0/0.8)] sm:w-[30rem]">
        <CardItem
          className="text-center text-xl font-bold"
          as="h4"
          translateZ="50"
        >
          Let&apos;s get in touch
        </CardItem>

        <form className="my-8" onSubmit={handleSubmit}>
          <CardItem translateZ="75">
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <LabelInputContainer>
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" type="text" placeholder="" />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" type="text" placeholder="" />
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="text" placeholder="" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Input
                id="message"
                className="h-32"
                type="textarea"
                placeholder=""
              />
            </LabelInputContainer>
          </CardItem>

          <CardItem className="mt-4 w-full" translateZ="50">
            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send
              <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
              <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
            </button>
          </CardItem>
        </form>
      </CardBody>
    </CardContainer>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
