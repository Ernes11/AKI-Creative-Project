import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import '../../Recomendation-section/Recomendation-Slider/Slider.scss'
import SlidesCard from '../../Recomendation-section/Recomendation-Slider/SlidesCard';
import axios from "axios";


export default function UtilitySlider({value}) {
  
  
    const [UtilityInfo,setUtilityInfo] = useState([])
    function FetchUtility() { axios.get('https://creative.kg/api/formals/')
    .then(res =>{
      setUtilityInfo(res.data.results)
    })}
    useEffect (()=> {
      FetchUtility()
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
        <div className="WebVersion">
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        <div className="prev_block"/> 
          <Slider slidesToScroll={3} customPaging={(i)=><div className="dots-pag">{i+1}</div>} dotsClass="slick-dots" {...settings}>
           
            {UtilityInfo.map ((info) => (
                <SlidesCard key={info.id} title={value === 'RU-RU' ? info.name
                : (value === 'en-US'? info.name_en : info.name_kg )}
                   id={info.id}
                  body={value === 'RU-RU' ? info.description
                  : (value === 'en-US'? info.description_en : info.description_kg )}
                   img={info.image} type={'utility'}/>
                ))}
            
          </Slider>
          
        </div>
        <div className="containerMobile">
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        <div className="prev_block"/> 
          <Slider customPaging={(i)=><div className="dots-pag">{i+1}</div>} dotsClass="slick-dots"  {...settingsMobile}>
           
            {UtilityInfo.map ((info) => (
                <SlidesCard key={info.id} title={value === 'RU-RU' ? info.name
                : (value === 'en-US'? info.name_en : info.name_kg )}
                   id={info.id}
                  body={value === 'RU-RU' ? info.description
                  : (value === 'en-US'? info.description_en : info.description_kg )}
                   img={info.image} type={'recommendations'}/>
                   
                ))}
            
          </Slider>
          <div className="after_block"/>
        </div>
      </div>
    );
  }

