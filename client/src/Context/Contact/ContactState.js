import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  DELETE_CONTACT,
  ADD_CONTACT,
  SET_CURRENT,
  FILTER_CONTACT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  CLEAR_FILTER,
} from "../Types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Akeem tolulope",
        email: "jdoe@gmail.com",
        phone: "09045454545",
        type: "personal",
      },
      {
        id: 2,
        name: "Akeem shittu",
        email: "jdrroe@gmail.com",
        phone: "0804343599",
        type: "personal",
      },
      {
        id: 3,
        name: "shittu tolulope",
        email: "jrroe@gmail.com",
        phone: "09045454545",
        type: "personal",
      },
      {
        id: 3,
        name: "shittu tolulope",
        email: "jrroe@gmail.com",
        phone: "09045454545",
        type: "professional",
      },
    ],
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add contact

  //Delete contact

  //update contact

  //set current contact

  //clear current contact

  //Filter contac

  //Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
