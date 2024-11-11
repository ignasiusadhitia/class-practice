import PropTypes from "prop-types";
import React from "react";

const Button = ({ icon, ...props }) => {
  return (
    <button
      className="border border-neutral-200 w-6 h-6 text-neutral-200 hover:bg-primary-500"
      {...props}
    >
      {icon}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Button;
