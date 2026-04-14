// src/App.jsx
import { useEffect } from "react";
import Lenis from "lenis";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ProductIdentity = lazy(() => import("./pages/Branding"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Content = lazy(() => import("./pages/Content"));
const Marketing = lazy(() => import("./pages/Marketing"));
const Development = lazy(() => import("./pages/Development"));
const Designing = lazy(() => import("./pages/Designing"));
const Printing = lazy(() => import("./pages/Printing"));
const Cloud = lazy(() => import("./pages/Cloud"));

import BubbleBlower from "./components/BubbleBlower";
import AutoScrollTop from "./components/AutoScrollTop";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    // make global (important)
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
   <Router>
  {/* Global Components */}
  <BubbleBlower />
  <AutoScrollTop />

  {/* ✅ FIXED */}
  <Suspense fallback={<div className="p-10">Loading...</div>}>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/branding" element={<ProductIdentity />} />
      <Route path="/content" element={<Content />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/development" element={<Development />} />
      <Route path="/designing" element={<Designing />} />
      <Route path="/printing" element={<Printing />} />
      <Route path="/cloud" element={<Cloud />} />
    </Routes>
  </Suspense>
</Router>

  );
};

export default App;
