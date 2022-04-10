import React, { useState, useEffect } from "react";
import CustomButton from "./button/CustomButton";
import '../sass/event.scss';
import EventSection from "../section/EventSection";
import axios from "axios";
import { FormattedMessage, injectIntl, useIntl } from 'react-intl';



function Event({value}) {
  const [buttonStyle, setButtonStyle] = useState(true);
  const [eventPoint, setEventPoint] = useState(3);
  const [eventsFuture, setEventsFuture ] = useState([]);
  const [eventsPast, setEventsPast ] = useState([]);


  function currentData () {
    return (buttonStyle? eventsFuture : eventsPast)
  }

  function fetchEvents() {
    axios.get('https://creative.kg/api/eventfuture/')
    .then(res =>{
      setEventsFuture(res.data.results.reverse())
      axios.get('https://creative.kg/api/eventpast/')
      .then(res =>{
      setEventsPast(res.data.results.reverse())
      })
    })
  }
 
  useEffect(()=>{
    fetchEvents()
    window.scrollTo(0, 0);
  }, []);
  const intl = useIntl();
  const Past = intl.formatMessage({id: 'PastEvents'});
  const Upcoming = intl.formatMessage({id: 'UpcomingEvents'})
  console.log(Past)

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
                <FormattedMessage id="Announcements"/>
              </CustomButton>

              <CustomButton
              key='button2'
              type={buttonStyle? "outlined" : "contained"}
              onClick = {() => {setButtonStyle(false); setEventPoint(3)}}
              >
                <FormattedMessage id="PastEvents"/>
              </CustomButton>
            </div>
            <h1>{buttonStyle? Upcoming : Past}</h1>
          </div>
        </section>
        <div className="event_cards_container">
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
              title={value === 'RU-RU' ? event.name : (value == 'en-US' ? event.name_en : event.name_kg)}
              />
            )
          }
          return null;
        })}
        </div>
        {currentData().length > eventPoint?
        <button className="lookMore" onClick={()=>setEventPoint(eventPoint + 4)}><FormattedMessage id="SeeMore"/> <i className="arrowDown"></i></button> 
        :
        <p className="lookMore" ><FormattedMessage id="NoMoreEvents"/></p> 
        }
        <div сlassName ='Event_Calendar_container' style={{width:'100%' , margin:'unset'}}>
          <h2 style={{color:'white',marginLeft: '20%'}}><FormattedMessage id="СhooseTime"/></h2>
          <div className="Calendar">
          <iframe src="https://calendar.google.com/calendar/embed?height=771&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FBishkek&showTitle=0&showPrint=0&showCalendars=0&src=a2djcmVhdGl2ZTNAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679" style={{borderWidth : 0, width : '100%' , height : '100%' ,frameborder: 0  ,scrolling : "yes",borderRadius:'8px'}}></iframe>
          {/* <iframe src="https://calendar.google.com/calendar/embed?height=771&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FBishkek&title&hl=ru&showTitle=0&showNav=1&showCalendars=1&showTabs=1&showPrint=0&showTz=1&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ua2cjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=cnUua2cjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%2333B679&color=%230B8043&color=%230B8043" style={{borderWidth : 0, width : '100%' , height : '100%' ,frameborder: 0  ,scrolling : "yes",borderRadius:'8px'}}></iframe> */}
          </div> 
        </div>
      </main>
  );
}

export default Event;

