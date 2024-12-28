"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

import GradientButton from "./GradientButton";
import { GithubIcon, LinkedInIcon } from "./icons";
import GradualSpacing from "./ui/gradual-spacing";

import { siteConfig } from "@/config/site";

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "theshiveshanand@gmail.com";

    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen gap-4 my-16 md:py-16"
      id="contact"
    >
      <GradualSpacing
        className="font-display text-center text-4xl font-bold -tracking-widest dark:text-white md:text-7xl md:leading-[5rem]"
        text="Get in Touch!"
      />
      <h1 className="text-2xl font-normal my-8 text-center">
        Feel free to reach out for collaboration, opportunities, or just to say
        hi!
      </h1>
      <div className="mt-8">
        <GradientButton
          afterClickIcon={<CheckIcon />}
          afterClickText="Email is Copied!"
          beforeClickIcon={<CopyIcon />}
          beforeClickText="Copy my email address"
          handleClick={handleCopy}
          minWidth="300px"
        />
      </div>
      <div className="flex gap-4 items-center justify-center mt-16">
        <Button
          isExternal
          isIconOnly
          as={Link}
          href={siteConfig.links.linkedin}
          startContent={<LinkedInIcon size={32} />}
          variant="light"
        />
        <Button
          isExternal
          isIconOnly
          as={Link}
          href={siteConfig.links.github}
          startContent={<GithubIcon size={48} />}
          variant="light"
        />
      </div>
    </section>
  );
}
export default Contact;
