import CustomButton from "../../../../components/button/CustomButton";
import './SlidesCards.scss'

export default function SlidesCard ({img,title,body}) {

    return(
        <div className="slides_card">
            <div style={{width:'100%'}}>
                <img style={{width:'100%'}} src={img} alt="" />
            </div>
            <div className="title_container">
                <h2>{title}</h2>
            </div>
            <div className="body_container">
                <p>{body}</p>   
            </div>
            <div>
                <CustomButton className='SlidersBTN' type='outlined'>ПОДРОБНЕЕ</CustomButton>
            </div>
        </div>
    )
}