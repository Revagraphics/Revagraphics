import React from "react";
import { FaArrowRight } from "react-icons/fa";
import brandsvg from "../assets/brand.svg?url";
import websvg from "../assets/website.svg?url";
import webdevsvg from "../assets/buy-online.svg?url";
import designsvg from "../assets/design-tools.svg?url";
import contentsvg from "../assets/communicate.svg?url";
import cloudsvg from "../assets/servers.svg?url";

const services = [
  {
    id:1,
    title: "Brand Identity",
    description:
      "Let’s talk a story with different brand elements that unanimously define your brand personality. How corporate identity designs can everything that goes out of your company!",
    tags: "Logo Design | Stationery Design",
    link: "/brand",
    icon: brandsvg,
  },
  {
    id:2,
    title: "Web Designing",
    description:
      "Have a customized, SEO based, user-friendly website define the standards of your brand. Let the website design follow your brand rules and craft a one-of-a-kind intuitive digital experience.",
    tags: "UI & UX Design | Dynamic Websites",
    link: "/webdesign",
    icon: websvg,
  },
  {
    id:3,
    title: "Web Development",
    description:
      "Businesses need time-tested eCommerce web design Companies who understand the changing dynamics and can customize the shopping experience brand-wise.",
    tags: "eCommerce | Software Portals",
    link: "/webdevel",
    icon: webdevsvg,
  },
  {
    id:4,
    title: "Digital Marketing",
    description:
      "Build a web of relationships through 360-degree branding across digital channels to endorse your brand among Internet users and remarkably engage your current customers.",
    tags: "SMO | SEO | PPC",
    link: "#",
    icon: designsvg,
  },
  {
    id:5,
    title: "Content Strategy",
    description:
      "Design your brand’s unique ideology that becomes its voice, thereby formulating a solid content strategy plan that builds better experience of your brand among your target audiences.",
    tags: "Copywriting | Web Content",
    link: "/content",
    icon: contentsvg,
  },
  {
    id:6,
    title: "Cloud Services",
    description:
      "Reva helps organizations transform their IT environment with best Cloud Services. We deliver highly-effective & reliable cloud services that provide organizations with a competitive edge.",
    tags: "Web Hosting | Servers | SSL",
    link: "/service-details",
    icon: cloudsvg,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            See what we can <span className="text-orange-500">do for you</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, id) => (
            <div
              key={id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200"
            >
              {/* Icon */}
              <div className="p-8 pb-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-6">
                <h3 className="text-2xl font-semibold text-orange-600 mb-4  transition-colors">
                  <a href={service.link} className="">
                    {service.title}
                  </a>
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  {service.description}
                </p>

                <p className="text-purple-600 font-medium text-sm mb-8">
                  {service.tags}
                </p>

                {/* Read More Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-20  rounded-3xl p-12 text-center text-black">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-4 flex-wrap">
              Hire World-Class{" "}
              <span className="text-[#ff6726]">Developers</span>
              <a
                href="/get-quote"
                className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-800 font-semibold text-lg px-7 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Hire Now
                <FaArrowRight className="w-5 h-5" />
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
