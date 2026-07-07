import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import Feedback from "../components/Feedback";
import ShimmerText from "../components/ShimmerText";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Reva Graphics"
        description="Get in touch with Reva Graphics for design, marketing, and development services."
      />

      <div className="bg-[white] min-h-screen">
        {/* Navbar */}
        <Navbar />

        <div className="max-w-[90%] mx-auto py-5 px-6">
          {/* Let's Talk Section */}
          <div className="pt-20 mt-5 flex min-h-[70vh] items-center pb-16">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Text */}
              <div>
                <p className="text-blue-600 font-medium tracking-widest text-sm mb-3">
                  LET'S TALK
                </p>
                <h2 className="text-5xl md:text-5xl lg:text-5xl font-bold text-[#30303c] mb-6">
                  <ShimmerText>Good talks</ShimmerText> make <br /> good Projects
                </h2>


                <p className="text-lg text-gray-600 max-w-md">
                  We would be happy to hear from you. Please fill in the form
                  below or mail us your requirements.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <p className="font-medium text-gray-900">
                      Sales Department
                    </p>
                  </div>
                  <a
                    href="tel:+919958503650"
                    className="text-xl font-semibold text-gray-800 hover:text-blue-600"
                  >
                    +91 995 850 3650
                  </a>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <p className="font-medium text-gray-900">
                      Technical Department
                    </p>
                  </div>
                  <a
                    href="tel:+919310711788"
                    className="text-xl font-semibold text-gray-800 hover:text-blue-600"
                  >
                    +91 9310 711 788
                  </a>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                      ✉️
                    </div>
                    <p className="font-medium text-gray-900">
                      Sales Department
                    </p>
                  </div>
                  <a
                    href="mailto:nverma@revagraphics.com"
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 break-all"
                  >
                    nverma@revagraphics.com
                  </a>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                      ✉️
                    </div>
                    <p className="font-medium text-gray-900">
                      Technical Department
                    </p>
                  </div>
                  <a
                    href="mailto:revagraphicss@gmail.com"
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 break-all"
                  >
                    revagraphicss@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <Feedback />
        <Footer />
      </div>
    </>
  );
}
