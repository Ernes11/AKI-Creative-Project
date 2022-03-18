import React, { useEffect } from "react";
import Hero from "../section/Hero";
import Info from "../section/Info";
import Content from "../section/Content";
import CardItem from "../components/card/CardItem";
import CustomButton from "./button/CustomButton";
import '../sass/home.scss'
import { Link } from 'react-router-dom';

function Home() {

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])


  return (
    <div className="homePage-cointainer">
      <Hero />
      <Info />
      <Content />
      <CardItem />

      <div className="join_btn container">
        <Link to='/joinus'>
          <CustomButton
            type="outlined"
            className="join_btn"
          >
            Присоединиться
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default Home;
