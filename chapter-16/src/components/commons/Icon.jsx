import PropTypes from "prop-types";

const Icon = ({ iconClassName }) => {
  return (
    <div>
      <i className={`bi ${iconClassName}`}></i>
    </div>
  );
};

Icon.propTypes = {
  iconClassName: PropTypes.string,
};

export default Icon;
