import React, { useState, useEffect, useContext } from "react";
import ContactContext from "../../Context/Contact/ContactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        phone: "",
        email: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const clearAll = () => {
    clearCurrent();
  };

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    type: "personal",
  });
  const { name, email, phone, type } = contact;
  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {" "}
        {current ? "Update Contact" : "Add Contact"}{" "}
      </h2>
      <input
        type="text"
        name="name"
        onChange={onChange}
        value={name}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        onChange={onChange}
        value={email}
        placeholder="Email"
      />
      <input
        type="text"
        name="phone"
        onChange={onChange}
        value={phone}
        placeholder="Phone"
      />
      <h5>Contact type</h5>
      <input
        type="radio"
        name="type"
        onChange={onChange}
        value="personal"
        checked={type === "personal"}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        onChange={onChange}
        value="professional"
        checked={type === "professional"}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>{" "}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
