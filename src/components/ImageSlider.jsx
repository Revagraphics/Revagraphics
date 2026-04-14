import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

import bg1 from "../assets/big-slider1.jpg";
import bg2 from "../assets/big-slider2.jpg";
import bg3 from "../assets/big-slider6.webp";
import bg4 from "../assets/big-slider8.webp";

gsap.registerPlugin(Draggable);

const images = [bg1, bg2, bg3, bg4];

const ImageSlider = () => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const draggableRef = useRef(null);

 useEffect(() => {
  if (!trackRef.current) return;

  const slideWidth = 1100;
  const gap = 30;
  const totalWidth = (slideWidth + gap) * images.length;

  // Duplicate slides for infinite illusion
  const originalHTML = trackRef.current.innerHTML;
  trackRef.current.innerHTML += originalHTML;

  let x = 0;

  // Continuous infinite animation (NO STOP EVER)
  tweenRef.current = gsap.to({}, {
    duration: 32,
    repeat: -1,
    ease: "none",
    onUpdate: function () {
      x -= 2; // speed control (increase for faster)

      // Loop seamlessly
      if (x <= -totalWidth) x = 0;

      gsap.set(trackRef.current, { x });
    }
  });

  // Draggable WITHOUT breaking animation
  draggableRef.current = Draggable.create(trackRef.current, {
    type: "x",
    inertia: true,
    dragClickables: true,
    allowContextMenu: true,
    preventDefault: false,

    onDrag: function () {
      x = this.x; // sync drag position
    },

    onThrowUpdate: function () {
      x = this.x; // keep sync during momentum
    }

  })[0];

  return () => {
    tweenRef.current?.kill();
    draggableRef.current?.kill();
  };
}, []);


  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f5f5f5]">
      {/* Full Screen Background Image */}
    

      {/* Dark Overlay */}
      <div className="absolute inset-0  z-10" />

      {/* Slider Container */}
      <div className="relative z-20 h-full flex items-center">
  <div className="w-full overflow-hidden py-8">
    <div
      ref={trackRef}
      className="flex will-change-transform select-none gap-8"
      style={{ cursor: 'grab' }}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="branding_slide 
                     min-w-[420px] 
                     w-[58vh] 
                     h-[42vh] 
                     flex-shrink-0 
                     rounded-3xl 
                     overflow-hidden 
                     shadow-2xl 
                     bg-zinc-900
                     transition-all duration-300 
                     hover:scale-[1.04] hover:shadow-3xl"
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            draggable={false}
          />
        </div>
      ))}
    </div>
  </div>
</div>
    </section>
  );
};

export default ImageSlider;