import React from "react";
import HomePage from "./filters/HomePage";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/filters.scss";

function Membership() {
  return (
    <>
      <Provider store={store} />
      <HomePage />
    </>
  );
}

export default Membership;
