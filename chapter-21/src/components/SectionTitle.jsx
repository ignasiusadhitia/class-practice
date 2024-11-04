import PropTypes from "prop-types";
import React from "react";

const SectionTitle = ({ text }) => {
  return <h2 className="mb-5">{text}</h2>;
};

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
