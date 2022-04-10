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
function Info({value}) {
  const [MainInfo,setInfo] = useState([])
    function FetchMainInfo() { axios.get('https://creative.kg/api/main/')
    .then(res =>{
      setInfo(res.data.results)
    })}
    useEffect (()=> {
      FetchMainInfo()
    },[])
  console.log (value)
  
  return(
  <div>
   {MainInfo.map((inf)=> (
    <div className="info">
    <div class="container">
      <div className="aki-row-1">
        <img src="../../images/top-unsplash.png" alt="" />

          <p className="aki-desc">
            <ReadMore>
            {value === 'RU-RU' ? inf.short_description : (value === 'en-US'? inf.short_description_eng : 'Основная цель Ассоциации - консолидация и объединение усилий членов dsfsadfasffadsfsadfsadfadsf fasdfsdfsadfasdfadsjkfadfadasjdkfjlkj')}
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
           
          </p>
        </div>
        <div className="box"></div>
      </div>
    </div>
  
   ))}
 </div>
  
)}

export default Info;
