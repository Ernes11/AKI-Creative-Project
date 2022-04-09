import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../components/button/CustomButton";
import "../sass/hero.scss";
import { FormattedMessage } from 'react-intl';

function Hero() {
  return (
    <div className="main_page">
      <div className="container">
        <div className="main_background">
          <div className="v1"></div>
          <div className="v2"></div>
          <img src="../../images/Group (2).png" alt="" />
          <div className="group-images">
            <img src="../../images/9.png" alt="" />
            <img src="../../images/group-eclips.png" className="group-images-img-2" alt="" />
          </div>
          <div className="main_text">
            <h1 className="main_title"><FormattedMessage id="Association"/> </h1>
            <h4 className="main_subtitle">  
              Добро пожаловать на сайт Ассоциации Креативных Индустрий
            </h4>

            <div className="buttons">
              <Link to='/joinus'>
                <CustomButton className="button_1" type="contained"><FormattedMessage id="Join"/></CustomButton>
              </Link>
              <Link to='/about'>
                <CustomButton className="button_2"  type="outlined">
                <span>ПОДРОБНЕЕ</span>
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="scrolldown">
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
