import PropTypes from "prop-types";
import React from "react";

const Icon = ({ variant, className }) => {
  return <i className={`bi bi-${variant} ${className}`}></i>;
};

Icon.propTypes = {
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
