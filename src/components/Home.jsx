import React, { useState } from "react";
import Hero from "../section/Hero";
import Info from "../section/Info";
import Content from "../section/Content";
import CardItem from "../components/card/CardItem";
import CustomButton from "./button/CustomButton";
import '../sass/home.scss'

function Home() {
  const [buttonStyle, setButtonStyle] = useState(true);
  const [eventPoint, setEventPoint] = useState(4);
  return (
    <>
      <Hero />
      <Info />
      <Content />
      <CardItem />

      <div className="join_btn container">
        <CustomButton
          key="button1"
          type={buttonStyle ? "contained" : "outlined"}
          onClick={() => {
            setButtonStyle(true);
            setEventPoint(4);
          }}
          className="join_btn"
        >
          Присоединиться
        </CustomButton>
      </div>
    </>
  );
}

export default Home;
