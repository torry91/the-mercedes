import Carousel from 'react-bootstrap/Carousel';
import car1 from "../assets/car1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";

const ElectricCarousel = () => {
    return (
        <div className='electric-carousel'>
            <Carousel className='el-car' interval={3000} pause={false} autoPlay>
                <Carousel.Item>
                    <img src={car1} alt="car" className='image-crsl'/>
                    <Carousel.Caption>
                        <h3>All-Electric Powertrain</h3>
                        <p>The Mercedes-Benz all-electric platform, powered with renewable energy...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image2} alt="car" className='image-crsl'/>
                    <Carousel.Caption>
                        <h3>MBUX Hyperscreen</h3>
                        <p>Unveiling the next chapter of interaction...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image3} alt="car" className='image-crsl'/>
                    <Carousel.Caption>
                        <h3>Over-The-Air Updates</h3>
                        <p>Activate completely new vehicle functions...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ElectricCarousel;
