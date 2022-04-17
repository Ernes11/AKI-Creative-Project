import React, { useEffect } from "react";
import AboutAssociation from "../section/AboutAssociation";
import Carousel from "../section/Carousel";
import CoFounder from "../components/card/CoFounder";
import Task from "../section/Task";
import Report from "../section/Report";
import '../../src/global.scss'
import { FormattedMessage } from "react-intl";

function About({value}) {

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <Carousel />
        <div className="aboutAssociation-text">
          <h2><FormattedMessage id="AboutAssociation"/></h2>
        </div>
        <AboutAssociation value={value} />
      <div className="container">
        
        
        <CoFounder />
        <Task value={value} />
        <Report value={value} />
      </div>
    </>
  );
}

export default About;
