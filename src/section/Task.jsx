import axios from "axios";
import React, { useEffect, useState } from "react";
import "../sass/task.scss";

function Task({value}) {
  const dateNow = new Date()
  const year = value === 'RU-RU' ? 'Цели на ' + dateNow.getFullYear() + " год" 
  : (value === 'en-US'? 'goals for ' + dateNow.getFullYear() : 'Максаттары ' + dateNow.getFullYear()) 
  const [purpose,setPurpose] = useState([])
  const FetchPurpose = () => { axios.get('https://creative.kg/api/purpose/')
  .then(res =>{
    setPurpose (res.data.results)
  })}
useEffect(() => {
  FetchPurpose();
}, []);
  return (
    <div className="task">
      <div class="container">
      
        <h1 className="task-title">{year}</h1>
        <div className="task-text">
          <hr className="line_horizontal-1" />
          <hr className="line_horizontal-2" />
          <hr className="line_horizontal-3" />
          <hr className="line_horizontal-4" />
          <hr class="line_vertical-1"/>
          <hr class="line_vertical-2"/>
          {purpose.map (purp => (
            <p className="task-desc" key={purp.id}>
               { value === 'RU-RU' ? purp.text 
            : (value === 'en-US'? purp.text_en : purp.text_kg) }
            </p>)
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
