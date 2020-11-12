import React, { useContext, Fragment } from "react";
import ContactContext from "../../Context/Contact/ContactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
