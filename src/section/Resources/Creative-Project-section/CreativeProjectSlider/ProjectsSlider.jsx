import React, { Component } from "react";
import Slider from "react-slick";
import SlidesCard from "../../Recomendation-section/Slider/SlidesCard";
import '../../Recomendation-section/Slider/Slider.scss'


export default class CenterMode extends Component {
  render() {
    const CreativeProjects = [
        {
            id:1 ,
            img : '/images/CreativeProjects1.png',
            title: 'Фильмы, развивающие креативность ',
            body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.  '
        },
        {
            id:2 ,
            img : '/images/CreativeProjects2.png',
            title: 'Книги, развивающие креативность ',
            body: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {
            id:3 ,
            img : '/images/CreativeSongs.png',
            title: 'Nemo enim ipsam ',
            body: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        },
        {
            id:4 ,
            img : '/images/CreativeProjects1.png',
            title: 'Фильмы, развивающие креативность ',
            body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.  '
        },
        {
            id:5 ,
            img : '/images/CreativeProjects2.png',
            title: 'Книги, развивающие креативность ',
            body: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {
            id:6 ,
            img : '/images/CreativeSongs.png',
            title: 'Nemo enim ipsam ',
            body: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        },
    ]
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
           
            {CreativeProjects.map ((info) => (
                <SlidesCard key={info.id} title={info.title} body={info.body} img={info.img}/>
                ))}
            
          </Slider>
          
        </div>
      </div>
    );
  }
}
