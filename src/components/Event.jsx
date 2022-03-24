import React, { useState, useEffect } from "react";
import CustomButton from "./button/CustomButton";
import '../sass/event.scss';
import EventSection from "../section/EventSection";
import axios from "axios";



function Event() {
  const [buttonStyle, setButtonStyle] = useState(true);
  const [eventPoint, setEventPoint] = useState(3);
  const [eventsFuture, setEventsFuture ] = useState([]);
  const [eventsPast, setEventsPast ] = useState([]);


  function currentData () {
    return (buttonStyle? eventsFuture : eventsPast)
  }

  function fetchEvents() {
    axios.get('http://creative.kg/api/eventfuture/')
    .then(res =>{
      setEventsFuture(res.data.results)
      axios.get('http://creative.kg/api/eventpast/')
      .then(res =>{
      setEventsPast(res.data.results)
      })
    })
  }
 
  useEffect(()=>{
    fetchEvents()
    window.scrollTo(0, 0);
  }, []);

  return (
      <main className="main-event">
        <section>
          <div className="main-event__container">
            <div className="main-event__buttons"> 
              <CustomButton
              key ='button1'
              type={buttonStyle? "contained" : "outlined"}
              onClick = {() => {setButtonStyle(true); setEventPoint(3)}}
              >
                Анонсы
              </CustomButton>

              <CustomButton
              key='button2'
              type={buttonStyle? "outlined" : "contained"}
              onClick = {() => {setButtonStyle(false); setEventPoint(3)}}
              >
                Прошедшие
              </CustomButton>
            </div>
            <h1>{`${buttonStyle? "предстоящие" : "прошедшие"} мероприятия`}</h1>
          </div>
        </section>
        {currentData().map((event, index) => {
          if(index <= eventPoint){
            let odd = 0;
            index%2? odd = 1 : odd = 0;
            return (
              <EventSection
              oddClass = {odd}
              key={'eventsection'+event.id}
              info={event.text}
              imageId={event.id}
              title={event.name}
              />
            )
          }
          return null;
        })}
        {currentData().length > eventPoint?
        <button className="lookMore" onClick={()=>setEventPoint(eventPoint + 4)}>Смотреть еще <i className="arrowDown"></i></button> 
        :
        <p className="lookMore" >Больше мероприятий нет ...</p> 
        }
        
      </main>
  );
}

export default Event;

