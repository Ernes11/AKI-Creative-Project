import "../sass/slider.scss";
import { useState } from "react";
import Slider from "react-slick";
import CreativeProjects1 from "../assets/CreativeProjects1.png";
import CreativeProjects2 from "../assets/CreativeProjects2.png";
import CreativeSongs from "../assets/CreativeSongs.png";
import CreativeBooks from "../assets/CreativeBooks.png";
import CreativeFilm from "../assets/CreativeFilm.png";

import { MdOutlineKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const images = [CreativeProjects1, CreativeProjects2 , CreativeSongs, CreativeBooks, CreativeFilm];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <MdOutlineKeyboardArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdKeyboardArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;