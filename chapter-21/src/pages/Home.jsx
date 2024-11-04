import React from "react";
import { PostsList, SectionTitle } from "../components";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/posts");
  };

  return (
    <>
      <h1 className="display-4 fw-bold mb-5">
        Mingalaba
        <Icon variant="rss-fill" className="fs-4 text-accent-cstm" />
      </h1>
      <p>
        AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro
        blog theme. This theme follows best practices and provides accessibility
        out of the box. Light and dark mode are supported by default. Moreover,
        additional color schemes can also be configured. Read the blog posts or
        check README for more info.
      </p>

      <div>
        <span>
          Social Links: <Icon variant="github" className="fs-4" />{" "}
          <Icon variant="facebook" className="fs-4" />{" "}
          <Icon variant="instagram" className="fs-4" />{" "}
          <Icon variant="linkedin" className="fs-4" />{" "}
        </span>
      </div>

      <div className="my-5 border-accent-cstm"></div>

      <SectionTitle text="Recent Posts" />
      <PostsList />

      <div className="d-flex justify-content-center pt-5 my-5">
        <button className="btn-accent-cstm" onClick={handleClick}>
          All Post <Icon variant="arrow-right" />
        </button>
      </div>
    </>
  );
};

export default Home;
