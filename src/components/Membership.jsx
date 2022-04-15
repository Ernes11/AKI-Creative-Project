import React from "react";
import HomePage from "./filters/HomePage";
import Document from "./button/Document";
import Steps from "../section/Steps";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/filters.scss";

function Membership({value}) {
  return (
    <>
      <Provider store={store}>
        
          <Steps />
          <HomePage />
          <Document value={value} />
        
      </Provider>
    </>
  );
}

export default Membership;
