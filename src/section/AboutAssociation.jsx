import React, { useEffect, useState } from "react";
import "../sass/aboutassociation.scss";
import { FormattedMessage } from 'react-intl';
import axios from "axios";

function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  
  return (
    <>
    {text.length > 150 ? 
      <p
        className="text"
      >
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...Подробнее" : "   Скрыть"}
        </span>
      </p> : text}
    </>
  );
}
function AboutAssociation({value}) {
  const [AboutInfo,setAboutInfo] = useState([])
  function FetchAboutInfo() { axios.get('https://creative.kg/api/about/')
  .then(res =>{
    setAboutInfo(res.data.results)
  })}
  useEffect (()=> {
    FetchAboutInfo()
  },[])
  return (
    <div className="aboutassociation">
         <h1 className="about-title"><FormattedMessage id="AboutAssociation"/></h1>
      <div className="container">
        <hr className="line_horizontal-1" />
        <hr className="line_horizontal-2" />
        <hr className="line_vertical-1" />    
      <div className="container">
        <hr className="line_horizontal-1" />
        <hr className="line_horizontal-2" />
        <hr className="line_vertical-1" />

        <div className="about-row">
          <div className="about-column-1">
            <div className="column-1-img1">
            {AboutInfo[0]  ? <img src={AboutInfo[0].picture} alt="" /> : null}
            </div>

            <p className="about-desc">
            <ReadMore>
            {  AboutInfo[1] ? (value === 'RU-RU' ? AboutInfo[1].description: (value === 'en-US'? AboutInfo[1].description_en : AboutInfo[1].description_kg)) : 'Loading...'} 
            </ReadMore>
            </p>
            <div className="column-1-img2">
            {AboutInfo[2]  ? <img src={AboutInfo[2].picture} alt="" /> : null}
            </div>
          </div>

          <div className="about-column-2">
            <p className="about-desc-2">
            <ReadMore>
            {  AboutInfo[0] ? (value === 'RU-RU' ? AboutInfo[0].description: (value === 'en-US'? AboutInfo[0].description_en : AboutInfo[0].description_kg)) : 'Loading...'} 
            </ReadMore>
            </p>

            <div className="column-2-img">
            {AboutInfo[1]  ? <img src={AboutInfo[1].picture} alt="" /> : null}
            </div>

            <div className="buttom-text">
              <p className="buttom-desc">
              <ReadMore>
            {  AboutInfo[2] ? (value === 'RU-RU' ? AboutInfo[2].description: (value === 'en-US'? AboutInfo[2].description_en : AboutInfo[2].description_kg)) : 'Loading...'} 
            </ReadMore>
              </p>
            </div>
          </div>
        </div>
        <div className="box"></div>
      </div>
    </div>
    </div>
  );
}

export default AboutAssociation;
