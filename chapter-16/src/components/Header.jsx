import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>{title}</h1>
        <div>
          <a href="/">Home</a> / <a href="#">{title}</a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
