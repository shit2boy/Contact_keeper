import React, { Fragment } from "react";
// import spinner from "./spinner";
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ widows: "200px", margin: "auto", display: "block" }}
        alt="loading"
      />
    </Fragment>
  );
};

export default Spinner;
