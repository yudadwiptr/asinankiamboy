import React from "react";

/**
 * Renders the signature solid outer viewport border (20px-24px on desktop, 10px on mobile)
 * with true inverted `rounded-3xl` inner corners for a modern editorial showcase look.
 */
export default function ViewportFrame() {
  const cornerSvg = (rotation) => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="block w-5 h-5 sm:w-7 sm:h-7 text-[#FAF7F2]"
    >
      <path d="M0 0H28C12.536 0 0 12.536 0 28V0Z" fill="currentColor" />
    </svg>
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
    >
      {/* Solid 4-edge frame */}
      <div className="absolute inset-x-0 top-0 h-2.5 sm:h-5 lg:h-6 bg-[#FAF7F2]" />
      <div className="absolute inset-x-0 bottom-0 h-2.5 sm:h-5 lg:h-6 bg-[#FAF7F2]" />
      <div className="absolute inset-y-0 left-0 w-2.5 sm:w-5 lg:w-6 bg-[#FAF7F2]" />
      <div className="absolute inset-y-0 right-0 w-2.5 sm:w-5 lg:w-6 bg-[#FAF7F2]" />

      {/* Four rounded-3xl inner showcase corners */}
      <div className="absolute top-2.5 left-2.5 sm:top-5 sm:left-5 lg:top-6 lg:left-6">
        {cornerSvg(0)}
      </div>
      <div className="absolute top-2.5 right-2.5 sm:top-5 sm:right-5 lg:top-6 lg:right-6">
        {cornerSvg(90)}
      </div>
      <div className="absolute bottom-2.5 right-2.5 sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6">
        {cornerSvg(180)}
      </div>
      <div className="absolute bottom-2.5 left-2.5 sm:bottom-5 sm:left-5 lg:bottom-6 lg:left-6">
        {cornerSvg(270)}
      </div>
    </div>
  );
}

