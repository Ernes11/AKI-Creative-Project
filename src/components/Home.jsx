import React, { useEffect } from "react";
import Hero from "../section/Hero";
import Info from "../section/Info";
import Content from "../section/Content";
import CardItem from "../components/card/CardItem";
import CustomButton from "./button/CustomButton";
import '../sass/home.scss'
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'
function Home( { value } ) {
 

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])


  return (
    <div className="homePage-cointainer">
      <Hero />
      <Info value={value} />
      <Content />
      <CardItem />

      <div className="join_btn container">
      <a target="_blank" href="https://forms.gle/tmSP19PLXCeFdWcJ8" rel="noreferrer">
          <CustomButton
            type="outlined"
            className="join_btn"
          >
            <FormattedMessage id="Join"/>
          </CustomButton>
        </a>
      </div>
    </div>
  );
}

export default Home;
