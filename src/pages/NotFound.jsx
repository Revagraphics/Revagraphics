import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import error from "../assets/error.svg";

export default function NotFound() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Reva Graphics</title>

        <meta
          name="description"
          content="The page you are looking for does not exist. Visit Reva Graphics to explore creative design and digital solutions."
        />

        {/* SEO */}
        <meta name="robots" content="noindex, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="404 - Page Not Found" />
        <meta property="og:description" content="Page not found on Reva Graphics" />

        {/* Dynamic Canonical */}
        <link
          rel="canonical"
          href={`https://yourdomain.com${location.pathname}`}
        />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />

        {/* Main Section */}
        <div className="flex min-h-screen flex-1 flex-col items-center justify-center text-center px-4">

          {/* SVG Image */}
          <img
            src={error}
            alt="404 error illustration"
            className="w-[280px] sm:w-[350px] md:w-[420px] mb-6"
          />

          <h1 className="text-5xl sm:text-6xl font-bold text-[#ff6726]">
            404
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold mt-3">
            Page Not Found
          </h2>

          <p className="text-gray-600 mt-2 max-w-md">
            The page <span className="font-medium">{location.pathname}</span> doesn’t exist or may have been moved.
          </p>

          <Link
            to="/"
            className="mt-6 px-6 py-3 bg-[#ff6726] text-white rounded-lg shadow hover:bg-[#e55a1f] transition"
          >
            Go Back Home
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
