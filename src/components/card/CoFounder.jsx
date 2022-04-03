import React, { useState,useEffect } from "react";
import axios from "axios";
// import data from "../card/data";
import Card from "../card/Card";
import '../../sass/cofounder.scss';

 
const CoFounder = () => {
  // const [item, setItem] = useState(data);
  const [item, setItem] = useState([]);
  function getItem() {
    axios.get('https://creative.kg/api/founders/').then((res) => {
      setItem(res.data.results);
    });
  }
  useEffect(() => {
    getItem();
  }, []);


  return (
    <>
      <div className="company-container">
        <div className="row">
          <Card item={item} />
        </div>
      </div>
    </>
  );
};
 
export default CoFounder;
