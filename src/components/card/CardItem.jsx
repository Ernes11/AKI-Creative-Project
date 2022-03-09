
import CardSlider from '../card/CardSlider';


function CardItem() {
  const sliderClick = (slider)=>{
  }

  
  const slides = [
    {image:"../../images/cofounder.png",
    title:"Александ Александров",
    description:"ОсОО Кодифай",
    clickEvent:sliderClick},

    {image:"../../images/cofounder.png",
    title:"Александ Александров",
    description:"ОсОО Кодифай",
    clickEvent:sliderClick},
    {image:"../../images/cofounder.png",
    title:"Александ Александров",
    description:"ОсОО Кодифай",
    clickEvent:sliderClick},
    {image:"../../images/cofounder.png",
    title:"Александ Александров",
    description:"ОсОО Кодифай",
    clickEvent:sliderClick},
    {image:"../../images/cofounder.png",
    title:"Александ Александров",
    description:"ОсОО Кодифай",
    clickEvent:sliderClick},
    {image:"../../images/cofounder.png",
    title:"Александ Александров",
    description:"ОсОО Кодифай",
    clickEvent:sliderClick},
    {image:"../../images/cofounder.png",
    title:"Александ Александров",
    description:"ОсОО Кодифай",
    clickEvent:sliderClick},
    {image:"../../images/cofounder.png",
    title:"Александ Александров",
    description:"ОсОО Кодифай",
    clickEvent:sliderClick},
    {image:"../../images/cofounder.png",
    title:"Александ Александров",
    description:"ОсОО Кодифай",
    clickEvent:sliderClick},
    {image:"../../images/cofounder.png",
    title:"Александ Александров",
    description:"ОсОО Кодифай",
    clickEvent:sliderClick},
  ]
  return (
    <div id="body">
      <CardSlider slides={slides}/>
    </div>
  );
}

export default CardItem;