import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../../Context/Contact/ContactContext";

const ContactFiltered = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  useEffect(() => {
    if (contactContext.filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      contactContext.filterContact(e.target.value);
    } else {
      contactContext.clearFilter();
    }
  };

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter contacts"
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFiltered;
