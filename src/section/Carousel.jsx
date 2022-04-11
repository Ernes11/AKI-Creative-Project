import "../sass/slider.scss";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import { MdOutlineKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import axios from "axios";



function Carousel() {
  const [data,setData] = useState([])
  const fetchPictures = () => { axios.get('https://creative.kg/api/aboutpictures/')
  .then(res =>{
    setData(res.data.results)
  })}
  useEffect (()=> {
    fetchPictures()
  },[])
  console.log (data)
  const images = [data.map ((dat) => dat.picture)]
console.log (images[0])


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
    slidesToShow: 2 ,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
      {images[0].map((img, idx) => (
          <div key={`img${idx}`} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;