"use client";
import { ChevronRight, ChevronsRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import GradientButton from "./GradientButton";
import GradualSpacing from "./ui/gradual-spacing";
import HyperText from "./ui/hyper-text";

function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen gap-4 py-16 md:py-16"
      id="hero"
    >
      <GradualSpacing
        className="font-display text-center text-xl font-bold -tracking-widest dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:leading-[5rem]"
        text="Hi, I'm Shivesh Anand"
      />
      <HyperText>A Software Developer</HyperText>
      <div className="flex justify-center space-x-4 mt-4 mb-16">
        <GradientButton
          afterClickIcon={<ChevronsRight />}
          afterClickText="Resume"
          beforeClickIcon={<ChevronRight />}
          beforeClickText="Resume"
          handleClick={() => {
            window.open(siteConfig.links.resume, "_blank");
          }}
          minWidth="8rem"
        />
      </div>
    </section>
  );
}

export default Hero;
