const SliderComponent = ({ slides, currentSlide, prevSlide, nextSlide }) => {
    return (
        <div className="slider-container">
            <div className="slider" 
                style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: "transform 1.5s ease-in-out" }}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <h1 className="slide-title">{slide.title}</h1>
                        <img src={slide.imageSrc} alt="Car" className="slide-image" />
                        <div className="slide-details">
                            {slide.details.map((detail, i) => (
                                <div className="detail" key={i}>
                                    <img src={detail.icon} alt={detail.text} />
                                    <p>
                                        {detail.text}
                                        <br />
                                        <strong>{detail.value}</strong>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
}

export default SliderComponent;
