import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex flex-column vh-100 w-100 justify-content-center align-items-center">
      <h1 className="text-center">
        OOOpsss... Cannot Found Page. <br />
      </h1>
      <p>Go Back to Home Page</p>

      <button className="btn btn-secondary mt-5" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
