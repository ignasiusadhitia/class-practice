import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router";

const ErrorMessage = ({ text, backButton }) => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex flex-column vh-100 w-100 justify-content-center align-items-center">
      <h1>{text}</h1>
      {backButton && (
        <button
          className="btn btn-outline-secondary mt-3"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      )}
    </div>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string,
};

export default ErrorMessage;
