import React, { useState } from "react";
import data from "../card/data";
import Card from "../card/Card";
import '../../sass/cofounder.scss';

 
const CoFounder = () => {
  const [item, setItem] = useState(data);
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
