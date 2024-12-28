import { Image } from "@nextui-org/image";
import { Code, Cog, School, User } from "lucide-react";

import List from "./List";
import { MarqueeComp } from "./Marquee";
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { bioText } from "./data";

import { siteConfig } from "@/config/site";

const features = [
  {
    Icon: User,
    name: "Me",
    description: "A Short Bio about me",
    href: `mailto:${siteConfig.email}`,
    cta: "Email Me",
    className: "col-span-3 lg:col-span-1",
    background: (
      <TextGenerateEffect
        className="absolute right-2 top-4 h-[400px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
        words={bioText}
      />
    ),
  },
  {
    Icon: Cog,
    name: "Skills",
    description: "A list of technical skills I'm proficient with",
    href: siteConfig.links.github,
    cta: "GitHub",
    className: "col-span-3 lg:col-span-2",
    background: <MarqueeComp />,
  },
  {
    Icon: School,
    name: "Education",
    description: (
      <div>
        <h1>Birla Institute of Technology, Mesra</h1>
        <h2>
          Bachelor of Technology in Electrical and Electronics Engineering
        </h2>
        <h3>2021-2025</h3>
      </div>
    ),
    href: siteConfig.links.college,
    cta: "College Website",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <Image
          alt="Card background"
          className="object-cover rounded-xl "
          height={500}
          src={siteConfig.images.college}
          width={900}
        />
      </div>
    ),
  },
  {
    Icon: Code,
    name: "Coding Profile",
    description: "Ratings and Stats from various coding platforms",
    className: "col-span-3 lg:col-span-1",
    href: siteConfig.links.leetcode,
    cta: "LeetCode Profile",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <List />
      </div>
    ),
  },
];

export function Grid() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
