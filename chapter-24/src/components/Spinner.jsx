import React from "react";

const Spinner = () => {
  return (
    <div className="container d-flex vh-100 w-100 justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
