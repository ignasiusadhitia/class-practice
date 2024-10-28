import PropTypes from "prop-types";

const NavItem = ({ item }) => {
  const { name, url, isActive } = item;
  return (
    <a href={url} className={`nav-item ${isActive ? "active" : ""}`}>
      <li>{name}</li>
    </a>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
};

export default NavItem;
