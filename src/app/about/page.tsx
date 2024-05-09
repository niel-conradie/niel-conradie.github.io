import { LoaderProvider, Logo } from "@/components/utils";

export default function AboutPage() {
  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[3.125rem] sm:pb-4 sm:pt-[3.125rem]">
      <LoaderProvider>
        <Logo />
      </LoaderProvider>
    </main>
  );
}
