import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SlidesCard from "../../Recomendation-section/Recomendation-Slider/SlidesCard";
import '../../Recomendation-section/Recomendation-Slider/Slider.scss'
import axios from "axios";
export default function ProjectSlider({value}) {
  
    const [slides,setSlides] = useState([])
    function FetchProject() { axios.get('https://creative.kg/api/creativeprojects/')
    .then(res =>{
      setSlides(res.data.results)
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
           
            {slides.map ((info) => (
                <SlidesCard key={info.id} title={value === 'RU-RU' ? info.name
                : (value === 'en-US'? info.name_en : info.name_kg )}
                 type={'creativeprojects'} id={info.id}
                  body={value === 'RU-RU' ? info.description
                  : (value === 'en-US'? info.description_en : info.description_kg )}
                   img={info.image}/>
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
           
            {slides.map ((info) => (
                <SlidesCard key={info.id} title={value === 'RU-RU' ? info.name
                : (value === 'en-US'? info.name_en : info.name_kg )}
                   id={info.id}
                  body={value === 'RU-RU' ? info.description
                  : (value === 'en-US'? info.description_en : info.description_kg )}
                   img={info.image} type={'creativeprojects'}/>
                   
                ))}
            
          </Slider>
          <div className="after_block"/>
        </div>
      </div>
    );
  }

