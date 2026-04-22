import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const reviews = [
  {
    id: 1,
    quote:
      "David is the friendly face behind our exceptional customer service. With a warm and approachable attitude, he makes every interaction memorable.",
    name: "Malika Kenny",
    role: "UI Dev · TechOne",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    accent: "#FF5733",
  },
  {
    id: 2,
    quote:
      "Working with this team transformed our entire workflow. The attention to detail and creative problem-solving is second to none.",
    name: "James Okafor",
    role: "Product Lead · Nexus",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80",
    accent: "#3B82F6",
  },
  {
    id: 3,
    quote:
      "An absolute pleasure to collaborate with. The results exceeded every expectation and the process was seamless from start to finish.",
    name: "Sophia Laurent",
    role: "Creative Director · Bloom",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&q=80",
    accent: "#8B5CF6",
  },
  {
    id: 4,
    quote:
      "Innovative, reliable, and genuinely passionate. This is the kind of team you want on your side for any high-stakes project.",
    name: "Tariq Al-Hassan",
    role: "CTO · Veritas Labs",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    accent: "#10B981",
  },
];

function StarRating({ count, color }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const cardRef = useRef(null);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);
  const imageRef = useRef(null);
  const starsRef = useRef(null);
  const accentBarRef = useRef(null);
  const dotsRef = useRef([]);

  const review = reviews[active];

  // Entrance animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "expo.out" },
      );
      gsap.fromTo(
        starsRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.3, ease: "power3.out" },
      );
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.45, ease: "power3.out" },
      );
      gsap.fromTo(
        authorRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: "power3.out" },
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.08, x: 30 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "expo.out",
        },
      );
      gsap.fromTo(
        accentBarRef.current,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.8, delay: 0.4, ease: "expo.out" },
      );
    });
    return () => ctx.revert();
  }, []);

  const goTo = (idx) => {
    if (animating || idx === active) return;
    setAnimating(true);

    // Exit animation
    const tl = gsap.timeline({
      onComplete: () => {
        setActive(idx);
        setAnimating(false);
      },
    });

    tl.to([starsRef.current, quoteRef.current, authorRef.current], {
      opacity: 0,
      y: -18,
      stagger: 0.06,
      duration: 0.3,
      ease: "power2.in",
    });
    tl.to(
      imageRef.current,
      { opacity: 0, scale: 1.06, x: 20, duration: 0.3, ease: "power2.in" },
      "<",
    );
  };

  // Enter animation after slide change
  useEffect(() => {
    if (animating) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        starsRef.current,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
      );
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55, delay: 0.08, ease: "power3.out" },
      );
      gsap.fromTo(
        authorRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.15, ease: "power3.out" },
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.07, x: 22 },
        { opacity: 1, scale: 1, x: 0, duration: 0.7, ease: "expo.out" },
      );
      gsap.to(accentBarRef.current, {
        backgroundColor: review.accent,
        duration: 0.5,
        ease: "power2.inOut",
      });
    });
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Dot hover effect
  const handleDotHover = (idx) => {
    gsap.to(dotsRef.current[idx], {
      scale: 1.5,
      duration: 0.2,
      ease: "back.out",
    });
  };
  const handleDotLeave = (idx) => {
    gsap.to(dotsRef.current[idx], {
      scale: 1,
      duration: 0.2,
      ease: "back.out",
    });
  };

  return (
    <div className="min-h-[80vh] bg-[#F0EDE8] flex flex-col items-center justify-center p-6 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
        What Our Clients Say
      </h2>

      <div
        ref={cardRef}
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden font-body
             flex flex-col sm:flex-row"
        style={{ minHeight: 320 }}
      >
        {/* Accent bar */}
        <div
          ref={accentBarRef}
          className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl z-10"
          style={{
            backgroundColor: review.accent,
            transition: "background-color 0.5s",
          }}
        />

        {/* Image — top on mobile, right on desktop */}
        <div
          ref={imageRef}
          className="relative w-full h-56 flex-shrink-0 overflow-hidden
               sm:w-64 sm:h-auto sm:rounded-r-3xl sm:rounded-tl-none rounded-t-3xl"
        >
          <img
            src={review.image}
            alt={review.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ transition: "none" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, rgba(255,255,255,0.18) 0%, transparent 30%)`,
            }}
          />
        </div>

        {/* Content — bottom on mobile, left on desktop */}
        <div
          className="flex-1 flex flex-col justify-between px-7 py-8 sm:px-10 sm:py-10 sm:pr-6"
          style={{ minWidth: 0 }}
        >
          <div>
            <div ref={starsRef}>
              <StarRating count={review.rating} color={review.accent} />
            </div>

            <blockquote
              ref={quoteRef}
              className="font-display text-[1.2rem] sm:text-[1.35rem] leading-snug text-gray-900 mb-7"
              style={{ letterSpacing: "-0.01em" }}
            >
              "{review.quote}"
            </blockquote>

            <div ref={authorRef}>
              <p className="font-semibold text-gray-900 text-sm tracking-wide">
                {review.name}
              </p>
              <p className="text-gray-400 text-xs mt-0.5">{review.role}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2.5 mt-8">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                ref={(el) => (dotsRef.current[i] = el)}
                onClick={() => goTo(i)}
                onMouseEnter={() => handleDotHover(i)}
                onMouseLeave={() => handleDotLeave(i)}
                className="w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 outline-none focus:outline-none"
                style={{
                  backgroundColor: i === active ? review.accent : "transparent",
                  borderColor: i === active ? review.accent : "#CBD5E1",
                }}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
