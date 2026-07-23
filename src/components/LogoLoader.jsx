import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import revaLogo from "../assets/reva-logo.svg";

const LogoLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.9,
          ease: "power2.inOut",
          delay: 0.5,
          onComplete
        });
      }
    });

    // 1. Background Entrance
    tl.fromTo(containerRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // 2. Main SVG Entrance (Smoothed Scaling)
    tl.fromTo(svgRef.current,
      {
        scale: 0.6, // Start slightly larger so the scaling feels grounded
        opacity: 0,
        rotation: -5,
        y: 40
      },
      {
        scale: 3.3,      // Scale up to 2 (natural size)
        opacity: 1,
        rotation: 0,
        y: 0,
        duration: 1.0, // Longer duration for a premium, deliberate feel
        ease: "power3.out" // Smooth, non-bouncy deceleration
      },
      "-=0.4"
    );

    // 3. Animate individual letter groups
    const letterGroups = svgRef.current?.querySelectorAll('g[id^="w"], g#R, g#E, g#V, g#A, g#g, g#r-2, g#a-2, g#p, g#h, g#i, g#c, g#s');
    if (letterGroups?.length) {
      tl.fromTo(letterGroups, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 1.2,
          ease: "power2.out" // Smoother entrance than back.out
        },
        "-=1.5"
      );
    }

    
    // 4. Animate graphic elements
    const graphicElements = svgRef.current?.querySelectorAll('g[id^="G"], g[id^="I"]');
    if (graphicElements?.length) {
      gsap.fromTo(graphicElements,
        { strokeDashoffset: 800, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2.0,
          ease: "power2.out",
          stagger: 0.1
        },
        "-=1.8"
      );
    }

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      {/* Container removed the breathing animation */}
      <div className="flex flex-col items-center">
        <div className="mb-1 lg:mb-12 relative">
          <img
            ref={svgRef}
            src={revaLogo}
            alt="Reva Logo"
            className="w-[120px] md:w-[520px] lg:w-[520px]  drop-shadow-2xl"
          />
        </div>

        {/* Loading Bar */}
        {/* <div className="h-1 w-64 bg-zinc-200 rounded overflow-hidden">
          <div className="h-full w-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-amber-500 animate-[loading_2.2s_ease-in-out_forwards]" />
        </div> */}

        {/* <p className="text-zinc-400 text-sm mt-3 lg:mt-6 tracking-[4px] uppercase font-medium">
          Crafting Excellence
        </p> */}
      </div>
    </div>
  );
};

export default LogoLoader;