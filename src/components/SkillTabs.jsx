import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* ---------------- ICONS ---------------- */

import photoshop from "../assets/photoshop.svg";
import Adob from "../assets/ex.svg";
import Invision from "../assets/illustrator.svg";
import Indesign from "../assets/indesign.svg";
import Bootstrap from "../assets/bootstrap.svg";
import htm from "../assets/html-5.svg";
import js from "../assets/vuejs.svg";
import css from "../assets/css.svg";
import tailwind from "../assets/tailwindcss.svg";
import sketch from "../assets/sketch.svg";
import mongodb from "../assets/mongodb.svg";
import mariadb from "../assets/mariadb.svg";
import redis from "../assets/redis.svg";
import mysql from "../assets/mysql.svg";
import oracle from "../assets/oracle.svg";
import express from "../assets/express.svg";
import postgre from "../assets/postgresql.svg";
import python from "../assets/python.svg";
import aws from "../assets/aws.svg";
import wordpress from "../assets/wordpress.svg";
import woocommerce from "../assets/woocommerce.svg";
import bigcommerce from "../assets/bigcommerce.svg";
import joomla from "../assets/joomla.svg";
import wix from "../assets/wix.svg";
import drupal from "../assets/drupal.svg";
import shopify from "../assets/shopify.svg";
import majento from "../assets/magento.svg";
import react from "../assets/react-js.svg";

/* ---------------- DATA ---------------- */

const techData = {
  design: [
    { title: "Figma", icon: Indesign },
    { title: "Adobe XD", icon: Adob },
    { title: "Sketch", icon: sketch },
    { title: "InVision", icon: Invision },
    { title: "Photoshop", icon: photoshop },
  ],

  frontend: [
    { title: "React", icon: react },
    { title: "HTML", icon: htm },
    { title: "CSS", icon: css },
    { title: "Tailwind", icon: tailwind },
    { title: "Bootstrap", icon: Bootstrap },
    { title: "JavaScript", icon: js },
  ],

  backend: [
    { title: "Python", icon: python },
    { title: "Redis", icon: redis },
    { title: "MariaDB", icon: mariadb },
    { title: "MongoDB", icon: mongodb },
    { title: "Express", icon: express },
    { title: "MySQL", icon: mysql },
    { title: "PostgreSQL", icon: postgre },
    { title: "Oracle", icon: oracle },
    { title: "AWS-RDS", icon: aws },
  ],

  cms: [
    { title: "WordPress", icon: wordpress },
    { title: "Joomla", icon: joomla },
    { title: "Magento", icon: majento },
    { title: "Shopify", icon: shopify },
    { title: "Drupal", icon: drupal },
    { title: "Wix", icon: wix },
    { title: "WooCommerce", icon: woocommerce },
    { title: "BigCommerce", icon: bigcommerce },
  ],
};

const tabs = [
  { key: "design", name: "Design" },
  { key: "frontend", name: "Frontend" },
  { key: "backend", name: "Backend" },
  { key: "cms", name: "CMS" },
];

/* ---------------- COMPONENT ---------------- */

const SkillsTabs = () => {
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
                rounded-2xl
                p-6
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
                w-20 h-20
                flex items-center justify-center
                bg-gray-50
                rounded-2xl
                mb-4
                group-hover:bg-orange-50
                transition
              ">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition"
                />
              </div>

              <p className="font-medium text-gray-800 text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsTabs;