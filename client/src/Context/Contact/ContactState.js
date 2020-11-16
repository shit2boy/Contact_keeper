import React, { useReducer } from "react";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  DELETE_CONTACT,
  GET_CONTACTS,
  CONTACT_ERROR,
  ADD_CONTACT,
  SET_CURRENT,
  FILTER_CONTACT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
} from "../Types";

const ContactState = (props) => {
  const initialState = {
    current: null,
    filtered: null,
    contacts: [],
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  //GET CONTACTS
  const getContacts = async () => {
    try {
      const res = await axios.post("/api/contact");
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
    // contact.id = uuidv4();
  };

  //Add contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/contact", contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
    // contact.id = uuidv4();
  };

  //Delete contact
  const deleteContact = (id) => dispatch({ type: DELETE_CONTACT, payload: id });
  //update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //set current contact
  const setCurrent = (contact) => {
    console.log(contact);
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //clear current contact
  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  //Filter contact
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  //Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        // contacts: state.contacts,
        ...state,
        getContacts,
        addContact,
        deleteContact,
        clearCurrent,
        setCurrent,
        updateContact,
        filterContact,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
