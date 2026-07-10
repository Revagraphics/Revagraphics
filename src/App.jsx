// src/App.jsx
import { useEffect, lazy, Suspense } from "react";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

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
const Application = lazy(() =>  import("./pages/Application"));



// import BubbleBlower from "./components/BubbleBlower";
import AutoScrollTop from "./components/AutoScrollTop";
import GoToTop from "./components/GoToTop";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.2,
      infinite:false,
    });

    globalThis.lenis = lenis; // ✅ assign AFTER lenis is created

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      globalThis.lenis = null; // ✅ clean up on unmount
    };
  }, []);

  return (
    <Router>
      {/* <BubbleBlower /> */}
      <AutoScrollTop />

      <Suspense fallback={<div className="p-10 flex items-center justify-center">Loading..</div>}>
        <Routes>

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
          <Route path="/application" element={<Application />} />
          {/* <Route path="/profile" element={<Profile/>} /> */}

          
          {/* not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <GoToTop />
    </Router>
  );
};

export default App;