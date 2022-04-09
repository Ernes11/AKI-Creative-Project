import React, { useState } from "react";
import "../sass/info.scss";

function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p
        className="text"
      >
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...Подробнее" : "   Скрыть"}
        </span>
      </p>
    </>
  );
}
function Info() {
  return (
    <div className="info">
      <div class="container">
        <div className="aki-row-1">
          <img src="../../images/top-unsplash.png" alt="" />

          <p className="aki-desc">
            <ReadMore>
              Объединение юридических лиц «Ассоциация Креативных Индустрий»
              зарегистрирована 19 октября 2021 года. Учредителями Ассоциации
              выступили 9 компаний из креативного сектора Кыргызстана,
              представители таких отраслей, как кино, дизайн и мода, коворкинги,
              архитектура и дизайн интерьера, ивент-агентство, образование и
              медиа...
              Объединение юридических лиц «Ассоциация Креативных Индустрий»
              зарегистрирована 19 октября 2021 года. Учредителями Ассоциации
              выступили 9 компаний из креативного сектора Кыргызстана,
              представители таких отраслей, как кино, дизайн и мода, коворкинги,
              архитектура и дизайн интерьера, ивент-агентство, образование и
              медиа...
              Объединение юридических лиц «Ассоциация Креативных Индустрий»
              зарегистрирована 19 октября 2021 года. Учредителями Ассоциации
              выступили 9 компаний из креативного сектора Кыргызстана,
              представители таких отраслей, как кино, дизайн и мода, коворкинги,
              архитектура и дизайн интерьера, ивент-агентство, образование и
              медиа...
            </ReadMore>
          </p>
          <hr class="line_horizontal-1" />
          <hr class="line_vertical-1" />
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
        <div className="box"></div>
      </div>
    </div>
  );
}

export default Info;
