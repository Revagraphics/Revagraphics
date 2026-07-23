import React from "react";
import Seo from "../components/Seo";
import ShimmerText from "../components/ShimmerText";
import DecorativeUnderline from "../components/DecorativeUnderline";
// print video
import Print from "../assets/print.mp4"

export default function Printing() {
  return (
    <>
      <Seo
        title="Printing Services | Reva Graphics"
        description="High-quality printing services for business cards, brochures, banners, and marketing materials."
      />

      <div className="bg-white min-h-screen">

        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
          <video
            src={Print}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/10"></div>
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,152,0,0.22),_transparent_85%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.22),_transparent_85%)]"></div> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-slate-900/10 to-transparent"></div>

          <div className="relative z-10 text-center px-6 sm:px-4 max-w-5xl mx-auto  py-20 mt-2">


            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md text-sm font-medium uppercase tracking-[0.3em] text-white/80 mb-6">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF9800] animate-pulse"></span>
              Precision Printing Studio
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Premium <ShimmerText>Printing</ShimmerText>
            </h1>
            <DecorativeUnderline
            width="520px"
            className="mt-2 mx-auto"
            centerColor="#3B82F6"
            />
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              High-quality prints that make your brand stand out. From business
              cards to large format — we bring your ideas to life with premium
              materials and flawless detail.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-10 py-4 bg-gradient-to-r from-[#FF9800] to-[#E91E63] hover:shadow-[0_0_35px_rgba(255,152,0,0.35)] text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Explore Our Prints
              </button>
              <a
                href="/contact"
                className="px-10 py-4 rounded-full border border-white/30 bg-white/10 text-white font-semibold text-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll"></div>
            </div>
          </div>
        </section>


        <div id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-[#08182b] mb-4">

                What We <ShimmerText>Print</ShimmerText>

              </h2>
              <DecorativeUnderline
                          width="260px"
                          className="mb-4 mx-auto md:w-[320px]"
                          centerColor="#3B82F6"
                        />
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beautiful, professional prints crafted with precision and
                premium materials
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src="https://picsum.photos/id/201/800/600"
                    alt="Business Cards & Stationery"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#08182b]">
                    Business Cards & Stationery
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Premium matte, gloss, and spot UV business cards,
                    letterheads, envelopes, and corporate stationery.
                  </p>
                  <div className="text-orange-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more <span>→</span>
                  </div>
                </div>
              </div>


              <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src="https://picsum.photos/id/237/800/600"
                    alt="Flyers & Brochures"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#08182b]">
                    Flyers, Brochures & Posters
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Eye-catching flyers, tri-fold brochures, catalogs, and large
                    format posters for promotions and events.
                  </p>
                  <div className="text-orange-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more <span>→</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src="https://picsum.photos/id/1015/800/600"
                    alt="Packaging & More"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#08182b]">
                    Packaging & Specialty Prints
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Custom packaging, banners, roll-up stands, stickers, labels,
                    and creative specialty printing.
                  </p>
                  <div className="text-orange-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* ================= PORTFOLIO / GALLERY SECTION ================= */}
        <div className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-[#08182b] mb-4">
                Our Recent <ShimmerText>Prints</ShimmerText>
              </h2>
              <DecorativeUnderline
                          width="360px"
                          className="mt-2 mx-auto md:w-[320px]"
                          centerColor="#3B82F6"
                        />
              <p className="text-xl text-gray-600">
                Real projects that turned ideas into stunning reality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <img
                    src={`https://picsum.photos/id/${180 + i}/800/600`}
                    alt={`Print Project ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
                    <div>
                      <p className="text-white font-medium text-lg">
                        Project Title {i}
                      </p>
                      <p className="text-white/70 text-sm">
                        Business Cards . Brochures
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-10 py-4 bg-gradient-to-r from-[#FF9800] to-[#E91E63] hover:bg-orange-600 hover:scale-105 text-white hover:text-white font-semibold rounded-full transition-all duration-300">
                View Full  ovservation.
              </button>
            </div>
          </div>
        </div>

        {/* Optional CTA Section */}
        <div className="py-20 bg-[#08182b] text-white">
          <div className="max-w-4xl mx-auto text-center px-3 lg:px-5 md:px-5">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Print Something Amazing ?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Get a free quote today. Fast turnaround • Premium quality • Competitive prices
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-5 bg-gradient-to-r from-[#FF9800] to-[#E91E63] hover:bg-orange-600 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Free Quote Now
            </a>

          </div>
        </div>

      </div>
    </>
  );
}
