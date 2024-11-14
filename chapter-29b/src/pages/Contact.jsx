import React from "react";
import BannerSection from "../components/BannerSection";
import QuoteCard from "../components/QuoteCard";
import GetInTouchSection from "../components/GetInTouchSection";
import SeoComponent from "../components/SeoComponent";

const Contact = () => {
  return (
    <>
      <SeoComponent page="contact" />
      <BannerSection title={"Contact"} breadCrumb={"Home / Contact"} />
      <div className="bg-peach-red-10">
        <GetInTouchSection />
      </div>
      <QuoteCard />
    </>
  );
};

export default Contact;
