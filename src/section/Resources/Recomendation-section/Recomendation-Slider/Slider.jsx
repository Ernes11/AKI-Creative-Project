import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './Slider.scss'
import SlidesCard from "./SlidesCard";
import axios from "axios";

export default function RecomendationSlider( {value}) {

    const [RecomendationInfo,setRecomendationInfo] = useState([])
    function FetchProject() { axios.get('https://creative.kg/api/recommendations/')
    .then(res =>{
      setRecomendationInfo(res.data.results)
    })}
    useEffect (()=> {
      FetchProject()
    },[])
    const settings = {
      className: "center",  
      infinite:  false, 
      dots: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      speed: 500,
    };
    const settingsMobile = {
      infinite:  false, 
      dots: true,
      autoplaySpeed: 2000,
      slidesToShow: 2,
      speed: 500,
      slidesToScroll : 2
    }
    return (
      <div className="tops-slider">
        <div  className="slider-line"/>
        <div className="WebVersion">
         
  
          <Slider slidesToScroll={3} customPaging={(i)=><div className="dots-pag">{i+1}</div>} dotsClass="slick-dots" {...settings}>
           
            {RecomendationInfo.map ((info) => (
                <SlidesCard key={info.id} title={value === 'RU-RU' ? info.name
                : (value === 'en-US'? info.name_en : info.name_kg )}
                   id={info.id}
                  body={value === 'RU-RU' ? info.description
                  : (value === 'en-US'? info.description_en : info.description_kg )}
                   img={info.image} type={'recommendations'}/>
                   
                ))}
            
          </Slider>

        </div>
        
        <div className="containerMobile">
          

          <Slider customPaging={(i)=><div className="dots-pag">{i+1}</div>} dotsClass="slick-dots"  {...settingsMobile}>
           
            {RecomendationInfo.map ((info) => (
                <SlidesCard key={info.id} title={value === 'RU-RU' ? info.name
                : (value === 'en-US'? info.name_en : info.name_kg )}
                   id={info.id}
                  body={value === 'RU-RU' ? info.description
                  : (value === 'en-US'? info.description_en : info.description_kg )}
                   img={info.image} type={'recommendations'}/>
                   
                ))}
            
          </Slider>

        </div>
        
      </div>
    );
  }

