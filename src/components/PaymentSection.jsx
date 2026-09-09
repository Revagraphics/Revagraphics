import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ShimmerText from "./ShimmerText";
import DecorativeUnderline from './DecorativeUnderline';

import py1 from "../assets/google-pay.webp";
import py2 from "../assets/pay-pal.webp";
import py3 from "../assets/visa.webp";
import py4 from "../assets/discover.webp";
import py5 from "../assets/maestro.webp";

const images = [
  { id: 1, img: py1 },
  { id: 2, img: py2 },
  { id: 3, img: py3 },
  { id: 4, img: py4 },
  { id: 5, img: py5 },
];

export default function PaymentSection() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const loopedItems = [...images, ...images];

    track.style.gap = '1.5rem';
    track.innerHTML = loopedItems
      .map(
        (image) => `
          <div class="flex-shrink-0 bg-zinc-100 rounded-3xl overflow-hidden shadow-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300" style="width:160px;height:100px;">
            <img src="${image.img}" alt="Payment method ${image.id}" class="w-full h-full object-contain transition-transform duration-500 hover:scale-110" draggable="false" />
          </div>
        `,
      )
      .join('');

    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 22,
      ease: 'none',
      repeat: -1,
      onRepeat: () => gsap.set(track, { x: 0 }),
    });

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#313131] tracking-tight">
            <ShimmerText>Flexible</ShimmerText> Payment Options
          </h2>
          <DecorativeUnderline
            width="380px"
            className="mt-6 mx-auto md:w-[380px] lg:w-[450px]"
            centerColor="#3B82F6"
          />
          <p className="text-[#313131] mt-3 text-lg">
            Choose the payment method that works best for you
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex will-change-transform select-none"
              style={{ width: 'max-content' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

