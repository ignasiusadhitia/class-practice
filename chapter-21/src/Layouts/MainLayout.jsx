import React from "react";

import PropTypes from "prop-types";
import { Footer, Navbar } from "../components";

const MainLayout = ({ children }) => {
  return (
    <div className="container-cstm">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
