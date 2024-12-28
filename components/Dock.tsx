"use client";

import { Tooltip } from "@nextui-org/tooltip";
import { Briefcase, Home, Mail, Rocket, User } from "lucide-react";

import { Dock, DockIcon } from "./ui/dock";

export function DockComponent() {
  const onScrollTo = (section: string) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 text-center py-4">
      <Dock>
        <DockIcon onClick={() => onScrollTo("hero")}>
          <Tooltip showArrow color="foreground" content="Home">
            <Home />
          </Tooltip>
        </DockIcon>
        <DockIcon onClick={() => onScrollTo("about")}>
          <Tooltip showArrow color="foreground" content="About">
            <User />
          </Tooltip>
        </DockIcon>
        <DockIcon onClick={() => onScrollTo("experience")}>
          <Tooltip showArrow color="foreground" content="Experience">
            <Briefcase />
          </Tooltip>
        </DockIcon>
        <DockIcon onClick={() => onScrollTo("projects")}>
          <Tooltip showArrow color="foreground" content="Projects">
            <Rocket />
          </Tooltip>
        </DockIcon>
        <DockIcon onClick={() => onScrollTo("contact")}>
          <Tooltip showArrow color="foreground" content="Contact">
            <Mail />
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
