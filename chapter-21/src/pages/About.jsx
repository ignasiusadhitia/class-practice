import React from "react";
import { PageHeader } from "../components";

const About = () => {
  return (
    <main className="min-vh-75-cstm">
      <PageHeader text="About" />
      <p>
        AstroPaper is a minimal, responsive and SEO-friendly Astro blog theme. I
        designed and crafted this based on my personal blog.
      </p>

      <p>
        This theme is aimed to be accessible out of the box. Light and dark mode
        are supported by default and additional color schemes can also be
        configured.
      </p>

      <p>
        This theme is self-documented _ which means articles/posts in this theme
        can also be considered as documentations. So, see the documentation for
        more info.
      </p>
    </main>
  );
};

export default About;
