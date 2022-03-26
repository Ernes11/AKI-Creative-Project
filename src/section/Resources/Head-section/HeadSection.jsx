 import './headSection.scss'
function HeadSection () {

    return(
        <div className='header_container'>
            <div className="img_container">
                <img className="nines" src={'/images/resources9.svg'} alt="3213123" />
                <img className="eclipse"  src={'/images/Ellipse27.svg'} alt="23213" />
            </div>
            
            <div className="resources_title_container"> 
            <h3 className="resourcesTitle">РЕСУРСЫ</h3>
            </div>
            <div className="button_container">
                <a href="#TEST"><button className="navigation_button">Все</button></a>
                <a href="#recomendation"><button className="navigation_button">Рекоммендации</button></a>
                <a href=""><button className="navigation_button">Проекты</button></a>
                <a href=""><button className="navigation_button">Оформление</button></a>
            </div>
            
        </div>
    )
}
export default HeadSection