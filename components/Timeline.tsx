import Image from "next/image";
import React from "react";

import { experienceData } from "./data";

import { Timeline } from "@/components/ui/timeline";

export function TimelineComp() {
  const data = experienceData.map((item) => ({
    title: item.title,
    content: (
      <div>
        <div className="dark:text-neutral-200 mb-8">
          <h1 className="font-bold text-md">{item.name}</h1>
          <h2>{item.position}</h2>
          <p>{item.tenure}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image alt={item.name} height={200} src={item.src} width={300} />
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
