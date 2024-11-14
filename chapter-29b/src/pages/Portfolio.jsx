import React from "react";
import OurWorkSection from "../components/OurWorkSection";
import BannerSection from "../components/BannerSection";
import QuoteCard from "../components/QuoteCard";
import SeoComponent from "../components/SeoComponent";

const Portfolio = () => {
  return (
    <>
      <SeoComponent page="portfolio" />
      {/* send props for change title and bread crumb */}
      <BannerSection title="Portofolio" breadCrumb="Home / Portofolio" />
      <OurWorkSection />
      <QuoteCard />
    </>
  );
};

export default Portfolio;
