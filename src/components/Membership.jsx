import React, { useEffect } from "react";
import HomePage from "./filters/HomePage";
import Document from "./button/Document";
import Steps from "../section/Steps";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/filters.scss";

function Membership({value}) {
  useEffect(()=> {
    window.scrollTo(0,0)
  },[])
  return (
    <>
          <Steps />
          <HomePage />
          <Document value={value} />
    </>
  );
}

export default Membership;
