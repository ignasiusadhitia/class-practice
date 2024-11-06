import PropTypes from "prop-types";
import React from "react";

const ErrorMessage = ({ text }) => {
  return (
    <div className="container d-flex vh-100 w-100 justify-content-center align-items-center">
      <p className="text-danger">Error: {text}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string,
};

export default ErrorMessage;
