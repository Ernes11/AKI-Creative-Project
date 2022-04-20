import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import EventInfo from '../components/EventInfo';
import '../sass/eventSection.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


export default function EventSection({oddClass, info, imageId, title}) {
    const [ images, getImages] = useState ([]);
    
    function currentImages () {
        const imgArr = [];
        if(images.length){
            images.map((img) => {
                if (img.event === imageId){
                    imgArr.push(img.image)
                }
                return null;
            })
        }
        return imgArr;
    }

    useEffect(()=>{
        axios.get('https://creative.kg/api/eventimages/')
        .then(res =>{
            getImages(res.data.results);
        })
    }, [])

    

    return (
        <section>
            <div className={`main-event__container event-section__element event-section__element${oddClass}`}>
                <EventInfo title={title} info={info} />
                <div className="main-event__image-album">
                    <Carousel
                    showArrows={true}
                    axis='vertical'
                    showThumbs={false}
                    showIndicators ={false}
                    showStatus={false}
                    autoPlay={false}
                    interval={4000}
                    transitionTime ={600}
                    infiniteLoop={true}
                    swipeable={true}
                    >
                        {currentImages().length?
                        currentImages().map((image) => {
                            return (
                                <img key={image} src={image? image : '/images/events/empty.jpg'} alt={image} />
                            )
                        })
                        :
                        <img src='/images/events/empty.jpg' alt='nophoto' />
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    )
}