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

export default function SelectedWork()  {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate the items for seamless infinite loop
    const originalHTML = track.innerHTML;
    track.innerHTML += originalHTML;

    const cards = track.children;
    const cardWidth = 340; // approx width of one card + gap
    const totalWidth = cards.length / 2 * (cardWidth + 30); // half because we duplicated

    const tween = gsap.to(track, {
      x: () => -totalWidth,
      duration: 40,           // Adjust speed here (higher = slower)
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
      },
    });

    // Optional: Pause on hover
    const pause = () => tween.pause();
    const play = () => tween.play();

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <section className="bg-gray-50 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5" ref={containerRef}>
        {/* Heading */}
        <div className="flex justify-center md:justify-start mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight">
            Our <span className="text-violet-600">Selected</span> Work
          </h2>
        </div>

        {/* GSAP Horizontal Scrolling Container */}
        <div className="relative">
          <div 
            ref={trackRef}
            className="flex gap-8 will-change-transform"
          >
            {works.concat(works).map((work, index) => (   // Double for seamless loop
              <div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[340px] group cursor-pointer"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-200">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="mt-6 text-center text-xl font-medium text-gray-800">
                  {work.title}
                </p>
              </div>
            ))}
          </div>

          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-gray-700 hover:text-violet-600 transition-all duration-300 border border-gray-300 hover:border-violet-600 rounded-2xl"
          >
            View All Projects
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

