import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AnimatedText = ({
  children,
  as: Tag = "h1", // 👈 dynamic tag
  className = "",
  stagger = 0.05,
  duration = 0.8,
  delay = 0.2,
  y = 80,
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Get only text (safe fallback)
    const text = el.innerText;

    // Split into letters (preserve spaces)
    const letters = text.split("");

    el.innerHTML = letters
      .map(
        (letter) =>
          `<span class="inline-block will-change-transform">${
            letter === " " ? "&nbsp;" : letter
          }</span>`
      )
      .join("");

    const spans = el.querySelectorAll("span");

    gsap.from(spans, {
      y,
      opacity: 0,
      duration,
      stagger,
      ease: "power3.out",
      delay,
    });
  }, [children, stagger, duration, delay, y]);

  return (
    <Tag
      ref={ref}
      className={`overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default AnimatedText;
