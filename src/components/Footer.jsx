import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import badge1 from "../assets/batch1.png";
import badge2 from "../assets/batch2.png";
import itfirm from "../assets/itfirm.png";
import goodfirm from "../assets/goodfirm.png";
import bottomLogo from "../assets/footer-logo.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORD = "reva graphics";

export default function Footer() {
  const sliderRef = useRef(null);
  const lettersRef = useRef([]);
  const bigTextRef = useRef(null);

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

  return (
    <footer className="bg-[#30303c] text-zinc-300 border-t border-zinc-800">

      {/* ── TOP SECTION ─────────────────────────────────────────── */}
      <div className="max-w-[90%] mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Contact */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">Contact</h3>
          <ul className="space-y-4 text-base">
            <li>
              <a href="mailto:hello@example.com"
                className="group flex items-center gap-3 text-zinc-400 hover:text-orange-400 transition-all duration-300">
                <span className="opacity-70 group-hover:opacity-100 text-2xl">📧</span>
                hello@example.com
              </a>
            </li>
            <li>
              <a href="tel:+919876543210"
                className="group flex items-center gap-3 text-zinc-400 hover:text-orange-400 transition-all duration-300">
                <span className="opacity-70 group-hover:opacity-100 text-2xl">📞</span>
                +91 98765 43210
              </a>
            </li>
            <li>
              <a href="https://maps.google.com/?q=Delhi,India" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 text-zinc-400 hover:text-orange-400 transition-all duration-300">
                <span className="opacity-70 group-hover:opacity-100 text-2xl">📍</span>
                Delhi, India
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">Services</h3>
          <ul className="space-y-3 text-zinc-400">
            {["Web Development", "UI/UX Design", "App Development", "Consulting"].map((s) => (
              <li key={s} className="hover:text-orange-400 cursor-pointer transition-colors duration-300">{s}</li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">Follow Us</h3>
          <div className="flex flex-col gap-3 text-lg">
            {[
              { href: "https://x.com/Revagraphics", icon: <FaTwitter size={22} />, label: "Twitter" },
              { href: "https://www.instagram.com/werevagraphics/", icon: <FaInstagram size={22} />, label: "Instagram" },
              { href: "https://www.facebook.com/werevagraphics", icon: <FaFacebook size={22} />, label: "Facebook" },
              { href: "https://www.linkedin.com/company/werevagraphics", icon: <FaLinkedin size={22} />, label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 text-zinc-400 hover:text-orange-400 transition-all duration-300 hover:scale-105">
                {icon}
                <span className="font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

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
                Overall client rating is <b>4.9 out of 8,500</b> clients for Reva Graphics.
              </p>
            </div>

            {/* Mobile badge carousel */}
            <div className="block md:hidden w-screen relative -mx-[50vw] overflow-hidden">
              <div ref={sliderRef} className="flex gap-10 w-max items-center px-6">
                {[badge1, badge2, itfirm, goodfirm, badge1, badge2, itfirm, goodfirm].map((img, i) => (
                  <img key={i} src={img} alt={`badge-${i}`} className="h-20 opacity-80" />
                ))}
              </div>
            </div>

            {/* Desktop badge grid */}
            <div className="hidden md:flex flex-wrap justify-center gap-8 items-center">
              {[badge1, badge2, itfirm, goodfirm].map((img, i) => (
                <img key={i} src={img} alt={`badge-${i}`}
                  className="h-28 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300" />
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link to="/contact"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600
                           px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300
                           shadow-lg hover:shadow-orange-500/40 hover:scale-105">
                Our Brochure →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIG TEXT — REJOUICE STYLE LETTER DROP ───────────────── */}
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
                  style={{ display: "inline-block", width: "clamp(12px, 2.5vw, 40px)" }}
                />
              );
            }
            return (
              /* overflow:hidden clips the letter as it travels up→down */
              <span
                key={i}
                style={{ overflow: "hidden", display: "inline-block", lineHeight: 1 }}
              >
                <span
                  ref={(el) => (lettersRef.current[i] = el)}
                  style={{
                    display: "inline-block",
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 900,
                    /* fluid: 64px on mobile → 160px on wide screens */
                    fontSize: "clamp(64px, 13.5vw, 160px)",
                    color: "#ffffff",
                    letterSpacing: "-0.035em",
                    lineHeight: 0.9,
                    textTransform: "lowercase",
                    /* GSAP will animate from yPercent:-120, opacity:0 */
                    opacity: 0,
                  }}
                >
                  {ch}
                </span>
              </span>
            );
          })}
        </div>

        {/* subtle divider line below text */}
        <div className="mt-5 mx-4 sm:mx-8 h-px bg-zinc-700 opacity-40" />
      </section>

      {/* ── BOTTOM BAR ──────────────────────────────────────────── */}
      <div className="bg-[#30303c] border-t border-zinc-800">
        <div className="max-w-[90%] mx-auto px-6 py-8
                        flex flex-col md:flex-row items-center justify-between gap-4
                        text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="https://revagraphics.com/"
              className="hover:text-orange-400 transition-colors text-zinc-400">
              Reva Graphics
            </a>{" "}
            All rights reserved
          </p>
          <p className="flex items-center gap-2">
            Made with ❤️ by{" "}
            <span className="text-orange-400 font-medium">Reva Graphics</span>
          </p>
        </div>
      </div>

    </footer>
  );
}