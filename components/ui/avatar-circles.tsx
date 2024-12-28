"use client";

import { Image } from "@nextui-org/image";

import { cn } from "@/lib/utils";
import { Tooltip } from "@nextui-org/tooltip";

interface Avatar {
  imageUrl: string;
  name: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-2 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          alt={`Avatar ${index + 1}`}
          className="h-10 w-10 bg-gray-100"
          height={35}
          radius="full"
          src={url.imageUrl}
          width={35}
        />
      ))}
      {(numPeople ?? 0) > 0 && (
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          type="button"
        >
          +{numPeople}
        </button>
      )}
    </div>
  );
};

export default AvatarCircles;
