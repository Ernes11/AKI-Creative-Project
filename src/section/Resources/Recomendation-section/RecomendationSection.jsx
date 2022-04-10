import './RecomendationSection.scss'
import RecomendationSlider from './Recomendation-Slider/Slider'
import { FormattedMessage } from 'react-intl'




function RecomendationSection({value}){    
    return(
        <div>
            <div className="recomendation_header" id='recomendation'>
                <h2>
                 <FormattedMessage id='Recommendation'/>
                </h2>
                <p> 
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
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
