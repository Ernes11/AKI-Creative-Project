import React, { useEffect } from "react";
import HomePage from "./filters/HomePage";
import Steps from "../section/Steps";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/filters.scss";

function Membership() {

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])


  return (
    <>
      <Provider store={store}>
        <div className="container">
          <Steps />
          <HomePage/>
        </div>
      </Provider>
    </>
  );
}

export default Membership;
