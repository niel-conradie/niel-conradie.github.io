"use client";

import { FormEvent, useRef } from "react";

import emailjs from "@emailjs/browser";

import { LoaderProvider } from "@/components/utils";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const emailjsServiceKey: any = process.env.EMAILJS_SERVICE_KEY;
  const emailjsTemplateKey: any = process.env.EMAILJS_TEMPLATE_KEY;
  const emailjsPublicKey: any = process.env.EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(emailjsServiceKey, emailjsTemplateKey, form.current, {
          publicKey: emailjsPublicKey,
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );
    }
  };
  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[3.125rem] sm:pb-4 sm:pt-[3.125rem]">
      <LoaderProvider>
        <div className="">
          <form
            ref={form}
            className="rounded-lg border bg-background p-4"
            onSubmit={sendEmail}
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-y-2">
                <label>Name</label>
                <input
                  className="rounded-lg border bg-background p-2 text-foreground"
                  type="text"
                  name="user_name"
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label>Email</label>
                <input
                  className="rounded-lg border bg-background p-2 text-foreground"
                  type="text"
                  name="user_email"
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label>Message</label>
                <textarea
                  className="rounded-lg border bg-background p-2 text-foreground"
                  name="message"
                />
              </div>

              <div className="flex items-center justify-center">
                <input
                  className="w-full rounded-lg bg-primary p-2"
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </div>
      </LoaderProvider>
    </main>
  );
}
