import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/workflow-icon1.webp";
import img2 from "../assets/workflow-icon2.webp";
import img3 from "../assets/workflow-icon3.webp";
import img4 from "../assets/workflow-icon5.webp";
import img5 from "../assets/workflow-icon6.webp";
import img6 from "../assets/workflow-icon7.webp";
import img7 from "../assets/workflow-icon9.webp";
import img8 from "../assets/workflow-icon10.webp";

gsap.registerPlugin(ScrollTrigger);

const ProjectProcess = () => {
  const processes = [
    { id: 1, num: 1, icon: img1, title: "Project Brief" },
    { id: 2, num: 2, icon: img2, title: "50% Payment – Advance" },
    { id: 3, num: 3, icon: img3, title: "Research Work" },
    { id: 4, num: 4, icon: img4, title: "Design Creation" },
    { id: 5, num: 5, icon: img5, title: "Initial Presentation" },
    { id: 6, num: 6, icon: img6, title: "Client Feedback" },
    { id: 7, num: 7, icon: img7, title: "Final Presentation" },
    { id: 8, num: 8, icon: img8, title: "50% Remaining" },
  ];

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // ❌ Disable GSAP on mobile
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const totalWidth = track.scrollWidth - window.innerWidth;
      const path = lineRef.current;

      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: true,
        },
      });

      gsap.to(track, {
        x: () => -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".process_heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process_section bg-[#f2fff5] py-16 md:py-0">
      <div
        className="process_wrapper md:h-screen flex flex-col md:flex-row items-center relative"
        ref={containerRef}
      >
        {/* ✅ HEADING */}
        <h1
          className="process_heading 
          text-[#313131] 
          text-2xl sm:text-3xl md:text-5xl 
          font-semibold 
          text-center md:text-left
          mb-10 md:mb-0
          md:absolute md:top-[15%] md:left-[20%] md:-translate-x-1/2 z-20"
        >
          From Concept to Completion
        </h1>

        {/* ✅ SVG LINE (HIDDEN ON SMALL) */}
        <svg
          className="hidden md:block absolute top-1/2 left-0 w-full h-[250px] pointer-events-none"
          viewBox="0 0 2000 300"
          preserveAspectRatio="none"
        >
          <path
            ref={lineRef}
            d="M 0 150 
               Q 200 50, 400 150 
               T 800 150 
               T 1200 150 
               T 1600 150 
               T 2000 150"
            stroke="#000"
            strokeWidth="2"
            fill="none"
            strokeDasharray="2 10"
          />
        </svg>

        {/* ✅ CARDS */}
        <div
          ref={trackRef}
          className="
            process_track 
            flex 
            flex-col md:flex-row 
            gap-8 md:gap-[60px] 
            px-6 md:px-[10vw]
            w-full
          "
        >
          {processes.map((process) => (
            <div
              key={process.id}
              className="
              step
              w-full md:min-w-[28vw]
              h-auto md:h-[420px]
              p-8

              bg-white/70 backdrop-blur-md
              border border-orange-500

              rounded-3xl
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]

              flex flex-col items-center justify-center
              text-center

              transition-all duration-300
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              hover:-translate-y-2"
            >
              <img
                src={process.icon}
                alt={process.title}
                className="
                w-20 h-20 md:w-20 md:h-20
                mb-6
                p-3
                bg-blue-50
                rounded-full"
              />

              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                {process.num}
              </div>

              <div className="text-base md:text-xl px-6 text-gray-700 font-medium leading-snug">
                {process.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectProcess;
