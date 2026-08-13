import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";



import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram ,  FaCircle } from "react-icons/fa";

export default function Navbar() {
  /* ================= STATE ================= */
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, isActive] = useState(false);

  const dropdownRefs = useRef({});
  const scope = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileBackdropRef = useRef(null);
  const mobileLinkRefs = useRef([]);

  useGSAP(
    () => {
      gsap.fromTo(
        scope.current,
        { opacity: 0, y: -24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        scope.current?.querySelectorAll(".nav-animate-item"),
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          delay: 0.12,
          ease: "power3.out",
        },
      );
    },
    { scope },
  );



  const setDropdownRef = (name) => (el) => {
    dropdownRefs.current[name] = el;
  };

  /* ================= MENU CONFIG ================= */
  const dropdownConfigs = {

    printing: {
      label: "Printing",
      items: [
        { to: "/corporate", label: " Corporate Printing" },
        { to: "/gifting", label: "Corporate Gifting" },
        { to: "/events", label: "Events Printing" },
      ],
      
    },
    services: {
      label: "Designing",
      items: [
        { to: "/branding", label: "Brand Identity" },
        { to: "/marketing", label: "Digital Marketing" },
        { to: "/profile", label: "Company Profile" },
      ],
      
    },
    development: {
      label: "Development",
      items: [
        { to: "/designing", label: "Web designing" },
        { to: "/development", label: "Web Development" },
        { to: "/application", label: "Mobile Application" },
        { to: "/cloud", label: "Cloud Services" },
      ],
    },
    Portfolio: {
      label: "Portfolio",
      items: [
        { to: "/portfolio", label: "Portfolio" },
        { to: "/stationery", label: "Stationery" },
        { to: "/trophy", label: "Trophy " },
        { to: "/catalogue", label: "Catalogue & Brochure" },
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

  /* ================= MOBILE MENU ANIMATION ================= */
  useEffect(() => {
    if (!mobileBackdropRef.current || !mobileMenuRef.current) return ;
    gsap.set(mobileBackdropRef.current, { autoAlpha: 0 });
    gsap.set(mobileMenuRef.current, { x: "100%" });
  }, []);

  useEffect(() => {
    if (!mobileBackdropRef.current || !mobileMenuRef.current) ; 

    gsap.to(mobileBackdropRef.current, {
      autoAlpha: mobileOpen ? 1 : 0,
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(mobileMenuRef.current, {
      x: mobileOpen ? 0 : "100%",
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });

    if (mobileOpen) {
      gsap.fromTo(
        mobileLinkRefs.current.filter(Boolean),
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.06,
          delay: 0.12,
          ease: "power2.out",
        },
      );
    }
  }, [mobileOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        ref={scope}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[90%] z-[9999] rounded-3xl bg-white/30 backdrop-blur-[20px] border shadow-xl"
      >
        <div className="flex justify-between items-center px-6 py-3">
          {/* LOGO */}
          <Link to="/" className="nav-animate-item">
            <img src={Logo} className="h-14" alt="Reva Graphics logo" />
          </Link>

          {/* ================= DESKTOP ================= */}
          <div className="hidden desktop lg:flex text-[#08182b] font-bold md:px-4 md:py-4 md:gap-2 px-8 py-4 items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-animate-item px-3 py-2 font-bold transition-all duration-200
                  ${
                    isActive
                      ? "text-orange-500  "
                      : "text-[#08182b] hover:bg-white/70 "
                  }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-animate-item px-3 py-2 font-bold transition-all duration-200
                  ${
                    isActive
                      ? "text-orange-500 "
                      : "text-[#08182b] hover:bg-white/70 "
                  }`
              }
            >
              About
            </NavLink>

            {/* <NavLink
              to="/printing"
              className={({ isActive }) =>
                `nav-animate-item px-3 py-2 font-bold transition-all duration-200
                  ${
                    isActive
                      ? "text-orange-500  "
                      : "text-[#08182b] hover:bg-white/70 "
                  }`
              }
            >
              Printing
            </NavLink> */}

            {Object.entries(dropdownConfigs).map(([key, config]) => {
              const isActive = config.items.some(
                (item) => location.pathname === item.to,
              );

              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdown(key)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  {/* BUTTON */}
                  <button
                    className={`nav-animate-item flex items-center gap-1 py-2 px-3 font-bold transition-all duration-200
        ${
          isActive
            ? "text-orange-500 "
            : "text-[#08182b] hover:bg-white/70 "
        }`}
                  >
                    {config.label}

                    <FaAngleDown
                      className={`transition-transform duration-300 ${
                        desktopDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={`absolute left-0 mt-2 w-52 bg-white  shadow-xl  overflow-hidden border-gray-100 
        transition-all duration-300 origin-top ${
          desktopDropdown === key
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
                  >
                    <div className="h-1 w-full bg-orange-500" />

                    {config.items.map((item, i) => (
                      <NavLink
                        key={i}
                        to={item.to}
                        className={({ isActive }) =>
                          `nav-animate-item block px-6 py-3 transition-colors 
              ${
                isActive
                  ? "text-orange-500 "
                  : "text-gray-700 hover:text-orange-500"
              }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            })}


            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-animate-item px-3 py-2 font-bold transition-all duration-200
                  ${
                    isActive
                      ? "text-orange-500 bg-white/60 "
                      : "text-[#08182b] hover:bg-white/70 "
                  }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* CTA DESKTOP */}
          <Link to="/contact">
            <button className="nav-animate-item desktop hidden lg:block px-6 py-2 rounded-full border cursor-pointer font-semibold text-[#fff] bg-gradient-to-r from-[#FF9800] to-[#E91E63] hover:scale-105 transition">
              Talk To Us
            </button>
          </Link>

          {/* HAMBURGER */}
          <button
            className="nav-animate-item hamburger lg:hidden text-3xl"
            onClick={() => setMobileOpen(true)}
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* ================= BACKDROP ================= */}
      <button
        ref={mobileBackdropRef}
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        ref={mobileMenuRef}
        className={`fixed hamburger right-0 top-0 h-full w-[85%] max-w-sm z-[99999] bg-white shadow-2xl 
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
            className="nav-animate-item block py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="nav-animate-item block py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          <Link
            to="/printing"
            className="nav-animate-item block py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Printing
          </Link>

          {/* Mobile Dropdowns */}
          {Object.entries(dropdownConfigs).map(([key, config]) => (
            <div key={key} className="border-b">
              <button
                onClick={() => toggleMobile(key)}
                className="nav-animate-item w-full flex justify-between py-3"
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
                    ref={(el) => {
                      mobileLinkRefs.current.push(el);
                    }}
                    to={item.to}
                    className="nav-animate-item block pl-4 py-2 text-slate-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}


          <Link
            to="/contact"
            className="nav-animate-item block py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          <button className="nav-animate-item mt-6 w-full py-3 rounded-full bg-black text-white font-medium">
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
}
