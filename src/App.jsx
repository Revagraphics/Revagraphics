// src/App.jsx
import { useEffect } from "react";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ProductIdentity from "./pages/ProductIdentity";
import NotFound from "./pages/NotFound";
import BubbleBlower from "./components/BubbleBlower";
import AutoScrollTop from "./components/AutoScrollTop";
import Content from "./pages/Content";
import Marketing from "./pages/Marketing";
import Development from "./pages/Development";
import Designing from "./pages/Designing";
import Printing from "./pages/Printing";
import Cloud from "./pages/Cloud";

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

      {/* Main Routes */}
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
    </Router>
  );
};

export default App;