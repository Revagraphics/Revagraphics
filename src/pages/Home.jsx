import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewSlider from "../components/ReviewSlider";
import ServicesSection from "../components/ServicesSection";
import SelectedWorkSection from "../components/SelectedWorkSection";
import SkillsTabs from "../components/SkillTabs";
import Feedback from "../components/Feedback";
import StarRating from "../components/StarRating";

import { Link } from "react-router-dom";
import gsap from "gsap";
import Seo from "../components/Seo";
import HeroImg from "../assets/hero1.png";

import logo1 from "../assets/customer-logo-1.png";
import logo2 from "../assets/customer-logo-2.png";
import logo3 from "../assets/customer-logo-3.png";
import logo4 from "../assets/customer-logo-4.png";
// import logo5 from "../assets/customer-logo-5.png";
import logo6 from "../assets/customer-logo-6.png";
import logo7 from "../assets/customer-logo-7.png";
import logo8 from "../assets/FRENZY-01.png";
import logo9 from "../assets/customer-logo-10.png";
import badge1 from "../assets/badge-1.png";
import badge2 from "../assets/badge22.png";
import badge3 from "../assets/badge-3.png";

export default function Home() {
  const textRef = useRef(null);
  const logosRef = useRef(null);

  const phrases = [
    "India.",
    "Australia",
    "Singapore",
    "UK",
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

  const logos = [logo1, logo2, logo3, logo4, logo6, logo7, logo8, logo9];

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
                Expert Branding & Web
                <span className="block">Development Solutions Across</span>
                <span
                  ref={textRef}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                  Branding.
                </span>
              </h1>

              <Link
                to="/contact"
                className="inline-block mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full"
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
          <div ref={logosRef} className="flex gap-12 w-max items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div className="border border-orange p-4">
                <img key={i} src={logo} className="h-10 sm:h-12 opacity-70 " />
              </div>
            ))}
          </div>
        </section>

        {/* ================= REVA SECTION ================= */}
        <section className="mt-24 bg-[#cbecff] py-20 px-4">
          <div className="max-w-[90%] mx-auto grid lg:grid-cols-2 gap-14">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <span className="text-orange-500 font-semibold uppercase text-sm">
                We Are Reva
              </span>

              <h2 className="text-[#30303c] sm:text-4xl lg:text-5xl font-semibold">
                <span className="text-orange-500">Top-rated</span> Web Designing
                And Development Company
              </h2>

              <p className="text-slate-600 leading-relaxed text-justify">
                Reva started its operation in the year 2019. We are a Worldwide,
                based Web Designing and Digital Marketing Company. Our main
                Domain is Web Design, Web Development, Digital Marketing,
                Product Design, and Cloud Services. Customer Satisfaction and
                the Highest rate of Customer Repeatability make us one of the
                pioneers in the field. So, what are you waiting for? Let us
                discuss your ideas and our innovation in detail because catering
                to your requirement and converting it into a final product is
                our main goal.
              </p>

              <div className="flex flex-wrap gap-4">
                {[badge1, badge2, badge3].map((badge, i) => (
                  <img key={i} src={badge} className="h-24" />
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex bg-indigo-600 text-white px-8 py-3 rounded-full"
              >
                About Us →
              </Link>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-6 items-start">
              {/* Left column — Projects + Team (taller cards) */}
              <div className="flex flex-col gap-6">
                {[
                  [
                    "PROJECTS",
                    "750+",
                    "Reva delivered the hundred of successful projects around the world.",
                  ],
                  [
                    "TEAM",
                    "25+",
                    "Our team consists of highly qualified, experienced and knowledgeable.",
                  ],
                ].map(([title, value, desc]) => (
                  <div
                    key={title}
                    className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition flex flex-col gap-3 min-h-[200px]"
                  >
                    <span className="text-cyan-500 text-xs font-bold tracking-widest uppercase">
                      {title}
                    </span>
                    <h3 className="text-5xl font-extrabold text-gray-900">
                      {value}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right column — Clients + Years (offset down) */}
              <div className="flex flex-col gap-6 mt-10">
                {[
                  [
                    "CLIENTS",
                    "250+",
                    "Reva Graphics achieves the hundred of great customers around the world.",
                  ],
                  [
                    "YEARS",
                    "04+",
                    "Clients across the globe witness our quality, processes, and work.",
                  ],
                ].map(([title, value, desc]) => (
                  <div
                    key={title}
                    className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition flex flex-col gap-3 min-h-[170px]"
                  >
                    <span className="text-cyan-500 text-xs font-bold tracking-widest uppercase">
                      {title}
                    </span>
                    <h3 className="text-5xl font-extrabold text-gray-900">
                      {value}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ReviewSlider />
        <ServicesSection />
        <StarRating />
        <SelectedWorkSection />
        <SkillsTabs />
        <Feedback />
        <Footer />
      </div>
    </>
  );
}
