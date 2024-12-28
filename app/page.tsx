import About from "@/components/About";
import Contact from "@/components/Contact";
import { scrollTexts } from "@/components/data";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import VelocityScrollComp from "@/components/VelocityScroll";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <VelocityScrollComp text={scrollTexts[0]} />
      <About />
      <VelocityScrollComp text={scrollTexts[1]} />
      <Experience />
      <VelocityScrollComp text={scrollTexts[2]} />
      <Projects />
      <VelocityScrollComp text={scrollTexts[3]} />
      <Contact />
    </section>
  );
}
