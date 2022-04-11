import axios from 'axios'
import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import './Utility.scss'
import UtilitySlider from './UtilitySlider/UtilitySlider'
function Utility({value}){
    const [headText,setHeadText] = useState({})
    
    function FetchHeadText() { axios.get('https://creative.kg/api/headertext/3')
    .then(res =>{
        setHeadText(res.data)
    })}
    useEffect (()=> {
      FetchHeadText()
    },[])


    return(
        <div className='creative_utility_section' id='decorate'>
            <div className='text_utility_section'>
                <h2>
                <FormattedMessage id='GoodToKnow'/>
                </h2>
                <p>
                {value === 'RU-RU' ? headText.text  
                  : (value === 'en-US'? headText.text_en  : headText.text_kg  )}    
                </p>
            </div>
            <div className="UtilitySlider">
                <UtilitySlider value = {value}/>
            </div>
        </div>
    )
}
export default Utility