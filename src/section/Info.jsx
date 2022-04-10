import React, { useEffect, useState } from "react";
import "../sass/info.scss";
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
function Info({value}) {
  const [MainInfo,setInfo] = useState(['as'])
    function FetchMainInfo() { axios.get('https://creative.kg/api/about/')
    .then(res =>{
      setInfo(res.data.results)
    })}
    useEffect (()=> {
      FetchMainInfo()
    },[])
    
  
  return(
  <div>
  
    <div className="info">
    <div class="container">
      <div className="aki-row-1">
        <img src={MainInfo[0].picture} alt="" />

          <p className="aki-desc">
            
            <ReadMore>
            {MainInfo[0].description ? (value === 'RU-RU' ? MainInfo[0].description: (value === 'en-US'? MainInfo[0].description_en : MainInfo[0].description_kg)) : 'Loading...'} 
            </ReadMore>
          </p>
          <hr class="line_horizontal-1" />
          <hr class="line_vertical-1" />
        </div>
        <div className="aki-row-2">
          {MainInfo[1]  ? <img src={MainInfo[1].picture} alt="" /> : null}
          <hr />

          <p className="aki-desc-2">
          <ReadMore>
          {MainInfo[1] ? (value === 'RU-RU' ? MainInfo[1].description: (value === 'en-US'? MainInfo[1].description_en : MainInfo[1].description_kg)) : 'Loading...'}
          </ReadMore>
          </p>
        </div>
        <div className="box"></div>
      </div>
    </div>
  
  
 </div>
  
)}

export default Info;
