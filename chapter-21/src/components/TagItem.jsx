import PropTypes from "prop-types";
import React from "react";

const TagItem = ({ text }) => {
  return <span className="fw-bold fs-3">#{text} </span>;
};

TagItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TagItem;
