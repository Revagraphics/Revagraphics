import { useEffect, useRef } from "react";


import img1 from "../assets/workflow-icon1.webp";
import img2 from "../assets/workflow-icon2.webp";
import img3 from "../assets/workflow-icon3.webp";
import img4 from "../assets/workflow-icon5.webp";
import img5 from "../assets/workflow-icon6.webp";
import img6 from "../assets/workflow-icon7.webp";
import img7 from "../assets/workflow-icon9.webp";
import img8 from "../assets/workflow-icon10.webp";


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




  return (
    <section className="process_section bg-[#f2fff5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="process_heading text-[#313131] text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-16 md:mb-20">
          From Concept to Completion
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {processes.map((process) => (
            <div
              key={process.id}
              className="step group
                bg-white/80 backdrop-blur-md 
                border border-orange-400/60 
                rounded-3xl 
                p-10 
                shadow-[0_10px_40px_rgba(0,0,0,0.07)]
                hover:shadow-[0_25px_70px_rgba(249,115,22,0.15)]
                hover:-translate-y-3 
                transition-all duration-500
                flex flex-col items-center text-center
                min-h-[380px]"
            >
              {/* Large Icon */}
              <div className="mb-8 p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                <img
                  src={process.icon}
                  alt={process.title}
                  className="w-28 h-28 md:w-32 md:h-32 object-contain"
                />
              </div>

              {/* Step Number */}
              <div className="text-6xl font-bold text-orange-500 mb-4 tracking-tighter">
                {process.num}
              </div>

              {/* Title */}
              <div className="text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
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