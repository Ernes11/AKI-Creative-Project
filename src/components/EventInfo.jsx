
import { useState } from 'react';
import CustomButton from '../components/button/CustomButton';

export default function EventInfo ({title, info}){
    const [state, setState] = useState(true);


    return(
        <div className='main-event__info'>
            <div className={`info-container ${state? '' : 'fullHeight'}`}>
                <div>
                    <h4>{title}</h4>
                    <p>{info}</p>
                </div>
                <CustomButton type='outlined' onClick={() => setState(!state)}>{state? 'продробнее...' : 'свернуть'}</CustomButton>
            </div>
        </div>

    )

}