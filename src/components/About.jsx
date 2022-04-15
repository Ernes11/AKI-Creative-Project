import React, { useEffect } from "react";
import AboutAssociation from "../section/AboutAssociation";
import Carousel from "../section/Carousel";
import CoFounder from "../components/card/CoFounder";
import Task from "../section/Task";
import Report from "../section/Report";
import '../../src/global.scss'

function About({value}) {

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <div className="container">
        <Carousel />
        <AboutAssociation value={value} />
        <CoFounder />
        <Task value={value} />
        <Report value={value} />
      </div>
    </>
  );
}

export default About;
