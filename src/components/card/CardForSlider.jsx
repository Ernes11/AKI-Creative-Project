

import './CardForSlider.scss'

import { AiFillInstagram } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

export default function CardForSlider ({img,name,company ,id,inst,facebook,telegram,position}) {

    return(
        <div className="main_slides_card">
            <div className='img_container_main' >
                <img  style={{width:'100%', height:'100%'}} src={img} alt="" />
                 <div className="main_position">
                     <p>
                     {position}
                    </p>
                </div>
            </div>
            <div className="title_container">
                <h2>{name}</h2>
            </div>
            <div className="body_container">
                <p>{company}</p>   
            </div>
            <div className="main_social-icons">
                   <ul >
                       <a target="_blank"  rel="noreferrer" href={facebook}><FaFacebookSquare  className="icons" /></a>
                       <a  target="_blank" rel="noreferrer" href={telegram}><FaTelegram size={20} className="icons" /></a>
                       <a  target="_blank" rel="noreferrer" href={inst}><AiFillInstagram size={20} className="icons" /></a>
                   </ul>
            </div>
        </div>
    )
}