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
    <div>
  
    <div className="about-info">
    <div class="container">
      <div className="about-row-1">
          <div className="about_img">
              <img src={AboutInfo[0]? AboutInfo[0].picture : 'Loading...' } alt="" />
           </div>
           <div className="about-desc">
          <p >
            {AboutInfo[0] ? (value === 'RU-RU' ? AboutInfo[1].description: (value === 'en-US'? AboutInfo[1].description_en :  AboutInfo[1].description_kg )) : 'Loading...'} 
          </p>
          </div>
        </div>
        <div className="about-row-2">
          <div className="about-desc-2">
          <p >
          {AboutInfo[1] ? (value === 'RU-RU' ? AboutInfo[0].description: (value === 'en-US'? AboutInfo[0].description_en : AboutInfo[0].description_kg)) : 'Loading...'}
          </p>
          </div>
          <div className="about-img-2">
          {AboutInfo[1]  ? <img src={AboutInfo[1].picture} alt="" /> : null}
          </div>
        </div>
        <div className="about-row-3">
          <div className="about-img-3">
          {AboutInfo[2]  ? <img src={AboutInfo[2].picture} alt="" /> : null}
          </div>
          <div className="about-desc-3">
          <p >
          {AboutInfo[2] ? (value === 'RU-RU' ? AboutInfo[2].description: (value === 'en-US'? AboutInfo[2].description_en : AboutInfo[2].description_kg)) : 'Loading...'}
          </p>
          </div>
        </div>
        <div className="box"></div>
      </div>
    </div>
  
  
 </div>
  );
}

export default AboutAssociation;
