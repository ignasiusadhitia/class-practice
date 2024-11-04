import PropTypes from "prop-types";
import React from "react";

const PageHeader = ({ text, className, subtitle, children }) => {
  return (
    <header className="mb-5">
      <h1 className={className}>{text}</h1>
      <p className="fst-italic">
        {subtitle}
        {children}
      </p>
    </header>
  );
};

PageHeader.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default PageHeader;
