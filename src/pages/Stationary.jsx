import react from "react";
import ShimmerText from "../components/ShimmerText";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GridBg from "../components/GridBg";

export default function Application() {
  return (
    <>
      <Seo
        title="Stationary | Reva Graphics"
        description="Grow your business with SEO, social media marketing, and performance-driven digital strategies."
      />
      <div className="min-h-screen bg-[#f2fff5]">
        <Navbar />
        <section className="h-screen flex w-full items-center justify-center ">
          <h1 className="text-gray-600 text-4xl lg:text-4xl">
            Hi we provide high demand mobile app solution. We create real app
            which actualy solve the problem..{" "}
          </h1>
        </section>

        <Footer />
      </div>
    </>
  );
}
