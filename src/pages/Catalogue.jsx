// src/pages/CatalogueBrochure.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Seo from "../components/Seo";
import catalogue1 from "../assets/catalogue2.png";
import catalogue2 from "../assets/catalogue3.png";
import catalogue3 from "../assets/catalogue4.png";
import ShimmerText from "../components/ShimmerText";
import GridBg from "../components/GridBg";
import DecorativeUnderline from "../components/DecorativeUnderline";

export default function Catalogue() {
  const pageRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".panel-fade",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
      );

      gsap.fromTo(
        ".list-row",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.3,
        },
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);


  const products = [
    {
      title: "Couture Lookbooks",
      type: "Digital & High-Finish Print",
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
      desc: "Luxury fashion lookbooks with premium finishes",
    },
    {
      title: "Corporate Portfolios",
      type: "Minimal Archival Binding",
      year: "2025",
      image:catalogue2,
      desc: "Professional corporate identity presentations",
    },
    {
      title: "Artisan Product Catalogs",
      type: "Asymmetric Editorial Layouts",
      year: "2026",
      image:catalogue1,
      desc: "Handcrafted product storytelling",
    },
    {
      title: "Architectural Monographs",
      type: "Hardbound Gallery Editions",
      year: "2024",
      image:catalogue3,
      desc: "Architectural photography & documentation",
    },
  ];

  return (
    <>
      <Seo
        title="Printing Services | Reva Graphics"
        description="High-quality printing services for business cards, brochures, banners, and marketing materials."
      />

      <div className="bg-white min-h-screen">
        <section
          ref={pageRef}
          className="min-h-screen bg-white text-neutral-900 lg:mt-12 mt-4 selection:bg-orange-200"
        >
          <GridBg gridSize={80} lineColor="#F0EDE8" bgColor="#fff">
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Side: Editorial Presentation Anchor */}
            <div className="panel-fade lg:w-[40%]  px-6 py-24 md:px-12 lg:px-16 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen border-b lg:border-b-0 lg:border-r border-neutral-200">
              <div>
                <span className="inline-block uppercase tracking-[0.3em] text-sm text-orange-600 font-semibold mb-3">
                  Printed System Architectures
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-neutral-900">
                Curating page <ShimmerText>hierarchies.</ShimmerText>
                </h1>
              </div>

              <div className="mt-12 lg:mt-0">
                <p className="text-neutral-600 font-light text-xl leading-relaxed max-w-xs">
                  We translate digital ecosystems into heavy, weighted page
                  spreads that express authority and scale.
                </p>
              </div>
            </div>

            {/* Right Side: Interactive Editorial Catalog List */}
            <div className="lg:w-[60%] px-6 py-8 lg:py-24 md:px-12 lg:px-20  relative">
              <div className="space-y-0 relative z-10">
                {products.map((prod, idx) => (
                  <div
                    key={idx}
                    className="list-row group border-b border-neutral-200 py-10 flex flex-col sm:flex-row sm:items-center justify-between backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-orange-300"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-start gap-6">
                      <span className="font-mono text-xs text-neutral-400 pt-1 transition-colors group-hover:text-orange-600">
                        0{idx + 1}
                      </span>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                          {prod.title}
                        </h2>
                        <p className="text-sm text-neutral-500 mt-2 font-light">
                          {prod.type}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:text-right flex items-center justify-between sm:justify-end gap-12">
                      <span className="font-mono text-xs text-neutral-400">
                        {prod.year}
                      </span>
                      <span className="text-neutral-400 group-hover:text-orange-500 transition-colors duration-300 hidden sm:block">
                        →
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Image Preview */}
              <div
                className={`fixed lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 w-80 h-96 lg:h-[420px] bg-white shadow-2xl border border-neutral-200 rounded-2xl overflow-hidden pointer-events-none z-20 transition-all duration-500 ${
                  hoveredIndex !== null
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{
                  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                }}
              >
                {hoveredIndex !== null && (
                  <>
                    <img
                      src={products[hoveredIndex].image}
                      alt={products[hoveredIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-light mb-1">
                        {products[hoveredIndex].title}
                      </h4>
                      <p className="text-sm opacity-90">
                        {products[hoveredIndex].desc}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Minimal Editorial Graphic Breakout */}
              <div className="list-row mt-24 h-[350px] bg-neutral-100 relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200')] bg-cover bg-center opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-lg font-serif font-light mb-1">
                    The Art of Editorial Print
                  </h4>
                  <p className="text-xs opacity-75 font-light">
                    Available for production booking globally.
                  </p>
                </div>
              </div>
            </div>
          </div>

          </GridBg>
        </section>
      </div>
    </>
  );
}
