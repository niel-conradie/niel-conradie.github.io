import { Cube, LoaderProvider, Logo } from "@/components/utils";

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100dvh)] items-center justify-center px-4 py-[3.125rem] sm:pb-4 sm:pt-[3.125rem]">
      <LoaderProvider>
        <div className="">
          <div className="">
            <h2 className=""></h2>
            <p className=""></p>
          </div>

          <div className="">
            <Cube />
          </div>
        </div>
      </LoaderProvider>
    </main>
  );
}
