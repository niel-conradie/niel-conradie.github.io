import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-3.75rem)] items-center justify-center">
      <Image alt="Image Test" src="./favicon.ico" width={200} height={200} />
    </main>
  );
}
