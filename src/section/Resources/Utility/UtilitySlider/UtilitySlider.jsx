import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import '../../Recomendation-section/Recomendation-Slider/Slider.scss'
import SlidesCard from '../../Recomendation-section/Recomendation-Slider/SlidesCard';
import axios from "axios";


export default function UtilitySlider() {
  
    // const UtilityInfo = [
    //     {
    //         id:1 ,
    //         img : '/images/UtilityFees.png',
    //         title: 'Информация о налогообложении',
    //         body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.'
    //     },
    //     {
    //         id:2 ,
    //         img : '/images/UtilityDecoration.png',
    //         title: 'Юридические оформления',
    //         body: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    //     },
    //     {
    //         id:3 ,
    //         img : '/images/UtilityWhiteBooks.png',
    //         title: 'Nemo enim ipsam ',
    //         body: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    //     },
    //     {
    //         id:4 ,
    //         img : '/images/UtilityFees.png',
    //         title: 'Информация о налогообложении',
    //         body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.  '
    //     },
    //     {
    //         id:5 ,
    //         img : '/images/UtilityDecoration.png',
    //         title: 'Юридические оформления',
    //         body: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    //     },
    //     {
    //         id:6 ,
    //         img : '/images/UtilityWhiteBooks.png',
    //         title: 'Nemo enim ipsam ',
    //         body: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    //     },
    // ]
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
    return (
      <div className="tops-slider">
        <div className="container">
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
                <SlidesCard key={info.id} type={'utility'} id={info.id} title={info.name} body={info.text} img={info.image}/>
                ))}
            
          </Slider>
          
        </div>
      </div>
    );
  }

