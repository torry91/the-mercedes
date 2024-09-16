import HeroSection from './HeroSection';
import ChargingInfo from './ChargingInfo';
import LevelInfo from './LevelInfo';
import TaxIncentives from './Taxes';
import ElectricCarousel from './ElectricCarousel';
import SliderComponent from './SliderComponent';
import FAQSection from './FAQSection';
import { useState } from 'react';
import sl1 from '../assets/sl1.jpeg';
import batt from '../assets/batt.png';
import batt1 from '../assets/batt1.png';
import batt2 from '../assets/batt2.png';
import sl2 from '../assets/sl2.jpeg';
import sl3 from '../assets/sl3.png';
import sl4 from '../assets/sl4.png';
import sl5 from '../assets/sl5.png';
import sl6 from '../assets/sl6.png';
import sl7 from '../assets/sl7.png';
import sl8 from '../assets/sl8.png';
import sl9 from '../assets/sl9.png';
import sl10 from '../assets/sl10.png';


const Electric = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Mercedes-Maybach EQS 680",
            imageSrc: sl1,
            details: [
                { icon: batt, text: "Battery capacity", value: "107.8 kWh" },
                { icon: batt1, text: "Range", value: "undefined ††" },
                { icon: batt2, text: "Acceleration", value: "0-60 mph in 4.1 sec" }
            ]
        },
        {
            title: "AMG EQE 4MATIC+",
            imageSrc: sl2,
            details: [
            {
                icon: batt,
                text: "Battery capacity",
                value: "90.6 kWh",
            },
            { icon: batt1, 
                text: "Range", 
                value: "230 mi ††" },
            {
                icon: batt2,
                text: "Acceleration",
                value: "0-60 mph in 3.2 sec",
            },
            ],
        },
        {
            title: "EQE 500 4MATIC",
            imageSrc: sl3,
            details: [
            {
                icon: batt,
                text: "Battery capacity",
                value: "90.6 kWh",
            },
            { icon: batt1, 
                text: "Estimated electric Range", 
                value: "277 mi Disclaimer††" },
            {
                icon: batt2,
                text: "Acceleration",
                value: "0-60 mph in 4.5 sec",
            },
            ],
        },
        {
            title: "EQB350W4",
            imageSrc: sl4,
            details: [
            {
                icon: batt,
                text: "Battery capacity",
                value: "70.5 kWh",
            },
            { icon: batt1, 
                text: "Estimated electric Range", 
                value: "207 mi Disclaimer††" },
            {
                icon: batt2,
                text: "Acceleration",
                value: "0-60 mph in 4.8 sec ",
            },
            ],
        },
        
        {
            title: "AMG EQE 4MATIC+",
            imageSrc: sl5,
            details: [
            {
                icon: batt,
                text: "Battery capacity",
                value: "90.6 kWh",
            },
            { icon: batt1, 
                text: "Estimated electric Range", 
                value: "235 mi Disclaimer††" },
            {
                icon: batt2,
                text: "Acceleration",
                value: "0-60 mph in 3.4 sec ",
            },
            ],
        },
        {
            title: "AMG EQS 4MATIC+",
            imageSrc: sl6,
            details: [
            {
                icon: batt,
                text: "Battery capacity",
                value: "108.4 kWh",
            },
            { icon: batt1, 
                text: "Estimated electric Range", 
                value: "300 mi Disclaimer††" },
            {
                icon: batt2,
                text: "Acceleration",
                value: "0-60 mph in 3.4 sec ",
            },
            ],
        },
        {
            title: "EQS 450+",
            imageSrc: sl7,
            details: [
            {
                icon: batt,
                text: "Battery capacity",
                value: "118 kWh",
            },
            { icon: batt1, 
                text: "Estimated electric Range", 
                value: "339 mi Disclaimer††" },
            {
                icon: batt2,
                text: "Acceleration",
                value: "0-60 mph in 6.5 sec ",
            },
            ],
        },
        {
            title: "Mercedes-Maybach EQS 680",
            imageSrc: sl8,
            details: [
            {
                icon: batt,
                text: "Battery capacity",
                value: "107.8 kWh",
            },
            { icon: batt1, 
                text: "Estimated electric Range", 
                value: "undefined ††" },
            {
                icon: batt2,
                text: "Acceleration",
                value: "0-60 mph in 4.1 sec",
            },
            ],
        },
        {
            title: "EQE 350+",
            imageSrc: sl9,
            details: [
            {
                icon: batt,
                text: "Battery capacity",
                value: "90.6 kWh",
            },
            { icon: batt1, 
                text: "Estimated electric Range", 
                value: "298 ††" },
            {
                icon: batt2,
                text: "Acceleration",
                value: "0-60 mph in 6.2 sec",
            },
            ],
        },
        {
            title: "EQE 350 4MATIC",
            imageSrc: sl10,
            details: [
            {
                icon: batt,
                text: "Battery capacity",
                value: "90.6 kWh",
            },
            { icon: batt1, 
                text: "Estimated electric Range", 
                value: "280 ††" },
            {
                icon: batt2,
                text: "Acceleration",
                value: "0-60 mph in 6.0 sec",
            },
            ],
        },
    ];

    const nextSlide = () => {
        setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(current => (current === 0 ? slides.length - 1 : current - 1));
    };

    return (
        <div>
            <HeroSection />
            <ChargingInfo />
            <LevelInfo />
            <TaxIncentives />
            <ElectricCarousel />
            <SliderComponent slides={slides} currentSlide={currentSlide} prevSlide={prevSlide} nextSlide={nextSlide} />
            <FAQSection />
        </div>
    );
}

export default Electric;
