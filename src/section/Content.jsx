import React from "react";
import "../sass/content.scss";
import { FormattedMessage } from 'react-intl';

function Content() {
  return (
    <div className="content">
      <h2><FormattedMessage id="WhatValueAssocial"/></h2>

      <div className="horizontal-line">
        <hr className="line_horizontal-1" />
        <hr className="line_horizontal-2" />
      </div>

      <div class="container">
        <hr class="line_horizontal-3" />

        <div className="vertical">
          <hr className="line_vertical-1" />
          <hr className="line_vertical-2" />
          <hr className="line_vertical-3" />
        </div>
        <div className="content_info">
          <div>
            <h3>Нетворкинг</h3>
            <p>
              Высокий уровень вовлечения представителей целевой аудитории
              является четким доказательством простого факта: .
            </p>
          </div>
          <div>
            <h3>Целевые мероприятия</h3>
            <p>
              Высокий уровень вовлечения представителей целевой аудитории
              является четким доказательством простого факта: .
            </p>
          </div>
          <div>
            <h3>Продвижение интересов и инфраструкуры</h3>
            <p>
              Высокий уровень вовлечения представителей целевой аудитории
              является четким доказательством простого факта: .
            </p>
          </div>
          <div>
            <h3>Развитие бренда</h3>
            <p>
              Высокий уровень вовлечения представителей целевой аудитории
              является четким доказательством простого факта: .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
