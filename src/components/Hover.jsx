// components/HoverLiftText.jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hover = ({ children, className = "", ...props }) => {
  const containerRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(topRef.current, {
      y: -28,
      duration: 0.45,
      ease: "power3.out",
    }).to(
      bottomRef.current,
      {
        y: -28,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.35"
    );

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      tl.kill();
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className={`group relative inline-block overflow-hidden ${className}`}
      {...props}
    >
      {/* Original Text */}
      <span ref={topRef} className="relative inline-block will-change-transform">
        {children}
      </span>

      {/* Duplicate Text (comes from bottom) */}
      <span
        ref={bottomRef}
        className="absolute left-0 top-full inline-block will-change-transform"
      >
        {children}
      </span>
    </span>
  );
};

export default Hover;