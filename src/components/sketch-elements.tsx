import React from "react";

// Hand-Drawn Cartoon Arrow
export function DoodleArrow({ className = "w-12 h-8 text-[#F05A28]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 74 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 24C18 20 42 16 68 28M68 28L52 14M68 28L54 41"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hand-Drawn Circle / Squiggle Ring
export function DoodleCircle({ className = "w-full h-full text-[#F05A28]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 28C18 14 60 5 105 8C145 10 156 25 142 42C128 58 60 57 25 48C5 42 2 24 35 15"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Hand-Drawn Wobbly Underline
export function DoodleUnderline({ className = "w-full h-3 text-[#F05A28]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 11C35 4 80 14 125 7C155 2 178 12 198 8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Cartoon Sparkle / Star
export function DoodleSparkle({ className = "w-6 h-6 text-[#F05A28]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

// Cartoon Speech Bubble
export function SpeechBubble({
  text,
  className = "",
  tail = "bottom-left",
}: {
  text: string;
  className?: string;
  tail?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}) {
  return (
    <div className={`relative inline-block bg-white border-2 border-zinc-900 rounded-2xl px-3.5 py-1.5 shadow-[3px_3px_0px_0px_#18181B] font-hand font-bold text-xs sm:text-sm text-zinc-900 ${className}`}>
      <span>{text}</span>
      {/* Speech bubble pointer */}
      {tail === "bottom-left" && (
        <span className="absolute -bottom-2.5 left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-zinc-900" />
      )}
      {tail === "bottom-right" && (
        <span className="absolute -bottom-2.5 right-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-zinc-900" />
      )}
    </div>
  );
}

// Washi Tape Strip
export function TapeStrip({
  text,
  className = "w-28 -rotate-2 -top-2 left-1/3",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={`washi-tape px-3 font-mono text-[10px] font-black tracking-wider uppercase text-zinc-800 text-center flex items-center justify-center select-none ${className}`}>
      {text && <span>{text}</span>}
    </div>
  );
}

// Cartoon Bug Doodle with Googly Eyes
export function DoodleBug({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Antennae */}
      <path d="M14 10C12 6 8 5 6 6M26 10C28 6 32 5 34 6" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
      {/* Legs */}
      <path d="M8 20L2 19M8 26L2 28M8 32L3 36M32 20L38 19M32 26L38 28M32 32L37 36" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
      {/* Body */}
      <ellipse cx="20" cy="26" rx="10" ry="11" fill="#F05A28" stroke="#18181B" strokeWidth="2.5" />
      <line x1="20" y1="18" x2="20" y2="37" stroke="#18181B" strokeWidth="2" />
      <circle cx="15" cy="24" r="1.5" fill="#18181B" />
      <circle cx="25" cy="24" r="1.5" fill="#18181B" />
      <circle cx="15" cy="30" r="1.5" fill="#18181B" />
      <circle cx="25" cy="30" r="1.5" fill="#18181B" />
      {/* Head */}
      <ellipse cx="20" cy="14" rx="7" ry="5" fill="#18181B" />
      {/* Eyes */}
      <circle cx="17" cy="13" r="2" fill="#FFFFFF" />
      <circle cx="23" cy="13" r="2" fill="#FFFFFF" />
      <circle cx="17.5" cy="13" r="1" fill="#18181B" />
      <circle cx="23.5" cy="13" r="1" fill="#18181B" />
    </svg>
  );
}

// Cartoon Magnifier Doodle
export function DoodleMagnifier({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="11" fill="#FFF1EB" stroke="#18181B" strokeWidth="3" />
      <path d="M11 12C12 10 15 9 17 10" stroke="#F05A28" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="23.5" y="21.5" width="6" height="15" rx="3" transform="rotate(-45 23.5 21.5)" fill="#F05A28" stroke="#18181B" strokeWidth="3" />
    </svg>
  );
}
