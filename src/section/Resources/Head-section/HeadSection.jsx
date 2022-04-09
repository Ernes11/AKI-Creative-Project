 import './headSection.scss'
import { FormattedMessage } from 'react-intl';
function HeadSection () {

    return(
        <div className='header_container' id='all'>
            <div className="img_container">
                <img className="nines" src={'/images/resources9.svg'} alt="3213123" />
                <img className="eclipse"  src={'/images/Ellipse27.svg'} alt="23213" />
            </div>
            
            <div className="resources_title_container"> 
            <h3 className="resourcesTitle"><FormattedMessage id = 'Resource'/></h3>
            </div>
            <div className="button_container">
                <a href="#all"><button className="navigation_button"><FormattedMessage id='AllResource'/></button></a>
                <a href="#recomendation"><button className="navigation_button"><FormattedMessage id='Recommendation'/></button></a>
                <a href="#project"><button className="navigation_button"><FormattedMessage id='Project'/></button></a>
                <a href="#decorate"><button className="navigation_button">Оформление</button></a>
            </div>
            
        </div>
    )
}
export default HeadSection