import PropTypes from "prop-types";
import React from "react";

const Section = ({ children }) => {
  return <div className="mt-4 mb-10">{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
