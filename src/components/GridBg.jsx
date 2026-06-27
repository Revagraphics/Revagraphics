import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GridBg = ({
  children,
  className = '',
  gridSize = 40,
  lineColor = '#4b5563',
  bgColor = '#111827',
  lineOpacity = 0.6,
}) => {
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);

  useEffect(() => {
    // Top Right System
    if (topRightRef.current) {
      const planets = topRightRef.current.querySelectorAll('.planet');

      // Outer Planet
      gsap.to(planets[0], {
        rotation: 360,
        duration: 8,
        ease: "linear",
        repeat: -1,
      });

      // Inner Planet
      gsap.to(planets[1], {
        rotation: 360,
        duration: 12,
        ease: "linear",
        repeat: -1,
      });
    }

    // Bottom Left System
    if (bottomLeftRef.current) {
      const planets = bottomLeftRef.current.querySelectorAll('.planet');

      // Outer Planet
      gsap.to(planets[0], {
        rotation: -360,
        duration: 12,
        ease: "linear",
        repeat: -1,
      });

      // Inner Planet
      gsap.to(planets[1], {
        rotation: -360,
        duration: 8,
        ease: "linear",
        repeat: -1,
      });
    }

    return () => gsap.killTweensOf(".planet");
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

      {/* === Top Right System === */}
      <div className="absolute top-[8rem] right-[5rem] z-10" ref={topRightRef}>
        {/* Central Sun */}
        {/* <div className="absolute w-6 h-6 bg-yellow-400 rounded-full shadow-[0_0_35px_#facc15] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" /> */}

        {/* Outer Orbit Ring */}
        <div className="absolute w-[180px] h-[180px] border border-gray-400/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Inner Orbit Ring */}
        <div className="absolute w-[100px] h-[100px] border border-gray-400/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Outer Planet */}
        <div
          className="planet absolute w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_20px_#67e8f9]"
          style={{
            left: '50%',
            top: 'calc(50% - 90px)',     // Position at top of outer orbit
            transformOrigin: '50% 90px',
          }}
        />

        {/* Inner Planet */}
        <div
          className="planet absolute w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_18px_#60a5fa]"
          style={{
            left: '50%',
            top: 'calc(50% - 50px)',     // Position at top of inner orbit
            transformOrigin: '50% 50px',
          }}
        />
      </div>

      {/* === Bottom Left System === */}
      <div className="absolute bottom-20 left-20 z-10" ref={bottomLeftRef}>
        {/* Central Sun */}
        {/* <div className="absolute w-5 h-5 bg-purple-400 rounded-full shadow-[0_0_30px_#c084fc] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" /> */}

        {/* Outer Orbit Ring */}
        <div className="absolute w-[300px] h-[300px] border border-gray-400/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Inner Orbit Ring */}
        <div className="absolute w-[150px] h-[150px] border border-gray-400/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Outer Planet */}
        <div
          className="planet absolute w-5 h-5 bg-pink-400 rounded-full shadow-[0_0_20px_#f472b6]"
          style={{
            left: '50%',
            top: 'calc(50% - 100px)',
            transformOrigin: '50% 100px',
          }}
        />

        {/* Inner Planet */}
        <div
          className="planet absolute w-4 h-4 bg-violet-400 rounded-full shadow-[0_0_18px_#a78bfa]"
          style={{
            left: '50%',
            top: 'calc(50% - 55px)',
            transformOrigin: '50% 55px',
          }}
        />
      </div>

      {/* Content Area */}
      <div className="relative z-30 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GridBg;