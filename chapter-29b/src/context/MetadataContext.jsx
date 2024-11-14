import PropTypes from "prop-types";
import React, { createContext } from "react";

const MetadataContext = createContext();

const MetadataProvider = ({ children }) => {
  const defaultMetadata = {
    title: "Logoipsum Agency",
    description:
      "We are a community-driven platform offering top web solutions.",
    keywords:
      "Web development, web solutions, web solutions company, web solutions provider",
  };

  const metadata = {
    home: {
      title: "Home - Logoipsum Agency",
      description:
        "Welcome to Logoipsum Agency, your trusted partner for web solutions.",
      keywords: "homepage, Logoipsum Agency, web solutions, digital agency",
      schema: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Logoipsum Agency",
        url: "https://kelompok-1b.vercel.app",
        logo: "https://kelompok-1b.vercel.app/logoipsum-logo.png",
        sameAs: [
          "https://www.facebook.com/logoipsum",
          "https://www.twitter.com/logoipsum",
          "https://www.instagram.com/logoipsum",
          "https://www.x.com/logoipsum",
        ],
      },
    },
    about: {
      title: "About Us - Logoipsum Agency",
      description:
        "Learn more about Logoipsum Agency and our mission to deliver top web solutions.",
      keywords:
        "About Logoipsum Agency, mission, web development, digital agency",
      schema: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Logoipsum Agency",
        description:
          "We are a community-driven platform offering top web solutions.",
        url: "https://kelompok-1b.vercel.app/about",
        logo: "https://kelompok-1b.vercel.app/logoipsum-logo.png",
      },
    },
    services: {
      title: "Our Services - Logoipsum Agency",
      description:
        "Explore the services offered by Logoipsum Agency, from web design to email marketing.",
      keywords:
        "web design, ui/ux design, website migration, app development, hubspot integration, email marketing",
      schema: {
        "@context": "http://schema.org",
        "@type": "Service",
        serviceType: "Web Development",
        provider: {
          "@type": "Organization",
          name: "Logoipsum Agency",
          url: "https://kelompok-1b.vercel.app/services",
        },
      },
    },
    portfolio: {
      title: "Our Portfolio - Logoipsum Agency",
      description:
        "Browse our portfolio of successful projects delivered by Logoipsum Agency.",
      keywords:
        "portfolio, projects, Logoipsum Agency, web development portfolio",
      schema: {
        "@context": "http://schema.org",
        "@type": "CreativeWork",
        name: "Logoipsum Agency Portfolio",
        description:
          "A showcase of our best web development projects completed for clients.",
        url: "https://kelompok-1b.vercel.app/portfolio",
      },
    },
    blog: {
      title: "Blog - Logoipsum Agency",
      description:
        "Read the latest articles, tips, and insights on web development and digital marketing.",
      keywords: "blog, web development tips, digital marketing, agency blog",
      schema: {
        "@context": "http://schema.org",
        "@type": "Blog",
        name: "Logoipsum Agency Blog",
        description:
          "Stay up-to-date with the latest trends in web development and digital marketing.",
        url: "https://kelompok-1b.vercel.app/blog",
      },
    },
    contact: {
      title: "Contact Us - Logoipsum Agency",
      description:
        "Get in touch with Logoipsum Agency for your web development and digital marketing needs.",
      keywords: "contact us, Logoipsum Agency, get in touch, customer support",
      schema: {
        "@context": "http://schema.org",
        "@type": "ContactPage",
        name: "Contact Logoipsum Agency",
        description:
          "Reach out to us for inquiries or to discuss your next web development project.",
        url: "https://kelompok-1b.vercel.app/contact",
      },
    },
  };
  return (
    <MetadataContext.Provider value={{ defaultMetadata, metadata }}>
      {children}
    </MetadataContext.Provider>
  );
};

MetadataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MetadataProvider, MetadataContext };
