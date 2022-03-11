import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import EventInfo from '../components/EventInfo';
import '../sass/eventSection.scss'


export default function EventSection({oddClass, info, images=[], title}) {

    return (
        <section>
            <div className={`main-event__container event-section__element event-section__element${oddClass}`}>
                <EventInfo title={title} info={info} />
                <div className="main-event__image-album">
                    <Carousel
                    showArrows={true}
                    axis='vertical'
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={false}
                    interval={4000}
                    transitionTime ={600}
                    infiniteLoop={true}
                    swipeable={true}
                    >
                        {images.map((image) => {
                            return (
                                <img key={image} src={image} alt={image} />
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}