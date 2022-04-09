import './CreativeProject.scss'
import ProjectSlider from './CreativeProjectSlider/ProjectsSlider'

function CreativeProject({value}) {


    return(
        <div className='creative_project_section' id='project'>
            <div className='text_project_section'>
                <h2>
                Креативные проекты
                </h2>
                <p>
                Проекты креативных индустрий в ЦА регионе
                </p>
            </div>
            <div className="CreativeSlider">
                <ProjectSlider value={value}/>
            </div>
        </div>
    )

}
export default CreativeProject