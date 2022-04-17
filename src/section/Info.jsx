import React, { useEffect, useState } from "react";
import "../sass/info.scss";
import axios from "axios";

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
          <div className="aki_img">
              <img src={MainInfo[0].picture} alt="" />
           </div>
           <div className="aki-desc">
          <p >
            {MainInfo[0].description ? (value === 'RU-RU' ? MainInfo[1].description: (value === 'en-US'? MainInfo[1].description_en :  MainInfo[1].description_kg )) : 'Loading...'} 
          </p>
          </div>
        </div>
        <div className="aki-row-2">
          <div className="aki-img-2">
          {MainInfo[1]  ? <img src={MainInfo[1].picture} alt="" /> : null}
          </div>
          <div className="aki-desc-2">
          <p >
          {MainInfo[0] ? (value === 'RU-RU' ? MainInfo[0].description: (value === 'en-US'? MainInfo[0].description_en : MainInfo[0].description_kg)) : 'Loading...'}
          </p>
          </div>
        </div>
        <div className="box"></div>
      </div>
    </div>
  
  
 </div>
  
)}

export default Info;
