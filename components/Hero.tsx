"use client";
import { ChevronRight, ChevronsRight } from "lucide-react";

import GradientButton from "./GradientButton";
import FlickeringGrid from "./ui/flickering-grid";
import GradualSpacing from "./ui/gradual-spacing";
import HyperText from "./ui/hyper-text";

import { siteConfig } from "@/config/site";

function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen gap-4 py-16 md:py-16"
      id="hero"
    >
      <FlickeringGrid
        className="z-0 absolute inset-0 
             [mask-image:radial-gradient(400px_circle_at_center,white,transparent)] 
             sm:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] 
             md:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] 
             lg:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        color="#34d399"
        flickerChance={0.1}
        gridGap={6}
        maxOpacity={0.5}
        squareSize={4}
      />
      <GradualSpacing
        className="font-display justify-center items-center text-center text-3xl font-bold dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-[3.5rem] lg:leading-[4rem]"
        text="Hi, I'm"
      />
      <GradualSpacing
        className="font-display justify-center items-center text-center text-3xl font-bold dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-[3.5rem] lg:leading-[4rem]"
        text="Shivesh Anand"
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
