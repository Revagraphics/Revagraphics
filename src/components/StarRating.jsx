import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import bali from "../assets/bali.jpg";
import dhruv from "../assets/dhruv.jpg";
import yashpal from "../assets/yashpal.jpg";
import umesh from "../assets/umesh.jpg";
import ShimmerText from "../components/ShimmerText";
import DecorativeUnderline from "../components/DecorativeUnderline";

const reviews = [
  {
    id: 1,
    quote:
      "The best place Reva Graphics, to have for website designing and my personal experience with them is really great. they are so cool clam and professional with there work & best in it. Just want say thanks to both Neel and Vikas for making a beautiful website for us.",
    name: "Mr. Baliyogeshwar Prajapati",
    rating: 5,
    image: bali,
    accent: "#FF5733",
  },
  {
    id: 2,
    quote:
      "Got a dynamic website designed through them and quite Satisfied with the end product. Found Mr. Neel to be responsive and helpful in all stages.",
    name: "Dhruv Bhadoriya",
    rating: 5,
    image: dhruv,
    accent: "#3B82F6",
  },
  {
    id: 3,
    quote:
      "Designing & digital marketing work executed by your team for my company is excellent performance... thanks to your team... Best wishes to Reva Graphics.",
    name: "Yashpaal Soni",
    rating: 5,
    image: yashpal,
    accent: "#8B5CF6",
  },
  {
    id: 5,
    quote:
      "Best website designing & development service provided by reva graphics to us. Reva Graphics is an excellent web design and development company...",
    name: "Mr. Umesh",
    rating: 5,
    image: umesh,
    accent: "#10B981",
  },
];

function StarRating({ count, color }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 20 20" fill={color}>
          <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);

  const goTo = (index) => {
    if (isAnimating || index === active) return;
    setIsAnimating(true);

    const direction = index > active ? 1 : -1;

    const currentCard = cardsRef.current[active];
    const nextCard = cardsRef.current[index];

    const tl = gsap.timeline({
      onComplete: () => {
        setActive(index);
        setIsAnimating(false);
      },
    });

    // Slide out current card
    tl.to(currentCard, {
      x: -600 * direction,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
    });

    // Slide in next card
    gsap.set(nextCard, { x: 600 * direction, opacity: 0 });
    tl.to(
      nextCard,
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4",
    );
  };

  // Auto-play (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const next = (active + 1) % reviews.length;
        goTo(next);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [active, isAnimating]);

  return (
    <div className="min-h-screen bg-[#F0EDE8] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our <ShimmerText>Prestigious Clients</ShimmerText>  Say...
          </h2>
          <DecorativeUnderline
                            width="320px" // Adjust width as needed
                            className="mt-4 mx-auto"
                            centerColor="#3B82F6" // Optional: change blue color
                          />
          {/* <p className="mt-4 text-gray-600 text-lg">
            Real stories from real clients
          </p> */}
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative h-[520px] flex items-center justify-center overflow-hidden"
        >
          {reviews.map((review, idx) => (
            <div
              key={review.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`absolute w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 ${
                idx === active ? "z-20" : "z-10"
              }`}
              style={{ opacity: idx === active ? 1 : 0 }}
            >
              {/* Image Side */}
              <div className="md:w-5/12 h-80 md:h-auto relative">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:hidden" />
              </div>

              {/* Content Side */}
              <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-between bg-white">
                <div>
                  <StarRating count={review.rating} color={review.accent} />

                  <p className="text-[1.1rem] leading-relaxed mt-6 text-gray-700">
                    "{review.quote}"
                  </p>

                  <div className="mt-8">
                    <p className="font-semibold text-xl text-gray-900">
                      {review.name}
                    </p>
                    {review.role && (
                      <p className="text-gray-500 mt-1">{review.role}</p>
                    )}
                  </div>
                </div>

                {/* Accent Bar */}
                <div
                  className="h-1.5 w-16 rounded-full mt-8"
                  style={{ backgroundColor: review.accent }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              ref={(el) => (dotsRef.current[idx] = el)}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                idx === active
                  ? "bg-white scale-125 shadow-md"
                  : "bg-transparent border-gray-400 hover:border-gray-600"
              }`}
              style={{
                borderColor:
                  idx === active ? reviews[active].accent : undefined,
              }}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => goTo((active - 1 + reviews.length) % reviews.length)}
            className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center transition-all hover:bg-white"
          >
            ←
          </button>
          <button
            onClick={() => goTo((active + 1) % reviews.length)}
            className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center transition-all hover:bg-white"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
