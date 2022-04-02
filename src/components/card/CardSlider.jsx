import React from "react";
import "../../sass/card_slider.scss";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const CardSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 330;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 330;
  };

  return (
    <div id="main-slider-container">
      <MdOutlineArrowBackIos
        size={40}
        className="slider-icon left"
        onClick={slideRight}
      />
      <div id="slider">
        {props.slides.map((slide, index) => {
          return (
            <div
              className="slider-card"
              key={index}
            >
              <div className="img_container_main">
              <img className="slider-card-img" src={slide.photo} alt="" /></div>
              <p className="slider-card-title">{slide.title}</p>
              <p className="slider-card-description">{slide.description}</p>
              <ul className="social-icons">
                <FaFacebookSquare size={30} className="icons" />
                <FaTelegram size={30} className="icons" />
                <RiWhatsappFill size={32} className="icons" />
                <AiFillInstagram size={32} className="icons" />
              </ul>
            </div>
          );
        })}
      </div>
      <MdOutlineArrowForwardIos
        size={40}
        className="slider-icon right"
        onClick={slideLeft}
      />
    </div>
  );
};
export default CardSlider;
