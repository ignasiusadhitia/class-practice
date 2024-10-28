import PropTypes from "prop-types";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div>
      <h2>\{title}\</h2>
      <h3>{subtitle}</h3>
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionHeading;
