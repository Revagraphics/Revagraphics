import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* ---------------- ICONS ---------------- */

import photoshop from "../assets/photoshop.svg";
import Adob from "../assets/ex.svg";
import Invision from "../assets/illustrator.svg";
import figma from "../assets/Figma.svg";
import Indesign from "../assets/indesign.svg";
import Bootstrap from "../assets/bootstrap.svg";
import htm from "../assets/html-5.svg";
import js from "../assets/vuejs.svg";
import css from "../assets/css.svg";
import tailwind from "../assets/tailwindcss.svg";

import mongodb from "../assets/mongodb.svg";
import mariadb from "../assets/mariadb.svg";
import redis from "../assets/redis.svg";
import mysql from "../assets/mysql.svg";
import oracle from "../assets/PHP.svg";
import express from "../assets/Laravel.svg";
import postgre from "../assets/postgresql.svg";
import python from "../assets/python.svg";
import aws from "../assets/aws.svg";
import react from "../assets/React.svg";
import adobe1 from "../assets/after-effect.svg";
import adobe2 from "../assets/premier.svg";
import adobe3 from "../assets/final.png";
import adobe4 from "../assets/Davinci.png";

/* ---------------- DATA ---------------- */

const techData = {
  design: [
    { title: "Photoshop", icon: photoshop },
    { title: "Figma", icon: figma },
    { title: "Indesign", icon: Indesign },
    { title: "Adobe XD", icon: Adob },
    { title: "Illustrator", icon: Invision },
    
  ],

  frontend: [
    { title: "React", icon: react },
    { title: "Tailwind", icon: tailwind },
    { title: "HTML", icon: htm },
    { title: "CSS", icon: css },
    { title: "Bootstrap", icon: Bootstrap },
    { title: "JavaScript", icon: js },
  ],

  backend: [
    { title: "Python", icon: python },
    { title: "Cordinator", icon: redis },
    { title: "MariaDB", icon: mariadb },
    { title: "MongoDB", icon: mongodb },
    { title: "Laravel", icon: express },
    { title: "MySQL", icon: mysql },
    { title: "PostgreSQL", icon: postgre },
    { title: "PHP", icon: oracle },
    { title: "AWS-RDS", icon: aws },
  ],

  video: [
    { title: "Adobe After Effect", icon: adobe1 },
    { title: "Adobe Premire Pro", icon: adobe2 },
    { title: "Final Cut", icon: adobe3 },
    { title: "Davinci Resolve", icon: adobe4 },
  ],
};

const tabs = [
  { key: "design", name: "Design" },
  { key: "frontend", name: "Frontend" },
  { key: "backend", name: "Backend" },
  { key: "video", name: "Video" },
];

/* ---------------- COMPONENT ---------------- */

export default function SkillsTabs(){
  const [activeTab, setActiveTab] = useState("frontend");
  const gridRef = useRef();

  /* ---------- GSAP Animation ---------- */


  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------------- HEADING ---------------- */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Technologies We{" "}
            <span className="text-[#ff6726]">Work With</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We leverage modern technologies to build scalable,
            high-performance digital experiences.
          </p>
        </div>

        {/* ---------------- TABS ---------------- */}

        <div className="flex justify-center mb-12">
          <div className="
            flex gap-2
            overflow-x-auto
            scrollbar-hide
            bg-white
            rounded-2xl
            p-2
            border
            shadow-sm
          ">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  whitespace-nowrap
                  px-6 py-3
                  rounded-xl
                  text-sm font-semibold
                  transition-all duration-300
                  ${
                    activeTab === tab.key
                      ? "bg-[#ff6726] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- GRID ---------------- */}

        <div
          ref={gridRef}
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
            gap-8
          "
        >
          {techData[activeTab].map((item, i) => (
            <div
              key={i}
              className="
                tech-card
                group
                bg-white
                rounded-3xl
                p-10
                text-center
                flex flex-col
                items-center
                border
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <div className="
                w-32 h-32
                flex items-center justify-center
                
                rounded-3xl
                mb-6
                group-hover:bg-orange-50
                transition
              ">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-28 h-28 object-contain group-hover:scale-110 transition"
                />
              </div>

              <p className="font-semibold text-gray-800 text-xl">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

