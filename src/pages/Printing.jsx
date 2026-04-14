import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Printing = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-black">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center opacity-40"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Premium <span className="text-orange-500">Printing</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            High-quality prints that make your brand stand out. 
            From business cards to large format — we bring your ideas to life.
          </p>
          <button 
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Our Prints
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* ================= SERVICES / PRINT TYPES SECTION ================= */}
      <div id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#08182b] mb-4">What We Print</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beautiful, professional prints crafted with precision and premium materials
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
                <h3 className="text-2xl font-bold mb-3 text-[#08182b]">Business Cards & Stationery</h3>
                <p className="text-gray-600 mb-6">
                  Premium matte, gloss, and spot UV business cards, letterheads, envelopes, and corporate stationery.
                </p>
                <div className="text-orange-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://picsum.photos/id/237/800/600" 
                  alt="Flyers & Brochures" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-[#08182b]">Flyers, Brochures & Posters</h3>
                <p className="text-gray-600 mb-6">
                  Eye-catching flyers, tri-fold brochures, catalogs, and large format posters for promotions and events.
                </p>
                <div className="text-orange-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://picsum.photos/id/1015/800/600" 
                  alt="Packaging & More" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-[#08182b]">Packaging & Specialty Prints</h3>
                <p className="text-gray-600 mb-6">
                  Custom packaging, banners, roll-up stands, stickers, labels, and creative specialty printing.
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
            <h2 className="text-5xl font-bold text-[#08182b] mb-4">Our Recent Prints</h2>
            <p className="text-xl text-gray-600">Real projects that turned ideas into stunning reality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-500">
                <img 
                  src={`https://picsum.photos/id/${180 + i}/800/600`} 
                  alt={`Print Project ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
                  <div>
                    <p className="text-white font-medium text-lg">Project Title {i}</p>
                    <p className="text-white/70 text-sm">Business Cards • Brochures</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 border-2 border-[#08182b] hover:bg-[#08182b] hover:text-white font-semibold rounded-full transition-all duration-300">
              View Full Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Optional CTA Section */}
      <div className="py-20 bg-[#08182b] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Print Something Amazing?</h2>
          <p className="text-xl text-white/80 mb-10">Get a free quote today. Fast turnaround • Premium quality • Competitive prices</p>
          <a 
            href="/contact" 
            className="inline-block px-12 py-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Free Quote Now
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Printing;