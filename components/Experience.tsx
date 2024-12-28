import { TimelineComp } from "./Timeline";
import GradualSpacing from "./ui/gradual-spacing";

function Experience() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen gap-4 my-16 md:py-16"
      id="experience"
    >
      <GradualSpacing
        className="font-display text-center text-4xl font-bold -tracking-widest dark:text-white md:text-7xl md:leading-[5rem]"
        text="Experience"
      />
      <TimelineComp />
    </section>
  );
}
export default Experience;
