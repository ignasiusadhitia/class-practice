import React from "react";
import HeaderSectionNav from "./HeaderSectionNav";
import PropTypes from "prop-types";

const SectionHeader = ({ title, bgActive, navArrayText, icon }) => {
  return (
    <div
      className={`flex justify-between items-center   ${
        bgActive ? "border-b-2 border-primary-500" : ""
      }`}
    >
      <h2
        className={`py-1 px-2 ${
          bgActive
            ? "bg-primary-500 w-fit text-sm text-white-50"
            : "font-bold text-2xl text-primary-500"
        }`}
      >
        {title}
      </h2>

      <HeaderSectionNav navArrayText={navArrayText} icon={icon} />
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  bgActive: PropTypes.bool,
  navArrayText: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.bool,
};

export default SectionHeader;
