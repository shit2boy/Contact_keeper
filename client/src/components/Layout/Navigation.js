import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <hi>
        <i className={icon} />
        {""}
        {title}
      </hi>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
      </ul>
    </div>
  );
};
Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navigation.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
export default Navigation;
