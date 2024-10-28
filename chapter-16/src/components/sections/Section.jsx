import PropTypes from "prop-types";

const Section = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
