import Button from '@mui/material/Button';
import './JoinUsModal.scss';
import { useEffect, useState } from 'react';

export default function JoinUsModal({ display ='none', setDisplay }){
  // let currentDisplay = display;
  // const [displayStyle, setDisplayStyle] = useState(display);

  return (
     <div className="joinUs-modal-container" style={{display: display}}>
       <div className="joinUs-modal">
        <h3>Отправлено</h3>
        <p>ваша заявка отправлена на рассмотрение</p>
        <p>наши сотрудники в ближайшее время свяжутся с вами, спасибо!</p>
        <Button
        type='text'
        onClick={() => setDisplay('none')}
        >вернуться на главную страничку</Button>
       </div>
     </div>
  )
}