import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { FaGraduationCap, FaHeartbeat,FaAtom, FaFlask, FaLaptopCode, FaShoppingCart , FaTshirt ,FaVials   } from "react-icons/fa";

import ShimmerText from "./ShimmerText";

const sectors = [
  { id: 1, img: FaHeartbeat, category: "Health" },
  { id: 2, img: FaGraduationCap, category: "Education" },
  { id: 3, img: FaAtom, category: "Science" },
  { id: 4, img: FaGraduationCap, category: "portfolio" },
  { id: 6, img: FaLaptopCode, category: "chemicals" },
  { id: 7, img: FaShoppingCart , category: "e-commerce" },
  { id: 8, img: FaTshirt , category: "clothing" },
  { id: 9, img: FaLaptopCode , category: "tech" },
];

const logos = [
  { id: 1, img: FaHeartbeat, category: "Health" },
  { id: 2, img: FaGraduationCap, category: "Education" },
  { id: 3, img: FaAtom, category: "Science" },
  { id: 4, img: FaGraduationCap, category: "portfolio" },
  { id: 5, img: FaLaptopCode, category: "chemicals" },
  { id: 6, img: FaShoppingCart, category: "e-commerce" },
  { id: 7, img: FaTshirt, category: "clothing" },
  { id: 8, img: FaLaptopCode, category: "tech" },
];

const AllSector = () => {
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);

  useEffect(() => {
    // First Marquee - Left to Right
    const marquee1 = marquee1Ref.current;
    if (marquee1) {
      gsap.to(marquee1, {
        x: "-50%",
        duration: 35,
        ease: "linear",
        repeat: -1,
      });
    }

    // Second Marquee - Right to Left
    const marquee2 = marquee2Ref.current;
    if (marquee2) {
      gsap.set(marquee2, { x: "-50%" });
      gsap.to(marquee2, {
        x: "0%",
        duration: 28,
        ease: "linear",
        repeat: -1,
      });
    }

    return () => {
      gsap.killTweensOf([marquee1, marquee2]);
    };
  }, []);

  // Helper function to dynamically render either a React Icon or an Image
  const renderVisualAsset = (Asset) => {
    if (typeof Asset === "string") {
      return (
        <img
          src={Asset}
          alt="Sector logo"
          className="w-10 h-10 object-contain text-orange-500"
        />
      );
    }
    // If it's a React Icon Component component, render it with styling classes
    const IconComponent = Asset;
    return <IconComponent className="w-8 h-8 text-orange-500" />;
  };

  return (
    <section className="mt-16 overflow-hidden py-6 sm:py-4 ">
      <div className="max-w-[90vw] mx-auto px-6">
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-zinc-900 mb-12">
          <ShimmerText>All Sectors</ShimmerText>
        </h2>

        {/* First Marquee - Row 1 (Displaying sectors array with mixed Icons/Images) */}
        <div className="overflow-hidden mb-10">
          <div ref={marquee1Ref} className="flex gap-6 w-max">
            {[...sectors, ...sectors].map((item, index) => (
              <div
                key={`sector1-${item.id}-${index}`}
                className="flex items-center gap-4 min-w-[240px] h-24 px-5 rounded-2xl
                    border border-orange-200 bg-white/80 backdrop-blur-md
                    shadow-sm hover:shadow-lg hover:border-orange-400
                    transition-all duration-300 shrink-0"
              >
                {/* Visual Container */}
                <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  {renderVisualAsset(item.img)}
                </div>

                {/* Category Text */}
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee - Row 2 (Displaying logos array with image badges) */}
        <div className="overflow-hidden mb-10">
          <div ref={marquee2Ref} className="flex gap-6 w-max">
            {[...logos, ...logos].map((item, index) => (
              <div
                key={`sector2-${item.id}-${index}`}
                className="flex items-center gap-4 min-w-[240px] h-24 px-5 rounded-2xl
                    border border-orange-200 bg-white/80 backdrop-blur-md
                    shadow-sm hover:shadow-lg hover:border-orange-400
                    transition-all duration-300 shrink-0"
              >
                {/* Visual Container */}
                <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  {renderVisualAsset(item.img)}
                </div>

                {/* Category Text */}
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSector;