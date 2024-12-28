"use client";

import { Grid } from "./Grid";
import GradualSpacing from "./ui/gradual-spacing";

function About() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen gap-4 my-16 md:py-16 w-11/12"
      id="about"
    >
      <GradualSpacing
        className="font-display text-center text-4xl font-bold -tracking-widest dark:text-white md:text-7xl md:leading-[5rem] my-16"
        text="About"
      />
      <Grid />
    </section>
  );
}
export default About;
