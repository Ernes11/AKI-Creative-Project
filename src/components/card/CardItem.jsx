import CardSlider from "../card/CardSlider";
import React, { useState, useEffect } from "react";
import axios from "axios";
function CardItem() {
  const [Sliders, setSliders] = useState([]);
  function getSliders() {
    axios.get('https://creative.kg/api/members/').then((res) => {
      setSliders(res.data.results);
    });
  }
  useEffect(() => {
    getSliders();
  }, []);
  return (
    <div id="body">
      <CardSlider slides={Sliders} />
    </div>
  );
}
export default CardItem;