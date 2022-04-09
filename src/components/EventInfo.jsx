
import { useState } from 'react';
import CustomButton from '../components/button/CustomButton';
import { useIntl } from 'react-intl';

export default function EventInfo ({title, info}){
    const [state, setState] = useState(true);
    const intl = useIntl();
    const details = intl.formatMessage({id: 'More'});
    const hide = intl.formatMessage({id: 'Hide'})

    return(
        <div className='main-event__info'>
            <div className={`info-container ${state? '' : 'fullHeight'}`}>
                <div>
                    <h4>{title}</h4>
                    <p>{info}</p>
                </div>
                <CustomButton type='outlined' onClick={() => setState(!state)}>{state? details : hide}</CustomButton>
            </div>
        </div>

    )

}