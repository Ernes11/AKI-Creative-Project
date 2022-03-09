import React from "react";
import "../sass/hero.scss";

function Hero() {
  return (
    <div className="main_page">
      <div class="container">
        <div className="main_background">
          <div className="v1"></div>
          <div className="v2"></div>
          <img src="../../images/Group (2).png" alt="" />
          <div className="group-images">
            <img src="../../images/9.png" alt="" />
            <img src="../../images/group-eclips.png" className="group-images-img-2" alt="" />
          </div>
          <div className="main_text">
            <h1 className="main_title">Ассоциация Креативных Индустрий </h1>
            <h4 className="main_subtitle">
              Добро пожаловать на сайт Ассоциации Креативных Индустрий
            </h4>
            <div className="buttons">
              <div className="button_1"><span>ПРИСОЕДИНИТСЯ</span></div>
              <button class="button_2">
                <span>ПОДРОБНЕЕ</span>
              </button>
            </div>
          </div>
        </div>
        <div class="scrolldown">
          <div class="chevrons">
            <div class="chevrondown"></div>
            <div class="chevrondown"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
