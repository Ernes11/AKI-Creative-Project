import Button from '@mui/material/Button';
import './JoinUsModal.scss';
import { Link } from 'react-router-dom';

export default function JoinUsModal({ display ='none', setDisplay }){

  return (
     <div className="joinUs-modal-container" style={{display: display}}>
       <div className="joinUs-modal">
        <h3>Отправлено</h3>
        <p>ваша заявка отправлена на рассмотрение</p>
        <p>наши сотрудники в ближайшее время свяжутся с вами, спасибо!</p>
        <Link to='/'>
          <Button
          type='text'
          onClick={() => setDisplay('none')}
          >вернуться на главную страничку</Button>
        </Link>
       </div>
     </div>
  )
}