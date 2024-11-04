import PropTypes from "prop-types";
import React from "react";

const SubTitle = ({ text }) => {
  return <p>{text}</p>;
};

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubTitle;
