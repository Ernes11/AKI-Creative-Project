import { Link } from "react-router-dom";
import CustomButton from "../../../../components/button/CustomButton";
import './SlidesCards.scss'
import { FormattedMessage } from 'react-intl';

export default function SlidesCard ({img,title,body ,id,type}) {

    return(
        <div className="slides_card">
            <div style={{width:'100%' , height:'50%'}}>
                <img  style={{width:'100%', height:'100%'}} src={img} alt="" />
            </div>
            <div className="title_container">
                <h2>{title}</h2>
            </div>
            <div className="body_container">
                <p>{body}</p>   
            </div>
            <div>
               <Link to={`${type}/${id}`}> <CustomButton className='SlidersBTN' type='outlined'><FormattedMessage id="More"/></CustomButton></Link>
            </div>
        </div>
    )
}