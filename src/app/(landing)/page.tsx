import { Hero } from "@/components/section/hero/index";

export default function Landing() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <h3 className="text-center text-4xl">
          Projects<span className="text-primary">.</span>
        </h3>
      </section>
    </main>
  );
}
