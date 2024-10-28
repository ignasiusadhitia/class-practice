import NavItem from "./NavItem";
import PropTypes from "prop-types";

const NavList = ({ items }) => {
  return (
    <ul className="nav-list">
      {items.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </ul>
  );
};

NavList.propTypes = {
  items: PropTypes.array,
};

export default NavList;
