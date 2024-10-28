import Button from "./commons/Button";
import Icon from "./commons/Icon";
import NavList from "./navigation/NavList";
import PropTypes from "prop-types";

const NavBar = ({ items }) => {
  return (
    <nav className="navbar container">
      <div className="logo">
        <div className="logo-icon">
          <Icon iconClassName="bi-lightning-charge-fill" />
        </div>
        <span>LogoIpsum</span>
      </div>

      <div className="nav-list-wrapper">
        <NavList items={items} />
        <Button text="Get In Touch" />
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  items: PropTypes.array,
};

export default NavBar;
