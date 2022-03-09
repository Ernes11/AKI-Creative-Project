import React from "react";
import "../sass/info.scss";

function Info() {
  return (
    <div className="info">
      <div class="container">
        <div className="aki-row-1">
          <img src="../../images/top-unsplash.png" alt="" />

          <p className="aki-desc">
            Объединение юридических лиц «Ассоциация Креативных Индустрий»
            зарегистрирована 19 октября 2021 года. Учредителями Ассоциации
            выступили 9 компаний из креативного сектора Кыргызстана,
            представители таких отраслей, как кино, дизайн и мода, коворкинги,
            архитектура и дизайн интерьера, ивент-агентство, образование и
            медиа....
          </p>
        </div>
        <div className="aki-row-2">
          <img src="../../images/Creative.png" alt="" />
          <hr />

          <p className="aki-desc-2">
            Основная цель Ассоциации - консолидация и объединение усилий членов
            «Ассоциации» на содействие развитию креативной экономики в
            Кыргызстане
          </p>
        </div>
      </div>
      <div className="box"></div>
    </div>
  );
}

export default Info;
