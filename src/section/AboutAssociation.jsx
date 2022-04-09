import React from "react";
import "../sass/aboutassociation.scss";
import { FormattedMessage } from 'react-intl';

function AboutAssociation() {
  return (
    <div className="aboutassociation">
         <h1 className="about-title"><FormattedMessage id="AboutAssociation"/></h1>
      <div className="container">
        <hr className="line_horizontal-1" />
        <hr className="line_horizontal-2" />
        <hr className="line_vertical-1" />     
        <div className="about-row">
          <div className="about-column-1">
            <div className="column-1-img1">
              <img src="../../images/top-unsplash.png" alt="" />
            </div>

            <p className="about-desc">
              Основная цель Ассоциации - консолидация и объединение усилий
              членов «Ассоциации» на содействие развитию креативной экономики в
              Кыргызстане
            </p>
            <div className="column-1-img2">
              <img src="../../images/arrow-right.png" alt="" />
            </div>
          </div>

          <div className="about-column-2">
            <p className="about-desc-2">
              Объединение юридических лиц «Ассоциация Креативных Индустрий»
              зарегистрирована 19 октября 2021 года. Учредителями Ассоциации
              выступили 9 компаний из креативного сектора Кыргызстана,
              представители таких отраслей, как кино, дизайн и мода, коворкинги,
              архитектура и дизайн интерьера, ивент-агентство, образование и
              медиа
            </p>

            <div className="column-2-img">
              <img src="../../images/Creative.png" alt="" />
            </div>

            <div className="buttom-text">
              <p className="buttom-desc">
                Видение Ассоциации: высокомаржинальные продукты креативных
                индустрий с высокой экономической ценностью экспортируются на
                развитые рынки мира
              </p>
            </div>
          </div>
        </div>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default AboutAssociation;
