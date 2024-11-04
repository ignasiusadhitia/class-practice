import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../context/PostContext";
import Icon from "./Icon";

const Navbar = () => {
  const { fetchPage } = useContext(PostContext);
  return (
    <nav className="d-flex justify-content-between align-items-center py-4 mb-5 border-bottom-accent-cstm">
      <div onClick={() => fetchPage(1)}>
        <Link to="/" className="nav-link fs-4 fw-semibold ">
          AstroPaper
        </Link>
      </div>

      <ul className="d-flex my-auto list-unstyled gap-4 align-items-center">
        <li className="nav-item">
          <Link to="/posts" className="d-block nav-link-cstm">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tags" className="d-block nav-link-cstm">
            Tags
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="d-block nav-link-cstm">
            About
          </Link>
        </li>
        <li>
          <Icon variant="archive" className="fs-5" />
        </li>
        <li>
          <Icon variant="search" className="fs-5" />
        </li>
        <li>
          <Icon variant="sun" className="fs-5" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
