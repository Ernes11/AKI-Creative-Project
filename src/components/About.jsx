import React from "react";
import AboutAssociation from "../section/AboutAssociation";
import Carousel from "../section/Carousel";
import CoFounder from "../components/card/CoFounder";
import Task from "../section/Task";
import Report from "../section/Report";



function About() {
  return (
    <>
      <Carousel />
      <AboutAssociation />
      <CoFounder />
      <Task/>
      <Report/>
    </>
  );
}

export default About;
