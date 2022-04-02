import React, { Component } from "react";
import Slider from "react-slick";
import "../sass/slider.scss";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerMode: true,
      dots: false,
      autoplaySpeed: 2000,
      // centerPadding: "60px",
      slidesToShow: 3,
      speed: 800,
  
    };
    return (
      <div className="top-slider">
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

          <Slider {...settings}>
            <div>
              <div className="slider-img">
                <img src="../../images/slider.png" alt="" />
              </div>
            </div>
            <div>
              <div className="slider-img">
                <img src="../../images/slider2.png" alt="" />
              </div>
            </div>
            <div>
              <div className="slider-img">
                <img src="../../images/slider3.png" alt="" />
              </div>
            </div>
            <div>
              <div className="slider-img">
                <img src="../../images/slider2.png" alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
