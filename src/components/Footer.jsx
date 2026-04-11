import React from "react";

import badge1 from "../assets/batch1.png";
import badge2 from "../assets/batch2.png";
import itfirm from "../assets/itfirm.png";
import goodfirm from "../assets/goodfirm.png";
import bottomLogo from "../assets/footer-logo.png"
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
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
                </span>
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
                </span>
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
                </span>
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

            {/* BADGES */}
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <img
                src={badge1}
                alt="Top App Development"
                className="h-28 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />

              <img
                src={badge2}
                alt="Top Web Design"
                className="h-28 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />

              <img
                src={itfirm}
                alt="Top Developer"
                className="h-28 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />

              <img
                src={goodfirm}
                alt="Best IT Company"
                className="h-28 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />
            </div>

            {/* CTA BUTTON */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-3
                         bg-orange-500 hover:bg-orange-600
                         px-8 py-4 rounded-xl
                         font-semibold text-lg transition-all duration-300
                         shadow-lg hover:shadow-orange-500/40 hover:scale-105"
              >
                Our Brochure →
              </a>
            </div>
          </div>
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
              <a href="">Reva Graphics</a>
            </span>
            . All rights reserved
          </p>

          <p className="flex items-center gap-2">
            Made with ❤️ by{" "}
            <span className="text-orange-400 font-medium">Reva Graphics</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
