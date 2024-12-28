import { Image } from "@nextui-org/image";

import Marquee from "./ui/marquee";
import { skills } from "./data";

import { cn } from "@/lib/utils";

const SkillCard = ({
  name,
  icon,
  level,
}: {
  name: string;
  icon: string;
  level: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          isBlurred
          isZoomed
          alt={name}
          className="bg-white aspect-square"
          height={50}
          radius="full"
          src={icon}
          width={50}
        />
        <h3 className="text-lg font-semibold dark:text-white">{name}</h3>
      </div>
      <div className="mt-4">
        <div className="text-sm dark:text-white">
          <span className="font-medium">Proficiency:</span> {level}
        </div>
      </div>
    </div>
  );
};

export function MarqueeComp() {
  return (
    <Marquee pauseOnHover className="absolute top-10 [--duration:20s]">
      {skills.map((skill, idx) => (
        <SkillCard
          key={idx}
          icon={skill.icon}
          level={skill.level}
          name={skill.name}
        />
      ))}
    </Marquee>
  );
}
