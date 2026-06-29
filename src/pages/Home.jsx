import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewSlider from "../components/ReviewSlider";
import ServicesSection from "../components/ServicesSection";
import SelectedWorkSection from "../components/SelectedWorkSection";
import SkillsTabs from "../components/SkillTabs";
import Feedback from "../components/Feedback";
import StarRating from "../components/StarRating";
import DecorativeUnderline from "../components/DecorativeUnderline";

import { Link } from "react-router-dom";
import gsap from "gsap";
import Seo from "../components/Seo";
import HeroImg from "../assets/hero1.png";
import logo1 from "../assets/customer-logo-1.png";
import logo2 from "../assets/customer-logo-2.png";
import logo3 from "../assets/customer-logo-3.png";
import logo4 from "../assets/customer-logo-4.png";
import logo6 from "../assets/customer-logo-6.png";
import logo7 from "../assets/customer-logo-7.png";
import logo8 from "../assets/FRENZY-01.png";
import logo9 from "../assets/customer-logo-10.png";
import badge1 from "../assets/badge-1.png";
import badge2 from "../assets/badge22.png";
import badge3 from "../assets/badge-3.png";
import ShimmerText from "../components/ShimmerText";
import GridBg from "../components/GridBg";
import AllSector from "../components/AllSector";

