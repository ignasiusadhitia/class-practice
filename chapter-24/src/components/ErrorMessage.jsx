import PropTypes from "prop-types";
import React from "react";

const ErrorMessage = () => {
  return (
    <div className="container d-flex flex-column vh-100 w-100 justify-content-center align-items-center">
      <h1>OOOpsss... Something wrong. Try again Later</h1>
    </div>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string,
};

export default ErrorMessage;
