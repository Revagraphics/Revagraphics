import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/about.webp";
import AnimatedStat from "../components/AnimatedStat";
import build from "../assets/building.jpg";
import Mission from "../components/Mission";
import Ethics from "../components/Ethics";
import TeamWork from "../components/TeamWork";

export default function About(){
  return (
    <div className="">
      <Navbar />

      <main className="mt-28 px-4 flex item-center lg:h-[60vh] max-w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* TEXT */}
          <section className="hero-animate flex-1 text-center lg:text-left">

            <span className="text-indigo-600 font-semibold mb-4 uppercase text-[1.3rem]">
              We Are Reva
            </span>
            <h2 className="text-4xl text-[#30303c] sm:text-2xl lg:text-6xl font-semibold leading-tight">
              We are a creative digital <br /> agency based in India.
            </h2>

            <p className="mt-4 text-[#30303c] text-[1.2rem]">
              Reva started its operation in the year 2019. We are a Worldwide,
              based Web Designing and Digital Marketing Company. Our main Domain
              is Web Design, Web Development, Web Application, Digital
              Marketing, Product Design, and Cloud Services.
            </p>

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
                src={build}
                alt="hero"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
              />
            </div>
          </section>
        </div>
      </main>

      <section className=" min-h-[70vh] lg:pt-24 pb-28">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="grid lg:grid-cols-2 items-center mt-[5rem] gap-12">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block lg:text-[2rem] font-medium text-[#ff9904] mb-4">
                Highest rated brand designing company
              </span>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                We build a unique{" "}
                <span className="text-transparent bg-clip-text bg-orange-500">
                  Brand
                </span>{" "}
                for attract the customers
              </h1>

              <p className="text-gray-500 mb-8">
                Hire website developers from us to establish a strong online
                presence that will concrete your path toward success.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff9904] text-white rounded-full font-medium hover:opacity-90 transition"
              >
                Let’s discuss →
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={bg}
                alt="hero"
                className="w-full h-1/2 max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT REVA SECTION (with Animated Stats) ==================== */}
      <section className="bg-[#f8f7f4] py-20 px-6">
        <div className="max-w-[90%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side */}
            <div>
              <p className="text-blue-600 font-medium tracking-widest text-sm mb-3">
                ABOUT THE REVA?
              </p>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Reva Graphics
              </h2>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-gray-900">
                Reva is a full-service web and digital marketing company based
                in India.
              </h3>

              <div className="text-gray-600 leading-relaxed space-y-6">
                <p>
                  Our experts provide a wide range of services including app
                  design, web development, digital marketing, ecommerce
                  solutions and cloud development. We stay updated with the
                  technology to build innovative digital products that meet
                  client requirements across multiple business verticals and
                  domains by housing some of the best professionals in the
                  industry.
                </p>

                <p>
                  To transform the concepts to design, concluding with full
                  executions, we also stay updated with the latest trending
                  technologies. And we evolve with the advancement in technology
                  because we believe in making our technology as your
                  innovation.
                </p>

                <p className="text-gray-700">
                  To learn more about our approach to business and work, feel
                  free to hop on over to our{" "}
                  <a
                    href="/contact"
                    className="text-orange-500 hover:underline font-medium"
                  >
                    Open Contact Page
                  </a>
                  .
                </p>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 pt-6 border-t border-gray-200">
                <AnimatedStat label="Complete Projects" end={750} suffix="+" />
                <AnimatedStat label="Happy Clients" end={250} suffix="+" />
                <AnimatedStat label="Expert Team" end={25} suffix="+" />
                <AnimatedStat label="Success Years" end={7} suffix="+" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Mission/>

      <Ethics/>
      <TeamWork/>

      <Footer />
    </div>
  );
};


