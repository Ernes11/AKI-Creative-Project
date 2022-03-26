import './Utility.scss'
import UtilitySlider from './UtilitySlider/UtilitySlider'
function Utility(){


    return(
        <div className='creative_utility_section'>
            <div className='text_utility_section'>
                <h2>
                Формальные полезности или Оформление
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
            </div>
            <div className="UtilitySlider">
                <UtilitySlider/>
            </div>
        </div>
    )
}
export default Utility