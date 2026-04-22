import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import badge1 from "../assets/batch1.png";
import badge2 from "../assets/batch2.png";
import itfirm from "../assets/itfirm.png";
import goodfirm from "../assets/goodfirm.png";
import bottomLogo from "../assets/footer-logo.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

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
      {/* TOP SECTION */}
      <div
        className="max-w-[90%] mx-auto px-6 py-16 grid gap-12 
                    sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">Contact</h3>

          <ul className="space-y-4 text-base">
            {/* Email */}
            <li>
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-3 text-zinc-400 
                   hover:text-orange-400 transition-all duration-300"
              >
                <span className="opacity-70 group-hover:opacity-100 text-2xl">
                  📧
                </span>{" "}
                hello@example.com
              </a>
            </li>

            {/* Phone */}
            <li>
              <a
                href="tel:+919876543210"
                className="group flex items-center gap-3 text-zinc-400 
                   hover:text-orange-400 transition-all duration-300"
              >
                <span className="opacity-70 group-hover:opacity-100 text-2xl">
                  📞
                </span>{" "}
                +91 98765 43210
              </a>
            </li>

            {/* Location */}
            <li>
              <a
                href="https://maps.google.com/?q=Delhi,India"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-zinc-400 
                   hover:text-orange-400 transition-all duration-300"
              >
                <span className="opacity-70 group-hover:opacity-100 text-2xl">
                  📍
                </span>{" "}
                Delhi, India
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">Services</h3>

          <ul className="space-y-3 text-zinc-400">
            <li className="hover:text-orange-400 cursor-pointer transition-colors duration-300">
              Web Development
            </li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors duration-300">
              UI/UX Design
            </li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors duration-300">
              App Development
            </li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors duration-300">
              Consulting
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">Follow Us</h3>

          <div className="flex flex-col gap-3 text-lg">
            <a
              href="https://x.com/Revagraphics"
              className="group flex items-center gap-3 text-zinc-400 hover:text-orange-400 
                       transition-all duration-300 hover:scale-105"
              title="Twitter"
              target="_blank"
            >
              <FaTwitter size={22} />
              <span className="font-medium">Twitter</span>
            </a>

            <a
              href="https://www.instagram.com/werevagraphics/"
              className="group flex items-center gap-3 text-zinc-400 hover:text-orange-400 
                       transition-all duration-300 hover:scale-105"
              title="Instagram"
              target="_blank"
            >
              <FaInstagram size={22} />
              <span className="font-medium">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/werevagraphics"
              className="group flex items-center gap-3 text-zinc-400 hover:text-orange-400 
                       transition-all duration-300 hover:scale-105"
              title="Facebook"
              target="_blank"
            >
              <FaFacebook size={22} />
              <span className="font-medium">Facebook</span>
            </a>

            <a
              href="https://www.linkedin.com/company/werevagraphics"
              className="group flex items-center gap-3 text-zinc-400 hover:text-orange-400 
                       transition-all duration-300 hover:scale-105"
              title="LinkedIn"
              target="_blank"
            >
              <FaLinkedin size={22} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <section className="bg-[#30303c] text-white border-t border-zinc-800">
        <div className="max-w-[90%] mx-auto px-6 py-12">
          <div
            className="flex flex-col lg:flex-row 
                        items-center justify-between gap-12"
          >
            {/* LEFT SIDE - Logo + Name + Rating */}
            <div className="text-center lg:text-left space-y-4">
              {/* Logo + Name */}
              {/* <h2 className="text-4xl font-bold tracking-wide">
                Reva{" "}
                <span className="font-light text-orange-400">Graphics</span>
              </h2> */}
              <div>
                <img src={bottomLogo} alt="Reva Graphics" />
              </div>

              {/* Stars */}
              <div className="flex justify-center lg:justify-start gap-1 text-yellow-400 text-2xl">
                ★ ★ ★ ★ ★
              </div>

              <p className="text-base text-zinc-300 max-w-sm">
                Overall client rating is <b>4.9 out of 8,500</b> clients for
                Reva Graphics.
              </p>
            </div>

            {/* MOBILE: GSAP CAROUSEL */}
            <div className="block md:hidden w-screen relative -mx-[50vw] overflow-hidden">
              <div
                ref={sliderRef}
                className="flex gap-10 w-max items-center px-6"
              >
                {[
                  badge1,
                  badge2,
                  itfirm,
                  goodfirm,
                  badge1,
                  badge2,
                  itfirm,
                  goodfirm,
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`badge-${i}`}
                    className="h-20 opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP: NORMAL GRID */}
            <div className="hidden md:flex flex-wrap justify-center gap-8 items-center">
              {[badge1, badge2, itfirm, goodfirm].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`badge-${i}`}
                  className="h-28 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
                />
              ))}
            </div>

            {/* CTA BUTTON */}
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3
                         bg-orange-500 hover:bg-orange-600
                         px-8 py-4 rounded-xl
                         font-semibold text-lg transition-all duration-300
                         shadow-lg hover:shadow-orange-500/40 hover:scale-105"
              >
                Our Brochure →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Section with Animation */}
      <section className="bg-[#30303c] text-white border-t py-2 sm:py-6 md:py-4 w-full overflow-x-auto">
        <div className="z-[9999] flex justify-center w-full px-0 sm:px-6">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 1000 220"
            xmlns="http://www.w3.org/2000/svg"
            className="animated-svg w-full"
            preserveAspectRatio="xMidYMid meet"
            style={{
              maxWidth: "1200px",
              minHeight: "80px",
              height: "auto",
            }}
          >
            <defs>
              <filter
                id="logoShadow"
                x="-15%"
                y="-20%"
                width="150%"
                height="150%"
              >
                <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
                <feOffset dx="1" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.55" intercept="0" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Scaling group to ensure text is fully visible (no left/right cutoff) */}
            {/* Scale factor 0.58 was calculated to fit "REVA GRAPHICS" (font-size 150, bold Poppins) inside the 1000-unit viewBox with safe margins */}
            <g transform="translate(500,110) scale(0.58) translate(-500,-110)">
              <g filter="url(#logoShadow)">
                <text
                  x="500"
                  y="110"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="'Poppins', system-ui, -apple-system, sans-serif"
                  fontSize="210"
                  fontWeight="900"
                  letterSpacing="-5"
                  fill="#3d3d3d"
                  strokeWidth="1"
                  stroke="#fff"
                >
                  REVA GRAPHICS
                </text>
              </g>
            </g>
          </svg>
        </div>
      </section>

      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-800">
        <div
          className="max-w-[90%] mx-auto px-6 py-8 
                        flex flex-col md:flex-row 
                        items-center justify-between gap-4
                        text-base text-zinc-400"
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="hover:text-orange-400 transition-colors">
              <a href="https://revagraphics.com/">Reva Graphics</a>
            </span>{" "}
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
