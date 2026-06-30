import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GridBg = ({
  children,
  className = "",
  gridSize = 40,
  lineColor = "#4b5563",
  bgColor = "#111827",
  lineOpacity = 0.6,
}) => {
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);

  useEffect(() => {
    // Top Right System
    if (topRightRef.current) {
      const outerOrbit = topRightRef.current.querySelector(".outer-orbit");
      const innerOrbit = topRightRef.current.querySelector(".inner-orbit");

      // Outer Planet Orbit
      gsap.to(outerOrbit, {
        rotation: 360,
        duration: 8,
        ease: "linear",
        repeat: -1,
      });

      // Inner Planet Orbit
      gsap.to(innerOrbit, {
        rotation: 360,
        duration: 11,
        ease: "linear",
        repeat: -1,
      });
    }

    // Bottom Left System
    if (bottomLeftRef.current) {
      const outerOrbit = bottomLeftRef.current.querySelector(".outer-orbit");
      const innerOrbit = bottomLeftRef.current.querySelector(".inner-orbit");

      gsap.to(outerOrbit, {
        rotation: -360,
        duration: 9,
        ease: "linear",
        repeat: -1,
      });

      gsap.to(innerOrbit, {
        rotation: -360,
        duration: 12,
        ease: "linear",
        repeat: -1,
      });
    }

    return () => gsap.killTweensOf(".orbit-wrapper");
  }, []);

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Grid Lines */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          opacity: lineOpacity,
        }}
      />

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize * 5}px ${gridSize * 5}px`,
        }}
      />

      {/* === Top Right System (Scaled Up) === */}
      <div className="absolute top-[6rem] right-[6rem] z-10" ref={topRightRef}>
        {/* Outer Orbit Ring */}
        <div className="absolute w-[260px] h-[260px] border border-gray-400/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Inner Orbit Ring */}
        <div className="absolute w-[140px] h-[140px] border border-gray-400/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Outer Planet Orbit Wrapper */}
        <div
          className="outer-orbit absolute w-[260px] h-[260px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transformOrigin: "center" }}
        >
          <div
            className="planet absolute w-7 h-7 bg-cyan-400 rounded-full shadow-[0_0_25px_#67e8f9,0_0_50px_#22d3ee]"
            style={{
              left: "50%",
              top: "0%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* Inner Planet Orbit Wrapper */}
        <div
          className="inner-orbit absolute w-[140px] h-[140px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transformOrigin: "center" }}
        >
          <div
            className="planet absolute w-6 h-6 bg-blue-400 rounded-full shadow-[0_0_22px_#60a5fa,0_0_45px_#3b82f6]"
            style={{
              left: "50%",
              top: "0%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>

      {/* === Bottom Left System (Scaled Up) === */}
      <div className="absolute bottom-32 left-24 z-10" ref={bottomLeftRef}>
        {/* Outer Orbit Ring */}
        <div className="absolute w-[380px] h-[380px] border border-gray-400/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Inner Orbit Ring */}
        <div className="absolute w-[190px] h-[190px] border border-gray-400/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Outer Planet Orbit Wrapper */}
        <div
          className="outer-orbit absolute w-[380px] h-[380px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transformOrigin: "center" }}
        >
          <div
            className="planet absolute w-7 h-7 bg-pink-400 rounded-full shadow-[0_0_25px_#f472b6,0_0_50px_#db2777]"
            style={{
              left: "50%",
              top: "0%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* Inner Planet Orbit Wrapper */}
        <div
          className="inner-orbit absolute w-[190px] h-[190px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transformOrigin: "center" }}
        >
          <div
            className="planet absolute w-6 h-6 bg-violet-400 rounded-full shadow-[0_0_22px_#a78bfa,0_0_45px_#7c3aed]"
            style={{
              left: "50%",
              top: "0%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-30 w-full h-full">{children}</div>
    </div>
  );
};

export default GridBg;
