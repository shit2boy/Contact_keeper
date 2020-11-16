import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/Auth/AuthContext";
import ContactContext from "../../Context/Contact/ContactContext";

const Navigation = ({ title, icon, props }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logOut, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logOut();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li onClick={onLogout}>
        <a href="#/">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register </Link>
      </li>
      <li>
        <Link to="/login">Login </Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
