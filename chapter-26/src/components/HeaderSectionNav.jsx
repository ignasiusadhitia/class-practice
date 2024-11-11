import React from "react";
import PropTypes from "prop-types";

const HeaderSectionNav = ({ navArrayText, icon }) => {
  return (
    <div className="flex gap-4 items-center">
      {navArrayText?.map((text, index) => (
        <a href="#" key={index} className="text-neutral-500 text-sm">
          {text}
        </a>
      ))}

      {icon ? "→" : ""}
    </div>
  );
};

HeaderSectionNav.propTypes = {
  navArrayText: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.bool,
};

export default HeaderSectionNav;
