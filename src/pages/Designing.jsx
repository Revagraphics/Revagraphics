import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SelectedWork from "../components/SelectedWork";
import Expertise from "../components/Expertise";
import { Link } from "react-router-dom";
import WorkFilter from "../components/WorkFilter";
import Seo from "../components/Seo";

const projectsData = [
  {
    title: "Aarsan Shipping",
    description: "Trusted Logistics with 24/7 Global Reach & Customs Expertise",
    image:
      "https://plus.unsplash.com/premium_photo-1661880224695-47dc8805c4ea?w=500&auto=format&fit=crop&q=60",
    category: "Logistics",
    link: "https://example.com",
  },
  {
    title: "Eternative Herbals",
    description: "Bringing Ancient Ayurvedic Wisdom into Modern Wellness",
    image:
      "https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=687&auto=format&fit=crop",
    category: "E-Commerce",
    link: "#",
  },
  {
    title: "UrbanFit Gym",
    description:
      "Transform Your Body with Expert Trainers & Smart Fitness Plans",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fitness",
    link: "#",
  },
  {
    title: "CodeNest",
    description: "Innovative Software Solutions for Startups & Enterprises",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60",
    category: "Technology",
    link: "#",
  },
  {
    title: "Foodie's Hub",
    description:
      "Delicious Food Delivered Fast with Premium Quality Ingredients",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60",
    category: "Food",
    link: "#",
  },
  {
    title: "EduSmart Academy",
    description: "Empowering Students with Modern Learning Techniques",
    image:
      "https://media.istockphoto.com/id/1262283526/photo/indian-girl-student-wear-headphones-learning-online-watching-webinar-class-looking-at-laptop.jpg?s=2048x2048&w=is&k=20&c=1qXe3QcWLA0WkA5asYq16P1YfOhInYO1aul5NftkTk8=",
    category: "Education",
    link: "#",
  },
  {
    title: "TravelXplore",
    description: "Discover the World with Customized Travel Experiences",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
    category: "Travel",
    link: "#",
  },
  {
    title: "StyleAura",
    description: "Trendy Fashion That Defines Your Personality",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    link: "#",
  },
  {
    title: "GreenScape",
    description: "Sustainable Landscaping Solutions for Modern Living",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&auto=format&fit=crop&q=60",
    category: "Environment",
    link: "#",
  },
  {
    title: "MediCare Plus",
    description: "Advanced Healthcare Services with Compassion & Care",
    image:
      "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljYXJlfGVufDB8fDB8fHww",
    category: "Healthcare",
    link: "#",
  },
];

export default function designing() {
  return (
    <>
      <Seo
        title="Designing Services | Reva Graphics"
        description="Professional graphic designing services including branding, UI/UX, and creative visuals by Reva Graphics."
      />

      <div className="bg-white">
        <Navbar />

        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-zinc-50 via-white to-slate-50 overflow-hidden">
          {/* Subtle Light Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(at_center,#e0e7ff30_0%,transparent_70%)]"></div>

          <div className="max-w-[80%] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 pt-12 lg:pt-0">
                <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-orange-200 shadow-sm">
                  <span className="text-orange-600 text-sm font-semibold tracking-widest">
                    PREMIUM DESIGNING
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-tight tracking-tighter">
                  We Design <span className="text-orange-600">Experiences</span>
                  <br />
                  That Convert
                </h1>

                <p className="text-xl text-zinc-600 max-w-lg">
                  From stunning branding to high-converting websites and
                  packaging — we craft designs that don't just look good, they
                  perform.
                </p>

                <div className="flex flex-wrap gap-4 pt-6">
                  <Link to="/portfolio">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-9 py-4 rounded-2xl font-semibold transition-all active:scale-95 shadow-lg shadow-orange-500/30">
                      Explore Our Work
                    </button>
                  </Link>
                  <Link to="/development">
                    {" "}
                    <button className="border border-zinc-300 hover:border-zinc-400 text-zinc-700 px-9 py-4 rounded-2xl font-medium transition-all">
                      View Services
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Visual - Light Version */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Main Decorative Frame */}
                  <div className="w-[320px] md:w-[420px] lg:w-[480px] aspect-square bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 rounded-[4rem] rotate-6 shadow-2xl overflow-hidden">
                    {/* Inner Card */}
                    <div className="absolute inset-4 bg-white rounded-[3rem] flex items-center justify-center shadow-inner">
                      <div className="text-center">
                        <div className="text-6xl mb-4 text-orange-500">✦</div>
                        <p className="text-2xl font-light text-zinc-500">
                          Premium
                        </p>
                        <p className="text-4xl font-bold tracking-wider text-zinc-900">
                          DESIGN STUDIO
                        </p>
                        <p className="text-4xl font-bold tracking-wider text-orange-600">
                          REVA GRAPHICS
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Glow / Highlight */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-orange-200/30 to-transparent rounded-[5rem] -z-10 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Light Theme */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 text-sm flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-300 to-transparent"></div>
          </div>
        </section>

        <WorkFilter
          title="Our Creative Work"
          subtitle="We design and develop high-impact digital experiences across industries"
          projects={projectsData}
          categories={[
            "All",
            "Logistics",
            "E-Commerce",
            "Education",
            "Informative & Services",
            "International Site",
          ]}
        />

        <SelectedWork />

        <Expertise />

        <Footer />
      </div>
    </>
  );
}
