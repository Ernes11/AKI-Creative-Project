import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import './CreativeProject.scss'
import ProjectSlider from './CreativeProjectSlider/ProjectsSlider'
import  axios  from 'axios';

function CreativeProject({value}) {
    const [headText,setHeadText] = useState({})
    
    function FetchHeadText() { axios.get('https://creative.kg/api/headertext/2')
    .then(res =>{
        setHeadText(res.data)
    })}
    useEffect (()=> {
      FetchHeadText()
    },[])
    

    return(
        <div className='creative_project_section' id='project'>
            <div className='text_project_section'>
                <h2>
                <FormattedMessage id='CreativeProjects'/>
                </h2>
                <p>
                {value === 'RU-RU' ? headText.text  
                  : (value === 'en-US'? headText.text_en  : headText.text_kg  )}
                </p>
            </div>
            <div className="CreativeSlider">
                <ProjectSlider value={value}/>
            </div>
        </div>
    )

}
export default CreativeProject