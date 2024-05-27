import { Hero } from "@/components/section/hero/";
import { Projects } from "@/components/section/projects";

export default function Landing() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
