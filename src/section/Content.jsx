import React, { useEffect, useState } from "react";
import "../sass/content.scss";
import { FormattedMessage } from 'react-intl';
import axios from "axios";

function Content({value}) {
  const [advantage,setAdvantage] = useState([])
  function getAdvantage() { axios.get('https://creative.kg/api/advantages/')
      .then(res =>{
        setAdvantage (res.data.results)
      })}
    useEffect(() => {
      getAdvantage();
    }, []);
    console.log (advantage)
  return (
    <div className="content">
      <h2><FormattedMessage id="WhatValueAssocial"/></h2>

      <div className="horizontal-line">
        <hr className="line_horizontal-1" />
        <hr className="line_horizontal-2" />
        <hr className="line_horizontal-3" />
        <hr className="line_horizontal-4" />
        <hr className="line_horizontal-5" />
      </div>

      <div class="container">
        {/* <hr class="line_horizontal-3" /> */}
        <div></div>

        <div className="vertical">
          {/* <hr className="line_vertical-1" />
          <hr className="line_vertical-2" />
          <hr className="line_vertical-3" /> */}
        </div>
        <div className="content_info">
          {advantage.map (adv => (
          <div className="line" key={adv.id}>
           <h3>{value == 'RU-RU' ? adv.subtitle : (value == 'en-US' ? adv.subtitle_en : adv.subtitle_kg )}</h3>
           <p>{value == 'RU-RU' ? adv.text : (value == 'en-US' ? adv.text_en : adv.text_kg )}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
