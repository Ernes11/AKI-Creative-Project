import './RecomendationSection.scss'
import RecomendationSlider from './Recomendation-Slider/Slider'
import { FormattedMessage } from 'react-intl'
import { useEffect, useState } from 'react'
import   axios from 'axios';
function RecomendationSection({value}){  
    const [headText,setHeadText] = useState({})
    
    function FetchHeadText() { axios.get('https://creative.kg/api/headertext/1')
    .then(res =>{
        setHeadText(res.data)
    })}
    useEffect (()=> {
      FetchHeadText()
    },[])
    return(
        <div>
            <div className="recomendation_header" id='recomendation'>
                <h2>
                 <FormattedMessage id='Recommendation'/>
                </h2>
                <p> 
                {value === 'RU-RU' ? headText.text  
                  : (value === 'en-US'? headText.text_en  : headText.text_kg  )}
                </p>
            </div>
            <div className='recomendation_slider'>
                <RecomendationSlider value={value}/>
                <img className='WAVES' src={'/images/resourse-wavese.svg'} alt="2312" />
                <img className="eclipse"  src={'/images/Ellipse27.svg'} alt="23213" />
            </div>
              
            
        </div>
    )
}
export default RecomendationSection
