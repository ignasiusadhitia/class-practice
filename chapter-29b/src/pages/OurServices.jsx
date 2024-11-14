import React from "react";
import OurExperticeCardSection from "../components/OurExperticeCardSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import BannerSection from "../components/BannerSection";
import QuoteCard from "../components/QuoteCard";
import SeoComponent from "../components/SeoComponent";

const OurServices = () => {
  return (
    <>
      <SeoComponent page="services" />
      <BannerSection title={"Services"} breadCrumb={"Home / Services"} />
      <WhatWeDoSection />
      <OurExperticeCardSection />
      <QuoteCard />
    </>
  );
};

export default OurServices;
