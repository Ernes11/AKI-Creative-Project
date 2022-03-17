import React from "react";
import "../sass/steps.scss";

function Steps() {
  return (
    <div className="steps">
      <div className="container">
        <h1 className="steps-title">Стань членом АКИ за 5 шагов:</h1>
        <div className="steps-main">
        <div className="steps-images">
            <img src="../../images/9.png" alt="" />
          </div>
          <div className="steps-row">
            <div className="steps-img"></div>
            <button className="steps-row-text">
              <img src="../../images/stepsarrow.png" alt="" />
              Шаг 1: Заполните форму
            </button>

            <button className="steps-row-text">
              <img src="../../images/stepsarrow.png" alt="" />
              Шаг 2: Ждите звонка/сообщения от представителя АКИ
            </button>

            <button className="steps-row-text">
              <img src="../../images/stepsarrow.png" alt="" />
              Шаг 3: Утверждение заявки Наблюдательным Советом АКИ
            </button>

            <button className="steps-row-text">
              <img src="../../images/stepsarrow.png" alt="" />
              Шаг 4: Оплата вступительного и членских взносов
            </button>

            <button className="steps-row-text">
              <img src="../../images/stepsarrow.png" alt="" />
              Шаг 5: Добро пожаловать в АКИ!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
