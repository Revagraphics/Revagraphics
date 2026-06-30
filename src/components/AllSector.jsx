import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DecorativeUnderline from "../components/DecorativeUnderline";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaAtom,
  FaFlask,
  FaLaptopCode,
  FaShoppingCart,
  FaBeer,
  FaTshirt,
  FaVials,
  FaUtensils,
  FaHandsHelping,
  FaPalette,
  FaCar,
  FaDraftingCompass,
  FaSchool,
  FaHotel,
  FaBuilding,
  FaCouch,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaIndustry,
  FaSpa,
  FaGem,
  FaTruck,
  FaPlaceOfWorship,
} from "react-icons/fa";

import ShimmerText from "./ShimmerText";

const sectors = [
  { id: 1, img: FaUtensils, category: "Restaurants", color: "#F97316" },
  { id: 2, img: FaGraduationCap, category: "Education", color: "#3B82F6" },
  { id: 3, img: FaFlask, category: "Science", color: "#8B5CF6" },
  { id: 4, img: FaHandsHelping, category: "NGOs", color: "#14B8A6" },
  { id: 5, img: FaIndustry, category: "Chemicals", color: "#22C55E" },
  { id: 6, img: FaSchool, category: "Schools", color: "#0EA5E9" },
  { id: 7, img: FaCar, category: "Automobile", color: "#EF4444" },
  { id: 8, img: FaTshirt, category: "Clothing", color: "#EC4899" },
  { id: 9, img: FaLaptopCode, category: "Technology", color: "#06B6D4" },
  { id: 10, img: FaPalette, category: "Textiles", color: "#A855F7" },
  {
    id: 11,
    img: FaDraftingCompass,
    category: "Architecture",
    color: "#F59E0B",
  },
];

const logos = [
  { id: 1, img: FaHotel, category: "Hotels & Resorts", color: "#2563EB" },
  { id: 2, img: FaHeartbeat, category: "Healthcare", color: "#EF4444" },
  { id: 3, img: FaBuilding, category: "Real Estate", color: "#F59E0B" },
  {
    id: 4,
    img: FaPlaceOfWorship,
    category: "Religious & Cultural Organizations",
    color: "#8B5CF6",
  },
  { id: 5, img: FaCouch, category: "Interior Design Firms", color: "#14B8A6" },
  {
    id: 6,
    img: FaCalendarAlt,
    category: "Event Management",
    color: "#10B981",
  },
  {
    id: 7,
    img: FaChalkboardTeacher,
    category: "Coaching Institutes",
    color: "#3B82F6",
  },
  {
    id: 8,
    img: FaIndustry,
    category: "Manufacturing",
    color: "#6B7280",
  },
  {
    id: 9,
    img: FaSpa,
    category: "Salon & Wellness",
    color: "#EC4899",
  },
  {
    id: 10,
    img: FaGem,
    category: "Jewellery & Luxury Brands",
    color: "#FACC15",
  },
  {
    id: 11,
    img: FaTruck,
    category: "Logistics & Transportation",
    color: "#06B6D4",
  },
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
      <div className="max-w-full mx-auto px-6">
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-zinc-900">
          <ShimmerText>All Sectors</ShimmerText>
        </h2>
        <DecorativeUnderline
          width="280px" // Adjust width as needed
          className="mb-4 mx-auto"
          centerColor="#3B82F6" // Optional: change blue color
        />

        {/* First Marquee - Row 1 (Displaying sectors array with mixed Icons/Images) */}
        <div className="overflow-hidden mb-10">
          <div ref={marquee1Ref} className="flex gap-6 w-max">
            {[...sectors, ...sectors].map((item, index) => (
              <div
                key={`sector1-${item.id}-${index}`}
                className="flex items-center gap-4 min-w-[240px] h-16 px-5 rounded-2xl
                    border border-orange-200 bg-white/80 backdrop-blur-md
                    shadow-sm hover:shadow-lg hover:border-orange-400
                    transition-all duration-300 shrink-0"
              >
                {/* Visual Container */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ color: item.color }}
                >
                  {renderVisualAsset(item.img)}
                </div>

                {/* Category Text */}
                <div className="flex flex-col">
                  <span
                    className="text-xs uppercase tracking-widest  font-semibold"
                    style={{ color: item.color }}
                  >
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
                className="flex items-center gap-4 min-w-[240px] h-16 px-5 rounded-2xl
                    border border-orange-200 bg-white/80 backdrop-blur-md
                    shadow-sm hover:shadow-lg hover:border-orange-400
                    transition-all duration-300 shrink-0"
              >
                {/* Visual Container */}
                <div
                  className="w-14 h-14 rounded-xl  flex items-center justify-center shrink-0"
                  style={{ color: item.color }}
                >
                  {renderVisualAsset(item.img)}
                </div>

                {/* Category Text */}
                <div className="flex flex-col">
                  <span
                    className="text-xs uppercase tracking-widest  font-semibold"
                    style={{ color: item.color }}
                  >
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
