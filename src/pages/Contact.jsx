import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Animated from "../components/Animated";
import Feedback from "../components/Feedback";

const Contact = () => {
  return (
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
              <h2 className="text-5xl md:text-6xl font-bold text-[#30303c] mb-6">
                Good talks make good Projects
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
                  <p className="font-medium text-gray-900">Sales Department</p>
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
                  <p className="font-medium text-gray-900">Sales Department</p>
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

        {/* Office Locations Section */}
        <div className="pb-24">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-medium tracking-widest text-sm mb-2">
              FIND US
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Our Office Locations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* India */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🛕</span>
                <h3 className="text-2xl font-bold text-gray-900">India</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                12, Jodhka House, Sant Nagar, East of Kailash, New
                <br />
                Delhi 110065, INDIA
              </p>
            </div>

            {/* Singapore */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🦁</span>
                <h3 className="text-2xl font-bold text-gray-900">Singapore</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Robinson Road SPACES, Crown at Robinson #13-07,
                <br />
                Singapore 068907.
              </p>
            </div>

            {/* UK */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏛️</span>
                <h3 className="text-2xl font-bold text-gray-900">UK</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Bourne Court, Southend Road, Woodford Green,
                <br />
                Greater London - IG8 8HD
              </p>
            </div>
          </div>
        </div>
      </div>

      <Feedback />
      <Footer />
    </div>
  );
};

export default Contact;
