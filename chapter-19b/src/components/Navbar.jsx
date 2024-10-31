import React from "react";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar bg-primary border-bottom shadow fixed-top">
      <div className="container">
        <h1 className="navbar-brand text-white m-0">
          <i className="bi bi-robot me-2"></i>
          Lumoshive AI
        </h1>
        <button className="btn btn-danger" onClick={onLogout}>
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
