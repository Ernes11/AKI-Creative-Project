import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  "../../Head-section/headSection.scss"
import axios from "axios"

function UtilityDetails(){

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
          <h3 className="resourcesTitle">РЕСУРСЫ</h3>
          </div>
          <div className="details_headline">
          <h1>{details.name}</h1>
          <p>{details.text}</p>
          </div>
          <div className="details_img_wrapper">
            <img src={details.image} alt="" />
          </div>
          <div className="text_container container">
            <h2>Название подтемы</h2>
            <p>{details.text_full}</p>
          </div>
      </div>
  )
}
export default UtilityDetails