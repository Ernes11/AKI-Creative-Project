import './RecomendationSection.scss'
import Slider from "./Slider/Slider.jsx"



function RecomendationSection(){    
    return(
        <div>
            <div className="recomendation_header" id='recomendation'>
                <h2>
                 Рекомендации
                </h2>
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
            </div>
            <div className='recomendation_slider'>
                <Slider/>
                <img className='WAVES' src={'/images/resourse-wavese.svg'} alt="2312" />
                <img className="eclipse"  src={'/images/Ellipse27.svg'} alt="23213" />
            </div>
              
            
        </div>
    )
}
export default RecomendationSection
