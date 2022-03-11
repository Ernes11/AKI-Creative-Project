import React, { useState } from "react";
import CustomButton from "./button/CustomButton";
import '../sass/event.scss';
import EventSection from "../section/EventSection";

const actualEvents = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/1.png', '/images/events/2.png', '/images/events/3.png', '/images/events/4.png']
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/2.png', '/images/events/1.png', '/images/events/3.png', '/images/events/4.png']
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/1.png', '/images/events/2.png', '/images/events/3.png', '/images/events/4.png']
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/2.png', '/images/events/1.png', '/images/events/3.png', '/images/events/4.png']
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/1.png', '/images/events/2.png', '/images/events/3.png', '/images/events/4.png']
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/2.png', '/images/events/1.png', '/images/events/3.png', '/images/events/4.png']
  },
  {
    id: 7,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/1.png', '/images/events/2.png', '/images/events/3.png', '/images/events/4.png']
  },
  {
    id: 8,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/2.png', '/images/events/1.png', '/images/events/3.png', '/images/events/4.png']
  },
]

const notActualEvents = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/3.png', '/images/events/2.png', '/images/events/1.png', '/images/events/4.png']
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/4.png', '/images/events/1.png', '/images/events/3.png', '/images/events/2.png']
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/3.png', '/images/events/2.png', '/images/events/1.png', '/images/events/4.png']
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/4.png', '/images/events/1.png', '/images/events/3.png', '/images/events/2.png']
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/3.png', '/images/events/2.png', '/images/events/1.png', '/images/events/4.png']
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/4.png', '/images/events/1.png', '/images/events/3.png', '/images/events/2.png']
  },
  {
    id: 7,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/3.png', '/images/events/2.png', '/images/events/1.png', '/images/events/4.png']
  },
  {
    id: 8,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam error aliquid, voluptas quisquam nam? Saepe esse repellat autem sapiente molestias in magni?\n\n Doloribus incidunt porro cum atque eius, possimus accusamus eligendi illum sit facere repellendus nobis vitae tempora quam, at sed? Veritatis modi unde ipsum, consequuntur a autem debitis molestiae? Tempore incidunt illum numquam in animi molestias voluptates nam dolor error odio adipisci, corrupti mollitia. Tempora enim atque voluptatibus, velit, nobis aperiam nam aspernatur rerum cum consequatur quibusdam beatae? Reiciendis provident accusamus optio natus error. Modi a, laudantium aspernatur beatae impedit, facilis eum aut quis, iure fuga libero reprehenderit cumque tenetur ut perspiciatis! Debitis maiores harum velit corporis eligendi doloribus est impedit quos repellendus? Iusto dolor minima consequuntur aperiam placeat! Placeat, sequi!',
    photo: ['/images/events/4.png', '/images/events/1.png', '/images/events/3.png', '/images/events/2.png']
  },
]

function Event() {
  const [buttonStyle, setButtonStyle] = useState(true);
  const [eventPoint, setEventPoint] = useState(4);

  function currentData () {
    return (buttonStyle? actualEvents : notActualEvents)
  }

  return (
      <main className="main-event">
        <section>
          <div className="main-event__container">
            <div className="main-event__buttons"> 
              <CustomButton
              key ='button1'
              type={buttonStyle? "contained" : "outlined"}
              onClick = {() => {setButtonStyle(true); setEventPoint(4)}}
              >
                Анонсы
              </CustomButton>

              <CustomButton
              key='button2'
              type={buttonStyle? "outlined" : "contained"}
              onClick = {() => {setButtonStyle(false); setEventPoint(4)}}
              >
                Прошедшие
              </CustomButton>
            </div>
            <h1>{`${buttonStyle? "предстоящие" : "прошедшие"} мероприятия`}</h1>
          </div>
        </section>
        {currentData().map((event) => {
          if(event.id <= eventPoint){
            let odd = 0;
            event.id%2? odd = 1 : odd = 0;
            return (
              <EventSection
              oddClass = {odd}
              key={'eventsection'+event.id}
              info={event.info}
              images={event.photo}
              title={event.title}
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
