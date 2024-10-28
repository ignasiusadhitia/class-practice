import Button from "./commons/Button";
import Icon from "./commons/Icon";
import FooterItem from "./footer/FooterItem";
import PropTypes from "prop-types";
import NavList from "./navigation/NavList";

const Footer = ({ items }) => {
  const { services, icons, careers } = items;
  return (
    <footer>
      <FooterItem title="About Us">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at
        </p>

        <div>
          {icons.map((icon, index) => (
            <Icon iconClassName={icon.iconClassName} key={index} />
          ))}
        </div>
      </FooterItem>

      <FooterItem title="Services">
        <NavList items={services} />
      </FooterItem>

      <FooterItem title="Career">
        <div>
          {careers.map((career, index) => (
            <div key={index}>
              <Icon iconClassName={career.iconClassName} />
              <div>
                <h6>{career.title}</h6>
                <span>{career.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </FooterItem>

      <FooterItem title="Subscribe Us">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable
        </p>

        <form>
          <input type="email" name="" id="" />

          <Button text="Submit" />
        </form>
      </FooterItem>
    </footer>
  );
};

Footer.propTypes = {
  items: PropTypes.object,
};

export default Footer;
