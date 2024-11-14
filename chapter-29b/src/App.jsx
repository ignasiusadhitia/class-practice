import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { MetadataProvider } from "./context/MetadataContext";
import {
  About,
  Blog,
  Contact,
  Home,
  NotFound,
  OurServices,
  Portfolio,
} from "./pages";

const App = () => {
  return (
    <MetadataProvider>
      {/* 
      To minimize risk of breaking changes, and future updates on
      react-router-dom v7
      */}
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </MetadataProvider>
  );
};

export default App;
