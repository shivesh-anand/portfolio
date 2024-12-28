"use client";

import { Image } from "@nextui-org/image";

import { AnimatedList } from "./ui/animated-list";

import { cn } from "@/lib/utils";

interface Item {
  name: string;
  description: string;
  icon: string;
  time: string;
}

let notifications = [
  {
    name: "Leetcode",
    description: "400+ Problems Solved. ",
    time: "1500+",

    icon: "https://res.cloudinary.com/dxiy3slnd/image/upload/v1735029604/portfolio/leetcode_nkzgrc.svg",
  },
  {
    name: "Geeks for Geeks",
    description: "400+ Problems Solved. ",
    time: " ",
    icon: "https://res.cloudinary.com/dxiy3slnd/image/upload/v1735029611/portfolio/icons8-geeksforgeeks-96_i8wctz.svg",
  },
  {
    name: "Codeforces",
    description: "Pupil",
    time: "1369",
    icon: "https://res.cloudinary.com/dxiy3slnd/image/upload/v1735029604/portfolio/code-forces_y1dzh4.svg",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-500 ease-in-out hover:scale-[103%]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl">
          <Image
            alt={name}
            className="bg-white aspect-square"
            height={40}
            src={icon}
            width={40}
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function List({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
