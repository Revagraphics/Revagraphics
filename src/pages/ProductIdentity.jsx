import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from "../components/Navbar";
import Video from "../assets/video-slider.mp4";
import Footer from "../components/Footer";
import ProjectProcess from "../components/ProjectProcess";
import ImageSlider from "../components/ImageSlider";
import PaymentSection from "../components/PaymentSection";
import Instagram from "../components/Instagram";
import bg from "../assets/about.webp";
import content from "../assets/content.png";

const ProductIdentity = () => {
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  // Replace these with your own high-quality project/brand images (square recommended)
  const popupImages = [
    bg,
    content,
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=600&fit=crop",
  ];

  const [floatingImages, setFloatingImages] = useState([]);

  useGSAP(() => {}, { scope: containerRef });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const randomSrc = popupImages[Math.floor(Math.random() * popupImages.length)];

      // Very small deviation - change multiplier if you want more spread
      const deviation = 20; // pixels (was 90 before - now much tighter to cursor)
      const offsetX = (Math.random() - 0.5) * deviation;
      const offsetY = (Math.random() - 0.5) * deviation;

      const size = 180 + Math.random() * 70;        // 180px - 250px
      const rotation = (Math.random() - 0.5) * 18;  // subtle rotation

      const newImage = {
        id: Date.now() + Math.random(),
        src: randomSrc,
        baseX: mouseX + offsetX,   // final target position
        baseY: mouseY + offsetY,
        size,
        rotation,
      };

      setFloatingImages((prev) => [...prev, newImage]);

      // GSAP entrance animation (very smooth pop)
      requestAnimationFrame(() => {
        const el = document.getElementById(`float-${newImage.id}`);
        if (!el) return;

        gsap.fromTo(
          el,
          {
            scale: 0.2,
            opacity: 0,
            rotation: rotation * 0.4,
            x: mouseX + offsetX * 0.6,   // start slightly closer to cursor
            y: mouseY + offsetY * 0.6,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: rotation,
            x: newImage.baseX,
            y: newImage.baseY,
            duration: 0.55,
            ease: "back.out(1.6)",   // bouncy but elegant
          }
        );
      });

      // Smooth exit animation + remove
      setTimeout(() => {
        const el = document.getElementById(`float-${newImage.id}`);
        if (el) {
          gsap.to(el, {
            scale: 0.65,
            opacity: 0,
            rotation: rotation * 1.4,
            duration: 0.45,
            ease: "power2.in",
            onComplete: () => {
              setFloatingImages((prev) =>
                prev.filter((img) => img.id !== newImage.id)
              );
            },
          });
        }
      }, 1550); // how long each image stays visible
    }, 80); // spawn delay - feels very responsive
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div
        ref={containerRef}
        className="relative h-screen w-full bg-gray-50 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video + Overlays (unchanged) */}
        <video
          src={Video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white/60 to-gray-100/80"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10 pointer-events-none">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-7xl font-bold  text-gray-900 leading-tight tracking-tight mb-6">
              We build a unique Brand
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
                for attract the customers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10">
              We craft stunning digital experiences that captivate and inspire
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition">
                Explore Our Work
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition">
                Talk To Us
              </button>
            </div>
          </div>
        </div>

        {/* Floating Images - GSAP controlled */}
        {floatingImages.map((img) => (
          <div
            key={img.id}
            id={`float-${img.id}`}
            className="absolute pointer-events-none z-50"
            style={{
              left: 0,
              top: 0,
              willChange: "transform",   // performance boost
            }}
          >
            <img
              src={img.src}
              alt="floating"
              className="rounded-2xl  border-[2px] border-orange-500 shadow-2xl ring-1 ring-white/60 object-cover"
              style={{
                width: `${img.size}px`,
                height: `${img.size}px`,
              }}
            />
          </div>
        ))}

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <section className="min-h-[100vh] lg:pt-24 pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter text-black">
              We offer Brand Identity Designing Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Creating meaningful brands that connect, inspire, and stand the
              test of time.
            </p>
          </div>

          {/* Two Column Content */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Visual Identity */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-px h-10 bg-black"></div>
                <h2 className="uppercase text-sm tracking-[2px] font-medium text-gray-500">
                  Brand Strategy & Visual Identity
                </h2>
              </div>

              <p className="text-[17px] leading-relaxed hover:text-[orange] hover:stroke-[#000] text-gray-700">
                The most meaningful brands are those that are rich with meaning.
                They push us to think, feel, and behave in new ways. We design
                amazing brands that express your mission — from naming and
                messaging to visual identities and advertising.
              </p>

              <p className="text-[17px] leading-relaxed hover:text-[orange] hover:stroke-[#000] text-gray-700">
                We’ll work together to create a story that captivates and drives
                your audience. A strong visual identity conveys the spirit of
                your company. From logos and typefaces to graphic treatments and
                illustrations, we craft every element so your brand stands out
                with clarity and confidence.
              </p>
            </div>

            {/* Right Column - Advertising & Culture */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-px h-10 bg-black"></div>
                <h2 className="uppercase text-sm tracking-[2px] font-medium text-gray-500">
                  Creative Advertising & Brand Culture
                </h2>
              </div>

              <p className="text-[17px] leading-relaxed hover:text-[orange] hover:stroke-[#000] text-gray-700">
                We create one-of-a-kind creative that sets you apart — whether
                it’s for print, direct mail, or digital advertising. Our
                strategists help you choose the optimal advertising mix and
                manage campaigns that deliver maximum impact within your budget.
              </p>

              <p className="text-[17px] leading-relaxed hover:text-[orange] hover:stroke-[#000] text-gray-700">
                Our award-winning creative sparks an emotional reaction. It
                brings your brand story to life, captivates attention, engages
                the senses, and transforms perspectives. We develop commercials
                that create memorable experiences across any medium.
              </p>

              <p className="text-[17px] leading-relaxed hover:text-[orange] hover:stroke-[#000] text-gray-700">
                When a brand is deeply ingrained in company culture, you can
                feel it. We help you build excitement and stewardship so your
                team becomes true brand ambassadors.
              </p>
            </div>
          </div>
        </div>
      </section>


      <ImageSlider />
      <ProjectProcess />
      <PaymentSection />
      <Instagram />
      <Footer />
    </div>
  );
};

export default ProductIdentity;


