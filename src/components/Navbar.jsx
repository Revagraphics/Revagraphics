import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaAngleDown  } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Hover from "./Hover";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Navbar() {
  /* ================= STATE ================= */
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRefs = useRef({});

  const setDropdownRef = (name) => (el) => {
    dropdownRefs.current[name] = el;
  };

  /* ================= MENU CONFIG ================= */
  const dropdownConfigs = {
    services: {
      label: "Services",
      items: [
        { to: "/designing", label: "Design" },
        { to: "/printing", label: "Printing" },
        { to: "/branding", label: "Branding" },
      ],
    },
    development: {
      label: "Development",
      items: [
        { to: "/development", label: "Web Development" },
        { to: "/designing", label: "Web designing" },
        { to: "/cloud", label: "Cloud Services" },
      ],
    },
    branding: {
      label: "Branding",
      items: [
        { to: "/branding", label: "Brand Identity" },
        { to: "/marketing", label: "Digital Marketing" },
        { to: "/content", label: "Content Strategy" },
      ],
    },
  };

  /* ================= DESKTOP DROPDOWN ================= */
  const toggleDesktop = (name) => {
    setDesktopDropdown((prev) => (prev === name ? null : name));
  };

  /* ================= MOBILE DROPDOWN ================= */
  const toggleMobile = (name) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!desktopDropdown) return;

      const ref = dropdownRefs.current[desktopDropdown];
      if (ref && !ref.contains(e.target)) {
        setDesktopDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopDropdown]);

  /* ================= LOCK BODY ================= */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[9999] rounded-3xl   bg-white/30 backdrop-blur border shadow-xl">
        <div className="flex justify-between items-center px-6 py-3">
          {/* LOGO */}
          <Link to="/"><img src={Logo} className="h-10" /></Link>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:flex text-[#08182b] font-bold  px-8 py-4  items-center gap-8">
            <Hover isActive>
              {" "}
              <Link to="/">Home</Link>
            </Hover>
            <Hover is>
              <Link to="/about">About</Link>
            </Hover>

            {Object.entries(dropdownConfigs).map(([key, config]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setDesktopDropdown(key)}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                <button className="flex items-center gap-1 py-2">
                  <Hover>{config.label}</Hover>
                  <FaAngleDown
                    className={`transition-transform duration-300 ${
                      desktopDropdown === key ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border overflow-hidden border-gray-100 
                  transition-all duration-300 origin-top ${
                    desktopDropdown === key
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <div className="mt-0 h-1 w-full bg-orange-500 transition-all" />
                  {config.items.map((item, i) => (
                    <Link
                      key={i}
                      to={item.to}
                      className="block px-6 py-3 hover:text-orange-500 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Hover>
              {" "}
              <Link to="/portfolio">Portfolio</Link>
            </Hover>
            <Hover>
              {" "}
              <Link to="/contact">Contact</Link>
            </Hover>
          </div>

          {/* CTA DESKTOP */}
          <Link to="/contact"><button className="hidden lg:block px-6 py-2 rounded-full border cursor-pointer font-semibold text-[#8c5300] bg-[#ffdb00] transition">
            Talk To Us
          </button></Link>

          {/* HAMBURGER */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMobileOpen(true)}
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* ================= BACKDROP ================= */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed right-0 top-0 h-full w-[85%] max-w-sm z-[99999] bg-white  shadow-2xl 
              transition-transform duration-500 flex flex-col
              ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <img src={Logo} className="h-9" alt="Reva Graphics" />
          <HiX
            className="text-3xl cursor-pointer"
            onClick={() => setMobileOpen(false)}
          />
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          <Link
            to="/"
            className="block py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          {/* Mobile Dropdowns */}
          {Object.entries(dropdownConfigs).map(([key, config]) => (
            <div key={key} className="border-b">
              <button
                onClick={() => toggleMobile(key)}
                className="w-full flex justify-between py-3"
              >
                {config.label}
                <FaAngleDown
                  className={`transition ${mobileDropdown === key ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdown === key ? "max-h-60 pb-2" : "max-h-0"
                }`}
              >
                {config.items.map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    className="block pl-4 py-2 text-slate-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link to="/portfolio" className="block py-3 border-b">
            Portfolio
          </Link>

          <Link to="/contact" className="block py-3 border-b">
            Contact
          </Link>

          <button className="mt-6 w-full py-3 rounded-full bg-black text-white font-medium">
            Talk To Us
          </button>
        </div>

        <div className="border-t p-6 mt-auto">
          <div className="flex justify-center items-center gap-6 text-2xl">
            <a
              href="https://x.com/Revagraphics"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/werevagraphics/"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/werevagraphics"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.linkedin.com/company/werevagraphics"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

