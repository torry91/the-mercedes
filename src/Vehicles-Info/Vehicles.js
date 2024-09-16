import React, { useState } from "react";
import CarCard from "./CarCard"; 
import mer1 from "../assets/mercedes.png";
import mer2 from "../assets/m2.png";
import iconUp from "../assets/icon-up.png";
import "../App.css";
import Buttons from "./Buttons";
import {data} from "./data";


function Vehicles () {
    
    const [newState,setState] = useState(data);

    const chosenCars = (searchTerm) => {
        const newCar = data.filter(element => 
            element.searchTerm === searchTerm);
            setState(newCar)
    }
    
    return (
    <div>
    <div className="veh-info">
        <h1 className="vehicles-title">Vehicles</h1>
        <p className="info-top veh-text">
            Explore the special offers on the current Mercedes-Benz line-up of
            luxury sedans, coupes, SUVs, wagons, convertibles, roadsters, hybrids
            and electric vehicles for sale.
        </p>
        </div>
        <Buttons filteredCars = {chosenCars}/>
        <CarCard lastState={newState}/>

    <div className="ending">
        <div className="the-m">
        <img className="bottom-image" src={mer1} alt="pic" width="50px" />
        <img className="bottom-img2" src={mer2} alt="pic" width="180px" />
        <span className="last-icons">
            <a href="https://www.instagram.com/MercedesBenzUSA/" target="blank" className="so-icon"
            >
            <i className="fab fa-instagram the-sign"></i>
            </a>
            <a href="https://www.youtube.com/@MercedesBenz" target="_blank"
                rel="noopener noreferrer"
                className="so-icon"
            >
                <i className="fab fa-youtube the-sign"></i>
            </a>
            <a href="https://x.com/mercedesbenzusa" target="_blank" rel="noopener noreferrer" className="so-icon"
            >
                <i className="fab fa-twitter the-sign"></i>
            </a>
            <a href="https://www.facebook.com/MercedesBenzUSA" target="_blank" rel="noopener noreferrer" className="so-icon"
            > 
            <i className="fab fa-facebook the-sign"></i>
            </a>
            </span>
        </div>
        </div>
        <br />
        <div className="bottom">
        <p className="bottom-form2">© 2024 Mercedes-Benz USA, LLC</p>
        <div className="arrow">
            <a href="#top" className="back-top">
            <img className="icon-form arrow veh-icon" src={iconUp} alt="pic" />
            </a>
        </div>
        </div>
    </div>
);
};

export default Vehicles;
