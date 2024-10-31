import React from "react";

function Loader() {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-cstm">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>
        <i className="bi bi-robot me-2"></i> Lumoshive AI is thinking...
      </p>
    </div>
  );
}

export default Loader;
