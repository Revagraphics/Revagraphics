import { useState, useRef, useEffect } from "react";

const tabs = [
  {
    id: "mission",
    tag: "What We Do",
    label: "Our Mission",
    emoji: "🚀",
    accent: "#FF5C35",
    accentLight: "#fff3f0",
    content:
      "We are on a mission to satisfy all our valuable clients through high-quality and result-oriented Digital Design and Branding Services across the globe. Our creative and innovative ideas help businesses transform into memorable brands through websites and creatives that provide enormous brand value over time.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
    imageAlt: "Team collaborating on a mission",
    stats: [
      { value: "500+", label: "Projects Delivered" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "12+", label: "Years of Impact" },
    ],
  },
  {
    id: "vision",
    tag: "Where We're Headed",
    label: "Our Vision",
    emoji: "👁️",
    accent: "#3B5BDB",
    accentLight: "#eef2ff",
    content:
      "Our Vision to break the digital world with our highly innovative thought leadership and delivering capacity is bolstered by our team of industry experts. From the inception of a project, through its delivery and beyond, we diligently work to understand our clients and provide them with intelligent digital design solutions and support.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
    imageAlt: "Visionary team planning the future",
    stats: [
      { value: "40+", label: "Global Markets" },
      { value: "150+", label: "Expert Team" },
      { value: "∞", label: "Ambition" },
    ],
  },
  {
    id: "thought",
    tag: "Where We're Headed",
    label: "Our thought",
    emoji: "👁️",
    accent: "#3d3d3d",
    accentLight: "#ffdb00",
    content:
      "Our thought to break the digital world with our highly innovative thought leadership and delivering capacity is bolstered by our team of industry experts. From the inception of a project, through its delivery and beyond, we diligently work to understand our clients and provide them with intelligent digital design solutions and support.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
    imageAlt: "Visionary team planning the future",
    stats: [
      { value: "40+", label: "Global Markets" },
      { value: "150+", label: "Expert Team" },
      { value: "∞", label: "Ambition" },
    ],
  },
];

function useAnimateIn(dep) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.55s cubic-bezier(.4,0,.2,1), transform 0.55s cubic-bezier(.4,0,.2,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 30);
    return () => clearTimeout(t);
  }, [dep]);
  return ref;
}

export default function MissionVision() {
  const [activeTab, setActiveTab] = useState("vision");
  const [imgLoaded, setImgLoaded] = useState(false);
  const active = tabs.find((t) => t.id === activeTab);
  const contentRef = useAnimateIn(activeTab);
  const imgRef = useAnimateIn(activeTab);

  return (
    <section
      style={{ background: "#f7f4f0", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}
      className="flex items-center justify-center py-20 px-4"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;1,9..144,400&family=DM+Sans:wght@400;500;600&display=swap');
        .ff-display { font-family: 'Fraunces', serif; }
        .ff-body { font-family: 'DM Sans', sans-serif; }
        .tab-pill {
          transition: background 0.25s, color 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .img-fade { transition: opacity 0.45s ease; }
        .stat-card { transition: transform 0.2s ease; }
        .stat-card:hover { transform: translateY(-3px); }
      `}</style>

      <div style={{ maxWidth: 1100, width: "100%" }}>

        {/* Section eyebrow */}
        <div className="text-center mb-12">
          <span
            className="ff-body inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "#fff", color: "#888", border: "1px solid #e5e5e5" }}
          >
            Who We Are
          </span>
          <h2
            className="ff-display text-4xl md:text-5xl font-bold text-gray-900 mt-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Driven by purpose,<br />
            <em style={{ color: active.accent, fontStyle: "italic" }}>guided by vision.</em>
          </h2>
        </div>

        {/* Tab pills — CATEGORY TAGS ON TOP */}
        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setImgLoaded(false); }}
              className="tab-pill ff-body flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 outline-none focus:outline-none"
              style={{
                background: activeTab === tab.id ? tab.accent : "#fff",
                color: activeTab === tab.id ? "#fff" : "#555",
                borderColor: activeTab === tab.id ? tab.accent : "#e5e5e5",
                boxShadow: activeTab === tab.id ? `0 6px 24px ${tab.accent}40` : "none",
              }}
            >
              <span style={{ fontSize: 16 }}>{tab.emoji}</span>
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-widest mr-1 px-2 py-0.5 rounded-full"
                style={{
                  background: activeTab === tab.id ? "rgba(255,255,255,0.2)" : tab.accentLight,
                  color: activeTab === tab.id ? "#fff" : tab.accent,
                }}
              >
                {tab.tag}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main card */}
        <div
          className="rounded-[2rem] overflow-hidden shadow-2xl"
          style={{ background: "#fff", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 460 }}
        >
          {/* Left: Content */}
          <div
            ref={contentRef}
            className="flex flex-col justify-between p-10 lg:p-14"
            style={{ borderRight: "1px solid #f0f0f0" }}
          >
            {/* Tag badge */}
            <div>
              <span
                className="ff-body inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                style={{ background: active.accentLight, color: active.accent }}
              >
                <span>{active.emoji}</span> {active.tag}
              </span>

              <h3
                className="ff-display text-3xl lg:text-4xl font-bold text-gray-900 mb-5"
                style={{ letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                {active.label}
              </h3>

              <p
                className="ff-body text-[15px] leading-[1.8] text-gray-500 mb-10"
              >
                {active.content}
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {active.stats.map((s) => (
                <div
                  key={s.label}
                  className="stat-card rounded-2xl p-4"
                  style={{ background: active.accentLight }}
                >
                  <div
                    className="ff-display text-2xl font-bold mb-0.5"
                    style={{ color: active.accent }}
                  >
                    {s.value}
                  </div>
                  <div className="ff-body text-xs text-gray-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative overflow-hidden" style={{ minHeight: 380 }}>
            <img
              ref={imgRef}
              src={active.image}
              alt={active.imageAlt}
              onLoad={() => setImgLoaded(true)}
              className="img-fade absolute inset-0 w-full h-full object-cover object-center"
              style={{ opacity: imgLoaded ? 1 : 0 }}
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${active.accent}55 0%, transparent 60%)`,
              }}
            />
            {/* Floating label */}
            <div
              className="absolute bottom-6 left-6 right-6 rounded-2xl px-5 py-4 backdrop-blur-md"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <p className="ff-display text-white text-lg font-bold italic leading-snug">
                "{active.label} — shaping tomorrow, today."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom decorative dots */}
        <div className="flex justify-center gap-2 mt-8">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="cursor-pointer rounded-full transition-all duration-300"
              style={{
                width: activeTab === tab.id ? 28 : 10,
                height: 10,
                background: activeTab === tab.id ? tab.accent : "#ddd",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}