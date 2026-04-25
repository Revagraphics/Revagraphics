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

/* ⭐ STAR RATING */
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

  const review = reviews[active] || reviews[0];

  /* ================= ENTRANCE ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "expo.out" }
      );

      gsap.fromTo(
        starsRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.3 }
      );

      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.45 }
      );

      gsap.fromTo(
        authorRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.6 }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.08, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 1, delay: 0.2 }
      );

      gsap.fromTo(
        accentBarRef.current,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.8, delay: 0.4 }
      );
    });

    return () => ctx.revert();
  }, []);

  /* ================= SLIDE CHANGE ================= */
  const goTo = (idx) => {
    if (animating || idx === active) return;
    setAnimating(true);

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
    });

    tl.to(
      imageRef.current,
      { opacity: 0, scale: 1.06, x: 20, duration: 0.3 },
      "<"
    );
  };

  /* ================= ENTER ANIMATION ================= */
  useEffect(() => {
    if (animating) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        starsRef.current,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.5 }
      );

      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55 }
      );

      gsap.fromTo(
        authorRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5 }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.07, x: 22 },
        { opacity: 1, scale: 1, x: 0, duration: 0.7 }
      );

      gsap.to(accentBarRef.current, {
        backgroundColor: review.accent,
        duration: 0.5,
      });
    });

    return () => ctx.revert();
  }, [active]);

  /* ================= DOT ANIMATION ================= */
  const handleDotHover = (idx) => {
    if (!dotsRef.current[idx]) return;
    gsap.to(dotsRef.current[idx], { scale: 1.5, duration: 0.2 });
  };

  const handleDotLeave = (idx) => {
    if (!dotsRef.current[idx]) return;
    gsap.to(dotsRef.current[idx], { scale: 1, duration: 0.2 });
  };

  return (
    <div className="min-h-[80vh] bg-[#F0EDE8] flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
        What Our Clients Say
      </h2>

      <div
        ref={cardRef}
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col sm:flex-row"
      >
        {/* Accent Bar */}
        <div
          ref={accentBarRef}
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ backgroundColor: review.accent }}
        />

        {/* Image */}
        <div ref={imageRef} className="w-full h-56 sm:w-64 overflow-hidden">
          <img
            src={review.image}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          <div ref={starsRef}>
            <StarRating count={review.rating} color={review.accent} />
          </div>

          <p ref={quoteRef} className="text-lg mb-6">
            "{review.quote}"
          </p>

          <div ref={authorRef}>
            <p className="font-semibold">{review.name}</p>
            <p className="text-sm text-gray-500">{review.role}</p>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                type="button"
                ref={(el) => (dotsRef.current[i] = el)}
                onClick={() => goTo(i)}
                onMouseEnter={() => handleDotHover(i)}
                onMouseLeave={() => handleDotLeave(i)}
                className="w-3 h-3 rounded-full border-2"
                style={{
                  backgroundColor:
                    i === active ? review.accent : "transparent",
                  borderColor:
                    i === active ? review.accent : "#ccc",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
