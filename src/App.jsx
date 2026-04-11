// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ProductIdentity from "./pages/ProductIdentity";

import BubbleBlower from "./components/BubbleBlower";
import AutoScrollTop from "./components/AutoScrollTop";
import Content from "./pages/Content";
import Marketing from "./pages/Marketing";
import Development from "./pages/Development";
import Designing from "./pages/Designing";
import Printing from "./pages/Printing";

const App = () => {
  return (
    <Router>
      {/* Global Components */}
      <BubbleBlower />
      <AutoScrollTop />

      {/* Main Routes */}
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

      </Routes>
    </Router>
  );
};

export default App;