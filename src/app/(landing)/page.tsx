import { About } from "@/components/section/about";
import { Contact } from "@/components/section/contact";
import { Hero } from "@/components/section/hero/";
import { Projects } from "@/components/section/projects";

export default function Landing() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
