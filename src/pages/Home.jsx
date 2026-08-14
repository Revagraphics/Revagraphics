import React, { useEffect, useRef } from "react";
import ServicesSection from "../components/ServicesSection";
import SelectedWork from "../components/SelectedWork";
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
// selected images
import campaign from "../assets/campaign.webp";
import website from "../assets/banglore.jpg";
import branding from "../assets/branding.webp";
import brochure from "../assets/brochure.jpg";
import testimonial from "../assets/testimonial.webp";
import packaging from "../assets/product-packaging.webp";
// work
const works = [
  { id: 1, image: campaign, title: "Development" },
  { id: 2, image: website, title: "Designing" },
  { id: 3, image: branding, title: "Marketing" },
  { id: 4, image: brochure, title: "Editing" },
  { id: 5, image: testimonial, title: "Seo" },
  { id: 6, image: packaging, title: "Printing" },
  { id: 7, image: packaging, title: "Packaging" },
];

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

      const totalWidth = logosRef.current.scrollWidth / 4; // Divide by 4 because we duplicated the logos 4 times

      gsap.to(logosRef.current, {
        x: -totalWidth,
        duration: 25,
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
        {/* Icon + Title/Value in one row */}
        <div className="flex items-start gap-5 sm:gap-6">
          {/* Icon */}
          <div className="flex shrink-0 aspect-square w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 group-hover:scale-105 transition-transform duration-300 mt-1">
            <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500 stroke-[1.5]" />
          </div>

          {/* Title + Value */}
          <div className="flex-1 min-w-0">
            <span className="text-orange-500 text-xs sm:text-sm font-bold tracking-[0.125em] uppercase">
              {title}
            </span>
            <h3 className="mt-1 text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">
              {value}
            </h3>
          </div>
        </div>

        {/* Description - starts under the icon area */}
        <div className="  sm:pt-4  ">
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
        {/* ================= HERO ================= */}
        <main className="mt-28 px-4 flex item-center lg:h-[70vh] max-w-[90vw] justify-center mx-auto py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* TEXT */}
            <section className="hero-animate flex-1 text-center lg:text-left">
              <h1 className="text-4xl text-[#30303c] sm:text-2xl lg:text-6xl font-poppins font-bold leading-tight">
                Expert Branding & Web{" "}
                <span className="">Development Solutions Across</span>{" "}
                <span
                  ref={textRef}
                  className="text-transparent bg-clip-text   bg-gradient-to-r from-[#FF9800] to-[#E91E63]"
                >
                  Branding.
                </span>
              </h1>

              <Link
                to="/contact"
                className="inline-block mt-8   bg-gradient-to-r from-[#FF9800] to-[#E91E63]   text-white px-8 py-3 rounded-full"
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
                  className="w-full h-[320px] sm:h-[420px]  lg:h-[520px] object-cover"
                />
              </div>
            </section>
          </div>
        </main>

        {/* ================= CLIENT LOGOS ================= */}
        <section className="mt-16 overflow-hidden w-full flex items-center justify-center">
          <div ref={logosRef} className="flex gap-8 w-max items-center">
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="
              flex-shrink-0 bg-zinc-100 rounded-3xl p-4 overflow-hidden shadow-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-400
              "
              >
                <img
                  src={logo.logo}
                  alt="Partner Logo"
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ================= REVA SECTION ================= */}
        <section className="relative mt-24 overflow-hidden flex justify-center w-full sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#fff">
            <div className="relative z-10 max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col max-w-[1180px] lg:max-w-none mx-auto gap-12 lg:gap-16 xl:gap-20">
                  {/* Heading - Centered */}
                  <div className="text-center mx-auto max-w-5xl w-full">
                    <span className="inline-block text-orange-500 font-semibold uppercase tracking-[0.35em] text-sm mb-5">
                      We Are Reva
                    </span>

                    <h2 className="text-[#30303c] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                      <span>Top-Rated</span> Web Designing And{" "}
                      <ShimmerText className="font-bold">
                        Development Company
                      </ShimmerText>
                    </h2>

                    <DecorativeUnderline
                      width="320px"
                      className="mt-6 mx-auto md:w-[380px] lg:w-[450px]"
                      centerColor="#3B82F6"
                    />
                  </div>

                  {/* Bottom Section: Flex Column at 1080px and below, Row only above 1081px */}
                  <div className="about-container flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-20 w-full">
                    {/* LEFT CONTENT - Text + Badges + Button */}
                    <div className="space-y-8 lg:space-y-10 w-full min-[1181px]:w-1/2">
                      <p className="text-slate-600 leading-relaxed text-[17px] sm:text-lg text-justify md:text-left">
                        Reva started its operation in the year 2019. We are a
                        Worldwide, based Web Designing and Digital Marketing
                        Company. Our main Domain is Web Design, Web Development,
                        Digital Marketing, Product Design, and Cloud Services.
                        Customer Satisfaction and the Highest rate of Customer
                        Repeatability make us one of the pioneers in the field.
                      </p>

                      <div className="flex items-center justify-center min-[1181px]:justify-start gap-3 sm:gap-4">
                        {[badge1, badge2, badge3].map((badge, i) => (
                          <img
                            key={i}
                            src={badge}
                            alt=""
                            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
                          />
                        ))}
                      </div>

                      <div className="flex justify-center min-[1181px]:justify-start">
                        <Link
                          to="/about"
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300 text-center"
                        >
                          About Us <span>→</span>
                        </Link>
                      </div>
                    </div>

                    {/* RIGHT STATS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full min-[1181px]:w-1/2">
                      <StatCard
                        title="PROJECTS"
                        value="750+"
                        desc="Reva delivered hundreds of successful projects around the world."
                        icon={FaBriefcase}
                      />
                      <StatCard
                        title="TEAM"
                        value="25+"
                        desc="Our team consists of highly qualified, experienced and knowledgeable."
                        icon={FaUsers}
                      />
                      <StatCard
                        title="CLIENTS"
                        value="250+"
                        desc="Reva Graphics achieves hundreds of great customers around the world."
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
              </div>
            </div>
          </GridBg>
        </section>

        {/* All sector */}
        <AllSector />
        <ServicesSection />
        <SkillsTabs />

        {/* <SelectedWorkSection /> */}
        <SelectedWork
          works={works}
          title="Selected"
          highlight="Work"
          subtitle=""
          viewAllLink="/clients"
          viewAllText="See our work"
          duration={25}
        />
        <StarRating />
        <Feedback />
      </div>
    </>
  );
}
