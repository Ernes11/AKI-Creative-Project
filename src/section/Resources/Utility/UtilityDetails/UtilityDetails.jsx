import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  "../../Head-section/headSection.scss"
import axios from "axios"
import { FormattedMessage } from 'react-intl';

function UtilityDetails({value}){

    const { Id } = useParams()
    console.log(Id)
    const [details,setDetails]= useState({})
    function FetchUtilityDetails() { axios.get(`https://creative.kg/api/formals/${Id}`)
    .then(res =>{
      setDetails(res.data)
    })}
    useEffect (()=> {
      FetchUtilityDetails()
      window.scrollTo(0,0)
    },[])
    return(
      <div >
      <div className="img_container">
          <img className="nines" src={'/images/resources9.svg'} alt="3213123" />
          <img className="eclipse"  src={'/images/Ellipse27.svg'} alt="23213" />
      </div>
      
      <div className="resources_title_container"> 
      <h3 className="resourcesTitle"><FormattedMessage id="Resource"/></h3>
      </div>
      <div className="details_headline">
      <h1>{value === 'RU-RU' ? details.name
            : (value === 'en-US'? details.name_en : details.name_kg )}</h1>
      <p> {value === 'RU-RU' ? details.description
            : (value === 'en-US'? details.description_en : details.description_kg )}</p>
      </div>
      <div className="details_img_wrapper">
        <img src={details.image} alt="" />
      </div>
      <div className="text_container container">
      <div dangerouslySetInnerHTML={{ __html: value === 'RU-RU' ? details.text
            : (value === 'en-US'? details.text_en : details.text_kg )} } />
      </div>
  </div>
  )
}
export default UtilityDetails