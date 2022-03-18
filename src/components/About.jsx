import React from "react";
import AboutAssociation from "../section/AboutAssociation";
import Carousel from "../section/Carousel";
import CoFounder from "../components/card/CoFounder";
import Task from "../section/Task";
import Report from "../section/Report";
import '../../src/global.scss'

function About() {
  return (
    <>
      <div className="container">
        <Carousel />
        <AboutAssociation />
        <CoFounder />
        <Task />
        <Report />
      </div>
    </>
  );
}

export default About;
