import React from "react";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between align-items-center py-4 border-accent-cstm">
      <div>Copyright © 2024 | All rights reserved.</div>
      <div className="d-flex gap-3">
        <Icon variant="github" className="d-block fs-4" />
        <Icon variant="facebook" className="d-block fs-4" />
        <Icon variant="instagram" className="d-block fs-4" />
        <Icon variant="linkedin" className="d-block fs-4" />
      </div>
    </footer>
  );
};

export default Footer;
