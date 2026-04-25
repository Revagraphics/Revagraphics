import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

// Import your images
import campaign from "../assets/campaign.webp";
import website from "../assets/banglore.jpg";
import branding from "../assets/branding.webp";
import brochure from "../assets/brochure.jpg";
import testimonial from "../assets/testimonial.webp";
import packaging from "../assets/product-packaging.webp";

const works = [
  { id: 1, image: campaign, title: "Campaign" },
  { id: 2, image: website, title: "Web Design" },
  { id: 3, image: branding, title: "Branding" },
  { id: 4, image: brochure, title: "Brochure" },
  { id: 5, image: testimonial, title: "Testimonials" },
  { id: 6, image: packaging, title: "Product Packaging" },
];

gsap.registerPlugin(ScrollTrigger);

export default function  SelectedWork() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Get card width dynamically from the first card
    const firstCard = track.children[0];
    if (!firstCard) return;

    const gap = 24; // gap-6 = 24px
    const cardWidth = firstCard.offsetWidth + gap;
    const totalWidth = works.length * cardWidth;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 35,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => Number.parseFloat(x) % -totalWidth),
      },
    });

    const pause = () => tweenRef.current?.pause();
    const play = () => tweenRef.current?.play();

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      tweenRef.current?.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
    };
  }, []);

  // Triple the works array for a smooth seamless loop
  const loopedWorks = [...works, ...works, ...works];

  return (
    <section className="bg-gray-50 py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-tight">
            Our <span className="text-orange-500">Selected</span> Work
          </h2>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-gray-500 hover:text-orange-500 transition-colors duration-300 self-start sm:self-auto"
          >
            View All Projects<span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* Scrolling Track */}
        <div className="relative">

          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />

          <div
            ref={trackRef}
            className="flex gap-5 sm:gap-6 will-change-transform"
          >
            {loopedWorks.map((work, i) => (
              <div
                key={`${work.id}-${i}`}
                className="flex-shrink-0 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[340px] group cursor-pointer"
              >
                {/* Image */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md aspect-[4/3] bg-gray-200">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />
                </div>

                {/* Title */}
                <p className="mt-3 sm:mt-4 text-center text-base sm:text-lg lg:text-xl font-medium text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                  {work.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button — bottom, centered (mobile) */}
        <div className="flex justify-center mt-10 sm:mt-14 sm:hidden">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 border border-gray-300 hover:border-orange-400 rounded-2xl"
          >
            View All Projects<span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

