"use client";
import React, { useState } from "react";

function GradientButton({
  handleClick,
  beforeClickIcon,
  afterClickIcon,
  beforeClickText,
  afterClickText,
  minWidth,
}: {
  handleClick?: () => void;
  beforeClickIcon: React.ReactNode;
  afterClickIcon: React.ReactNode;
  beforeClickText: string;
  afterClickText: string;
  minWidth: string;
}) {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    setIsClicked(true);
    if (handleClick) handleClick();
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <div>
      <button
        className="justify-center items-center text-center bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
        style={{ minWidth }}
        onClick={onClick}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="text-lg md:text-md relative flex items-center justify-center space-x-2 z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
          <span>{isClicked ? afterClickText : beforeClickText}</span>
          <span className="flex items-center justify-center rounded-full p-1">
            {isClicked ? afterClickIcon : beforeClickIcon}
          </span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </div>
  );
}

export default GradientButton;
