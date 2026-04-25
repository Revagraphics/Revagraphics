import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import py1 from "../assets/google-pay.webp";
import py2 from "../assets/pay-pal.webp";
import py3 from "../assets/visa.webp";
import py4 from "../assets/discover.webp";
import py5 from "../assets/maestro.webp";

const images = [
  {id:1, img:py1},
  {id:2, img:py2},
  {id:3, img:py3},
  {id:4, img:py4},
  {id:5, img:py5},
];

export default function PaymentSection() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const cardWidth = 220;           // Base card width for desktop
    const gap = 40;
    const singleSetWidth = (cardWidth + gap) * images.length;

    // Duplicate for seamless infinite loop
    trackRef.current.innerHTML += trackRef.current.innerHTML;

    let x = 0;
    const speed = 1.2; // Adjust for faster/slower movement

    tweenRef.current = gsap.to({}, {
      duration: 25,
      repeat: -1,
      ease: "none",
      onUpdate: function () {
        x -= speed;

        // Reset seamlessly when one full set has passed
        if (x <= -singleSetWidth) {
          x = 0;
        }

        gsap.set(trackRef.current, { x: x });
      },
    });

    // Pause animation on hover (better UX)
    const track = trackRef.current;
    const pause = () => tweenRef.current?.pause();
    const play = () => tweenRef.current?.play();

    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', play);

    return () => {
      tweenRef.current?.kill();
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', play);
    };
  }, []);

  return (
    <section className="relative py-20 bg-zinc-100 overflow-hidden">
      <div className="max-w-[100%] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#313131] tracking-tight">
            Flexible Payment Options
          </h2>
          <p className="text-[#313131] mt-3 text-lg">
            Choose the payment method that works best for you
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex will-change-transform select-none"
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 bg-zinc-100 rounded-3xl overflow-hidden shadow-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
                  style={{
                    width: '220px',
                    height: '130px',
                    marginRight: '40px',
                  }}
                >
                  <img
                    src={image.img}
                    alt={`Payment method ${image.id}`}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

