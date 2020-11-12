import React from "react";
import Contacts from "../Contacts/Contacts";

const Home = () => {
  return (
    <div clasName="grid-2">
      <div>{/* contacy form */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
