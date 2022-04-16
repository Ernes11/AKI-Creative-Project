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

     

      <div class="container">
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
