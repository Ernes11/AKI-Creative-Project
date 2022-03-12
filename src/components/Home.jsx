import React from "react";
import Hero from "../section/Hero";
import Info from "../section/Info";
import Content from "../section/Content";
import CardItem from "../components/card/CardItem";

function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Content />
      <CardItem />
    </>
  );
}

export default Home;
