import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import badge1 from "../assets/batch1.png";
import badge2 from "../assets/batch2.png";
import itfirm from "../assets/itfirm.png";
import goodfirm from "../assets/goodfirm.png";
import bottomLogo from "../assets/footer-logo.png";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTimes,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const WORD = "reva graphics";

// Badge data
const badges = [
  {
    id: 1,
    src: badge1,
    alt: "Badge 1",
    title: "Top Rated Agency",
    description:
      "Recognized as one of the highest-rated creative agencies with consistent 5-star client feedback.",
    year: "2025",
  },
  {
    id: 2,
    src: badge2,
    alt: "Badge 2",
    title: "Excellence in Design",
    description:
      "Awarded for outstanding creativity and design excellence across multiple projects.",
    year: "2024",
  },
  {
    id: 3,
    src: itfirm,
    alt: "IT Firm Award",
    title: "Best IT Services Firm",
    description:
      "Featured among the top IT and digital transformation companies in the region.",
    year: "2025",
  },
  {
    id: 4,
    src: goodfirm,
    alt: "GoodFirms Award",
    title: "GoodFirms Certified",
    description:
      "Verified and highly recommended by GoodFirms for quality, reliability, and client satisfaction.",
    year: "2024",
  },
];

export default function Footer() {
  const sliderRef = useRef(null);
  const lettersRef = useRef([]);
  const bigTextRef = useRef(null);
  const [selectedBadge, setSelectedBadge] = useState(null);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedBadge(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ── Per-letter drop animation ──────────────────────────────────
  useEffect(() => {
    const els = lettersRef.current.filter(Boolean);
    if (!els.length) return;

    gsap.set(els, { yPercent: -120, opacity: 0 });

    const ctx = gsap.context(() => {
      gsap.to(els, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.055,
        scrollTrigger: {
          trigger: bigTextRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // ── Mobile badge carousel ──────────────────────────────────────
  useEffect(() => {
    const el = sliderRef.current;
    if (!el || window.innerWidth >= 768) return;

    const totalWidth = el.scrollWidth / 2;
    const animation = gsap.to(el, {
      x: -totalWidth,
      duration: 6,
      ease: "none",
      repeat: -1,
    });
    return () => animation.kill();
  }, []);

  const openModal = (badge) => setSelectedBadge(badge);
  const closeModal = () => setSelectedBadge(null);

  return (
    <footer className="bg-[#30303c] text-zinc-300 border-t border-zinc-800">
      {/* ── MIDDLE SECTION ──────────────────────────────────────── */}
      <section className="bg-[#30303c] text-white border-t border-zinc-800">
        <div className="max-w-[90%] mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Logo + rating */}
            <div className="text-center lg:text-left space-y-4">
              <img src={bottomLogo} alt="Reva Graphics" />
              <div className="flex justify-center lg:justify-start gap-1 text-yellow-400 text-2xl">
                ★ ★ ★ ★ ★
              </div>
              <p className="text-base text-zinc-300 max-w-sm">
                Overall client rating is <b>4.9 out of 8,500</b> clients for
                Reva Graphics.
              </p>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-5">
                Follow Us
              </h3>
              <div className="flex flex-col gap-3 text-lg">
                {[
                  {
                    href: "https://x.com/Revagraphics",
                    icon: <FaXTwitter size={22} />,
                    label: "Twitter",
                  },
                  {
                    href: "https://www.instagram.com/werevagraphics/",
                    icon: <FaInstagram size={22} />,
                    label: "Instagram",
                  },
                  {
                    href: "https://www.facebook.com/werevagraphics",
                    icon: <FaFacebook size={22} />,
                    label: "Facebook",
                  },
                  {
                    href: "https://www.linkedin.com/company/werevagraphics",
                    icon: <FaLinkedin size={22} />,
                    label: "LinkedIn",
                  },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-zinc-400 hover:text-orange-400 transition-all duration-300 hover:scale-105"
                  >
                    {icon}
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop badge grid - NOW CLICKABLE */}
            <div className="hidden md:flex flex-wrap justify-center gap-8 items-center">
              {badges.map((badge) => (
                <img
                  key={badge.id}
                  src={badge.src}
                  alt={badge.alt}
                  onClick={() => openModal(badge)}
                  className="h-28 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>

            {/* Mobile badge carousel - CLICKABLE */}
            <div className="block md:hidden w-screen relative -mx-[50vw] overflow-hidden">
              <div
                ref={sliderRef}
                className="flex gap-10 w-max items-center px-6"
              >
                {[...badges, ...badges].map((badge, i) => (
                  <img
                    key={i}
                    src={badge.src}
                    alt={badge.alt}
                    onClick={() => openModal(badge)}
                    className="h-20 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3   bg-gradient-to-r from-[#FF9800] to-[#E91E63]  px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/40 hover:scale-105"
              >
                Our Brochure →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIG TEXT ─────────────────────────────────────────────── */}
      <section
        ref={bigTextRef}
        className="bg-[#30303c] border-t border-zinc-800 overflow-hidden py-6 sm:py-8 md:py-10"
      >
        <div className="w-full flex items-end overflow-hidden px-4 sm:px-8">
          {WORD.split("").map((ch, i) => {
            if (ch === " ") {
              return (
                <span
                  key={`space-${i}`}
                  style={{
                    display: "inline-block",
                    width: "clamp(12px, 2.5vw, 40px)",
                  }}
                />
              );
            }
            return (
              <span
                key={i}
                style={{
                  overflow: "hidden",
                  display: "inline-block",
                  lineHeight: 1,
                }}
              >
                <span
                  ref={(el) => (lettersRef.current[i] = el)}
                  style={{
                    display: "inline-block",
                    fontFamily:
                      "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(64px, 13.5vw, 160px)",
                    color: "#ffffff",
                    letterSpacing: "-0.035em",
                    lineHeight: 0.9,
                    textTransform: "lowercase",
                    opacity: 0,
                  }}
                >
                  {ch}
                </span>
              </span>
            );
          })}
        </div>
      </section>

      {/* ── BOTTOM BAR ──────────────────────────────────────────── */}
      <div className="bg-[#30303c] border-t border-zinc-800">
        <div className="max-w-[90%] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://revagraphics.com/"
              className="hover:text-orange-400 transition-colors text-zinc-400"
            >
              Reva Graphics
            </a>{" "}
            All rights reserved
          </p>
          <p className="flex items-center gap-2">
            Made with{" "}
            <span className="text-red-600">
              <FaHeart />
            </span>{" "}
            by{" "}
            <span className="bg-gradient-to-r from-[#FF9800] to-[#E91E63] bg-clip-text text-transparent font-medium">
              Reva Graphics
            </span>
          </p>
        </div>
      </div>

      {/* ── BEAUTIFUL MODAL ──────────────────────────────────────── */}
      {selectedBadge && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full mx-auto overflow-hidden shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Accent Header */}
            <div className="relative h-72 bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>

              <img
                src={selectedBadge.src}
                alt={selectedBadge.alt}
                className="w-56 h-56 object-contain drop-shadow-2xl relative z-10"
              />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-2xl shadow-lg transition-all hover:scale-110 active:scale-95"
              >
                <FaTimes size={22} />
              </button>

              {/* Decorative shine */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="p-8 pb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                  🏆
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                    {selectedBadge.title}
                  </h3>
                  <p className="text-orange-600 font-semibold text-lg mt-1">
                    {selectedBadge.year}
                  </p>
                </div>
              </div>

              <div className="prose prose-gray">
                <p className="text-gray-600 leading-relaxed text-[17px]">
                  {selectedBadge.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <button
                  onClick={closeModal}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold text-lg rounded-2xl shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Close Preview
                  <span className="text-xl">✨</span>
                </button>
              </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="h-1.5 bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500"></div>
          </div>
        </div>
      )}
    </footer>
  );
}
