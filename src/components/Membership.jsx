import React from "react";
import HomePage from "./filters/HomePage";
import Document from "./button/Document";
import Steps from "../section/Steps";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/filters.scss";

function Membership() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <Steps />
          <HomePage />
          <Document />
        </div>
      </Provider>
    </>
  );
}

export default Membership;
