import PropTypes from "prop-types";

const FooterItem = ({ title, children }) => {
  return (
    <div>
      <h5>{title}</h5>
      {children}
    </div>
  );
};

FooterItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FooterItem;
