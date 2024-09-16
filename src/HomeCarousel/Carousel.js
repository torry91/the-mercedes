import "../App.css";
import { slides } from "../HomeCarousel/data";


function Carousel() {
    
    return (
        <div className="carousel-container">
            <div className="carousel">
                {slides.map((slide,index)=>(
                    <div className="slide1" key={index}>
                        <img src={slide.image} alt={slide.title1} className="pic-slider"/>
                        <h2 className="sub1">{slide.title1}</h2>
                        <div className="sub2">
                        <h2>{slide.title2}</h2>
                        </div>
                    </div>
                ))}
            </div>
            </div>
    )
}

export default Carousel;