import React from "react";

// 3D Ember QA Shield
export function Shield3D({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldEmberGrad" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6825B" />
          <stop offset="0.6" stopColor="#F05A28" />
          <stop offset="1" stopColor="#D9481F" />
        </linearGradient>
        <filter id="shieldEmberShadow" x="0" y="2" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#F05A28" floodOpacity="0.3" />
        </filter>
        <linearGradient id="shieldEmberGloss" x1="10" y1="4" x2="38" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g filter="url(#shieldEmberShadow)">
        <path
          d="M24 4L38 9V21.5C38 31.8 32 39.5 24 43C16 39.5 10 31.8 10 21.5V9L24 4Z"
          fill="url(#shieldEmberGrad)"
          stroke="#FED7C7"
          strokeWidth="1.5"
        />
        {/* Gloss highlight */}
        <path
          d="M24 6L35 10.5V20C35 27 31 33 24 37V6Z"
          fill="url(#shieldEmberGloss)"
        />
        {/* 3D Checkmark */}
        <path
          d="M18 22.5L22.5 27L30 18"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

// 3D QA Inspection Lens with Graphite handle and Ember reflection
export function Lens3D({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lensRingGraphite" x1="18" y1="4" x2="18" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6825B" />
          <stop offset="1" stopColor="#F05A28" />
        </linearGradient>
        <radialGradient id="lensGlassEmber" cx="18" cy="18" r="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF1EB" stopOpacity="0.9" />
          <stop offset="0.6" stopColor="#FED7C7" stopOpacity="0.4" />
          <stop offset="1" stopColor="#F05A28" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      {/* Handle */}
      <rect
        x="28.5"
        y="25.5"
        width="8"
        height="18"
        rx="4"
        transform="rotate(-45 28.5 25.5)"
        fill="#262626"
        stroke="#525252"
        strokeWidth="1.5"
      />
      {/* Outer Ring */}
      <circle cx="20" cy="20" r="14" fill="url(#lensGlassEmber)" stroke="url(#lensRingGraphite)" strokeWidth="3" />
      {/* Reflection highlight */}
      <path
        d="M13 13C15 10 19 9 22 10"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="25" r="1.5" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

// 3D Bug Trapped in Ember Bubble
export function BugCapsule3D({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bubbleEmberGrad" cx="24" cy="24" r="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF1EB" stopOpacity="0.95" />
          <stop offset="0.6" stopColor="#FED7C7" stopOpacity="0.3" />
          <stop offset="1" stopColor="#F05A28" stopOpacity="0.25" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="18" fill="url(#bubbleEmberGrad)" stroke="#FED7C7" strokeWidth="1.5" />
      {/* 3D Ladybug */}
      <ellipse cx="24" cy="25" rx="7" ry="8" fill="#F05A28" />
      <circle cx="24" cy="18" r="4.5" fill="#171717" />
      <line x1="24" y1="20" x2="24" y2="33" stroke="#B83615" strokeWidth="1.5" />
      <circle cx="21" cy="24" r="1.2" fill="#171717" />
      <circle cx="27" cy="24" r="1.2" fill="#171717" />
      <circle cx="21" cy="28" r="1.2" fill="#171717" />
      <circle cx="27" cy="28" r="1.2" fill="#171717" />
      {/* Bubble gloss */}
      <path d="M16 14C19 11 23 11 26 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 3D Automation Rocket with Ember Thruster
export function Rocket3D({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rocketBodyGraphite" x1="16" y1="6" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.6" stopColor="#F3F4F6" />
          <stop offset="1" stopColor="#E5E5E5" />
        </linearGradient>
      </defs>
      {/* Fins */}
      <path d="M12 28L8 36L18 34L15 26" fill="#F05A28" />
      <path d="M36 28L40 36L30 34L33 26" fill="#F05A28" />
      {/* Thruster Flame */}
      <path d="M21 37L24 45L27 37Z" fill="#F05A28" />
      <path d="M22.5 37L24 42L25.5 37Z" fill="#FDB398" />
      {/* Main Fuselage */}
      <path
        d="M24 4C19 9 16 20 16 34C16 36 32 36 32 34C32 20 29 9 24 4Z"
        fill="url(#rocketBodyGraphite)"
        stroke="#D4D4D4"
        strokeWidth="1.5"
      />
      {/* Porthole */}
      <circle cx="24" cy="18" r="4" fill="#262626" stroke="#171717" strokeWidth="1.5" />
      <circle cx="23" cy="17" r="1.2" fill="#FFFFFF" />
    </svg>
  );
}
