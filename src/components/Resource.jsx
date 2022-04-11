import { useEffect } from "react";
import "../sass/resources.scss";
import CreativeProject from "../section/Resources/Creative-Project-section/CreativeProject";
import HeadSection from "../section/Resources/Head-section/HeadSection";
import RecomendationSection from './../section/Resources/Recomendation-section/RecomendationSection';
import Utility from './../section/Resources/Utility/Utility';

function Resource( {value} ) {

    useEffect(()=> {
        window.scrollTo(0,0)
    },[])

    return(
        <div className="resources">
        <div className="container">
            <HeadSection/>
            <RecomendationSection value ={value}/>
            <CreativeProject value={value}/>
            <Utility value ={value}/>
        </div>
      </div>
    )
}
export default Resource