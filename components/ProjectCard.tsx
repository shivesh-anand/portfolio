"use client";
import { Image } from "@nextui-org/image";

import { TechStack } from "./TechStack";
import { PinContainer } from "./ui/3d-pin";

export default function ProjectCard({
  title,
  href,
  src,
  name,
  description,
  techStack,
}: {
  title: string;
  href: string;
  src: string;
  name: string;
  description: string;
  techStack: { imageUrl: string; name: string }[];
}) {
  return (
    <div className="w-full flex items-center justify-center my-16">
      <PinContainer href={href} title={title}>
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[23rem] h-[23rem]">
          <Image
            alt="NextUI hero Image"
            className="mb-4"
            height={200}
            src={src}
            width={400}
          />
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{description}</span>
          </div>
          <div className="py-4">
            <TechStack techStack={techStack} />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