import {
  FaBriefcase,
  FaUsers,
  FaHandshake,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Home() {
  const textRef = useRef(null);
  const logosRef = useRef(null);

  const phrases = [
    "India",
    "Australia",
    "Singapore",
    "United kingdom",
    // "Digital Strategy.",
  ];

  /* ================= GSAP ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      phrases.forEach((word) => {
        tl.to(textRef.current, {
          opacity: 0,
          y: -15,
          duration: 0.4,
          onComplete: () => (textRef.current.innerText = word),
        })
          .to(textRef.current, { opacity: 1, y: 0, duration: 0.5 })
          .to({}, { duration: 1 });
      });

      gsap.from(".hero-animate", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

      const totalWidth = logosRef.current.scrollWidth / 2;

      gsap.to(logosRef.current, {
        x: -totalWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const logos = [
    { id: 1, logo: logo1 },
    { id: 2, logo: logo2 },
    { id: 3, logo: logo3 },
    { id: 4, logo: logo4 },
    { id: 6, logo: logo6 },
    { id: 7, logo: logo7 },
    { id: 8, logo: logo8 },
    { id: 9, logo: logo9 },
  ];

  // stat boxes style
  const StatCard = ({
    title,
    value,
    desc,
    icon: Icon,
    color = "#FF9800",
    color2 = "#E91E63",
  }) => (
    <div className="group relative rounded-3xl border border-orange-100 bg-white/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden h-full flex flex-col">
      {/* Vertical Gradient Accent Line */}
      <div
        className="absolute top-0 left-0 w-2 md:w-3 h-full rounded-tl-3xl"
        style={{
          background: `linear-gradient(to bottom, ${color}, ${color2})`,
        }}
      />

      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="flex shrink-0 aspect-square w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500 stroke-[1.5]" />
        </div>

        {/* Title + Number */}
        <div className="mt-6 flex flex-col">
          <span className="text-orange-500 text-xs sm:text-sm font-bold tracking-[0.125em] uppercase">
            {title}
          </span>

          <h3 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">
            {value}
          </h3>
        </div>

        {/* Description - Under the Icon (as requested) */}
        <div className="mt-auto pt-6 sm:pt-8">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Seo
        title="Reva Graphics | Creative Design & Digital Solutions"
        description="We provide branding, marketing, and digital solutions to grow your business."
      />

      <div className="bg-white overflow-hidden">
        <Navbar />

        {/* ================= HERO ================= */}
        <main className="mt-28 px-4 flex item-center lg:h-[70vh] max-w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* TEXT */}
            <section className="hero-animate flex-1 text-center lg:text-left">
              <h1 className="text-4xl text-[#30303c] sm:text-2xl lg:text-6xl font-poppins font-bold leading-tight">
                Expert Branding & Web{" "}
                <span className="">Development Solutions Across</span>{" "}
                <span
                  ref={textRef}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#E91E63]"
                >
                  Branding.
                </span>
              </h1>

              <Link
                to="/contact"
                className="inline-block mt-8  bg-gradient-to-r from-[#FF9800] to-[#E91E63] text-white px-8 py-3 rounded-full"
              >
                Let's Talk
              </Link>
            </section>

            {/* IMAGE */}
            <section className="hero-animate flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={HeroImg}
                  alt="hero"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                />
              </div>
            </section>
          </div>
        </main>

        {/* ================= CLIENT LOGOS ================= */}
        <section className="mt-16 overflow-hidden">
          <div ref={logosRef} className="flex gap-8 w-max items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="w-36 h-20 sm:w-44 sm:h-24 border border-orange p-1 flex items-center justify-center shrink-0 rounded-xl"
              >
                <img
                  src={logo.logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full h-auto w-auto object-contain opacity-90"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ================= REVA SECTION ================= */}
        <section className=" relative mt-24 overflow-hidden ">
          <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#fff">
            <div className="relative z-10 max-w-[90%] mx-auto grid lg:grid-cols-2 gap-x-16 gap-y-14">
              {/* Heading */}
              <div className="lg:col-span-2 text-center max-w-5xl mx-auto">
                <span className=" inline-block text-orange-500 font-semibold uppercase tracking-[0.35em] text-sm mb-5">
                  We Are Reva
                </span>

                <h2 className="text-[#30303c]  text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
                  <span>Top-Rated</span> Web Designing And{" "}
                  <ShimmerText className="font-bold">
                    Development Company
                  </ShimmerText>
                </h2>
                <DecorativeUnderline
                  width="320px" // Adjust width as needed
                  className="mt-4 mx-auto"
                  centerColor="#3B82F6" // Optional: change blue color
                />
              </div>

              {/* LEFT CONTENT */}

              <div className="space-y-8">
                <p className="text-slate-600 leading-8 text-justify text-lg">
                  Reva started its operation in the year 2019. We are a
                  Worldwide, based Web Designing and Digital Marketing Company.
                  Our main Domain is Web Design, Web Development, Digital
                  Marketing, Product Design, and Cloud Services. Customer
                  Satisfaction and the Highest rate of Customer Repeatability
                  make us one of the pioneers in the field. So, what are you
                  waiting for? Let us discuss your ideas and our innovation in
                  detail because catering to your requirement and converting it
                  into a final product is our main goal.
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  {[badge1, badge2, badge3].map((badge, i) => (
                    <img
                      key={i}
                      src={badge}
                      className="h-20 md:h-24 object-contain transition duration-300 hover:scale-105"
                      alt=""
                    />
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
                >
                  About Us
                  <span>→</span>
                </Link>
              </div>

              {/* RIGHT STATS */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                {/* Left Column */}
                <div className="flex flex-col gap-8">
                  <StatCard
                    title="PROJECTS"
                    value="750+"
                    desc="Reva delivered the hundred of successful projects around the world."
                    icon={FaBriefcase}
                  />
                  <StatCard
                    title="TEAM"
                    value="25+"
                    desc="Our team consists of highly qualified, experienced and knowledgeable."
                    icon={FaUsers}
                  />
                </div>

                {/* Right Column (Offset top margin) */}
                <div className="flex flex-col gap-8 sm:mt-12">
                  <StatCard
                    title="CLIENTS"
                    value="250+"
                    desc="Reva Graphics achieves the hundred of great customers around the world."
                    icon={FaHandshake}
                  />
                  <StatCard
                    title="YEARS"
                    value="04+"
                    desc="Clients across the globe witness our quality, processes, and work."
                    icon={FaCalendarAlt}
                  />
                </div>
              </div>
            </div>
          </GridBg>
        </section>

        {/* All sector */}
        <AllSector />
        <ServicesSection />
        <SkillsTabs />
       
        <SelectedWorkSection />
         <StarRating />

        {/* <ReviewSlider /> */}
        
        <Feedback />
        <Footer />
      </div>
    </>
  );
}
