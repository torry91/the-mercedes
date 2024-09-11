import mer1 from "./mercedes.png";
import mer2 from "./m2.png";
import iconUp from "./icon-up.png";


const Shop  = () => {
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
        <div className="veh-nav-container">
            <ul className="veh-nav">
                <li className="veh-list"><a href="#evs">EVs</a></li>
                <li className="veh-list"><a href="#suvs">SUVs</a></li>
                <li className="veh-list"><a href="#sedans">Sedans & Wagons</a></li>
                <li className="veh-list"><a href="#coupes">Coupes</a></li>
                <li className="veh-list"><a href="#convertible">Convertible & Roadsters</a></li>
            </ul>
        </div>

        <section id="evs">
        <h4 className="veh-title">EVs</h4>a
        <hr className='the-veh-line'/>
        <div className="cars-list">
            <div className="car-info">
                <h3 className="the-name">EQB SUV</h3>
                <h4 className="gray">Starting at 53,000</h4>
                <p className="the-name">Resourceful</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqb-class/all-vehicles/2024-EQB250-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

            <div className="car-info">
                <h3 className="the-name">EQS SUV Maybach</h3>
                <h4 className="gray">Starting at 179,000</h4>
                <p className="the-name">Progressive</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqs-class/maybach-suv/all-vehicles/2024-EQS-SUV-MAYBACH-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
            </div>

            <div className="car-info">
                <h3 className="the-name">EQE Sedan</h3>
                <h4 className="gray">Starting at 74,000</h4>
                <p className="the-name">Groundbreaking</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqb-class/all-vehicles/2024-EQB250-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
            </div>
            
            <div className="car-info">
                <h3 className="the-name">EQS Sedan</h3>
                <h4 className="gray">Starting at 104,000</h4>
                <p className="the-name">Progressive</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqs-class/sedan/all-vehicles/2024-EQS450-4M-SEDAN-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
            </div>

            <div className="car-info">
                <h3 className="the-name">EQE SUV </h3>
                <h4 className="gray">Starting at 77,9000</h4>
                <p className="the-name">Magnificent at every turn</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/eqe-suv/all-vehicles/2023-EQE350-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
            </div>

            <div className="car-info">
                <h3 className="the-name">EQS SUV </h3>
                <h4 className="gray">Starting at 99,000</h4>
                <p className="the-name">Visionary</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqs-class/suv/all-vehicles/2024-EQS450-4M-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
            </div>
            </div>
            </section>

            <section id="suvs">
            <h4 className="veh-title">SUVs</h4>
            <hr className='the-veh-line'/>
            <div className="cars-list">
            <div className="car-info">
                <h3 className="the-name">GLA SUV </h3>
                <h4 className="gray">Starting at 43,000</h4>
                <p className="the-name">Compact & Sleek</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gla-class/all-vehicles/2024-GLA-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">GLB SUV </h3>
                <h4 className="gray">Starting at 45,800</h4>
                <p className="the-name">Adventurous</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/glb-class/all-vehicles/2024-GLB250-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">GLC SUV </h3>
                <h4 className="gray">Starting at 47,450</h4>
                <p className="the-name">Mid Size & Chic</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/glc-class/suv/all-vehicles/2024-GLC-300-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">GLC Coupe </h3>
                <h4 className="gray">Starting at 57,000</h4>
                <p className="the-name">Sporty & Spacious</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/glc-class/coupe/all-vehicles/2024-GLC-COUPE-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name"> EQB SUV</h3>
                <h4 className="gray">Starting at 53,050</h4>
                <p className="the-name">Resourceful</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqb-class/all-vehicles/2024-EQB250-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">GLE SUV</h3>
                <h4 className="gray">Starting at 61,850</h4>
                <p className="the-name">Well-Rounded</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gle-class/suv/all-vehicles/2024-GLE-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">EQE SUV</h3>
                <h4 className="gray">Starting at 77,900</h4>
                <p className="the-name">Magnificent at every turn</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/eqe-suv/all-vehicles/2023-EQE350-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">GLE Coupe</h3>
                <h4 className="gray">Price Coming Soon</h4>
                <p className="the-name">High Performance</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/eqe-suv/all-vehicles/2023-EQE350-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">GLS SUV</h3>
                <h4 className="gray">Starting at 89,200</h4>
                <p className="the-name">Full-Size Luxury</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gls-class/suv/all-vehicles/2024-GLS-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">EQS SUV Maybach</h3>
                <h4 className="gray">Starting at 179,900</h4>
                <p className="the-name">Visionary</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqs-class/maybach-suv/all-vehicles/2024-EQS-SUV-MAYBACH-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">G-Class SUV</h3>
                <h4 className="gray">Starting at 148,250</h4>
                <p className="the-name">Off Road Icon</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/g-class/all-vehicles/2024-G550-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">Mercedes-Maybach GLS SUV</h3>
                <h4 className="gray">Starting at 178,450</h4>
                <p className="the-name">Height of Luxury</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gls-class/maybach-suv/all-vehicles/2024-GLS-MAYBACH-SUV-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>
                </div>
                </section>

                <section id="sedans">
                <h4 className="veh-title">Sedans & Wagons</h4>
                <hr className='the-veh-line'/>
            <div className="cars-list">
            <div className="car-info">
                <h3 className="the-name">C-Class Sedan </h3>
                <h4 className="gray">Starting at 46,950</h4>
                <p className="the-name">Stylish & Agile</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/c-class/all-vehicles/2024-C-SEDAN-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">E-Class Sedan </h3>
                <h4 className="gray">Starting at 62,300</h4>
                <p className="the-name">Ultra Intelligent</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/e-class/sedan/all-vehicles/2024-E350-4M-SEDAN-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">EQE Sedan </h3>
                <h4 className="gray">Starting at 74,900</h4>
                <p className="the-name">Groundbreaking</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/e-class/sedan/all-vehicles/2024-E350-4M-SEDAN-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info all-terrain">
                <h3 className="the-name">E-Class All Terrain </h3>
                <h4 className="gray">Starting at 74,700</h4>
                <p className="the-name">Versatile</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/e-class/wagon/all-vehicles/2024-E-WAGON-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">S-Class sedans</h3>
                <h4 className="gray">Starting at 117,300</h4>
                <p className="the-name">Luxury Standard</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/e-class/wagon/all-vehicles/2024-E-WAGON-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">Mercedes Maybach S-Class</h3>
                <h4 className="gray">Starting at 198,300</h4>
                <p className="the-name">Unparalleled</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/s-class/maybach-sedan/all-vehicles/2024-MAYBACH-SEDAN-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>
                </div>
                </section>
                
                <section id="coupes">
                <h4 className="veh-title coupe-area">Coupes</h4>
                <hr id="scroll-target" className='the-veh-line'/>
                <div className="cars-list">
                    <div className="car-info">
                        <h3 className="the-name">CLA Coupe </h3>
                        <h4 className="gray">Starting at 44,400</h4>
                        <p className="the-name">Seductive</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">CLE Coupe </h3>
                <h4 className="gray">Starting at 56,500</h4>
                <p className="the-name">Smart & Stylish</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cle-class/coupe/all-vehicles/2024-CLE300-4M-COUPE-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>

                <div className="car-info">
                <h3 className="the-name">Mercedes-AMG GT</h3>
                <h4 className="gray">Starting at 134,900</h4>
                <p className="the-name">Elite Performance</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/amg-gt-class/2-door/all-vehicles/2024-AMG-GT55-COUPE-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                <hr className='the-veh-line'/>
                </div>
            </div>
            </section>
            
            <section id="convertible">
            <h4 className="veh-title">Convertible & Roadsters</h4>
                <hr className='the-veh-line'/>
                <div className="cars-list">
                    <div className="car-info">
                        <h3 className="the-name">CLE Cabriolet </h3>
                        <h4 className="gray">Starting at 64,350</h4>
                        <p className="the-name">Spacious</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cle-class/cabriolet/all-vehicles/2024-CLE300-4M-CAB-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                </div>
                <div className="car-info">
                        <h3 className="the-name">SL Roadster</h3>
                        <h4 className="gray">Starting at 111,800</h4>
                        <p className="the-name">Legendary</p>
                <img src = "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/sl-class/all-vehicles/2024-AMG-SL55-ROADSTER-AVP-DR.png" width="400px" height="190px" alt="pic"/>
                </div>
                </div>
                </section>
                <hr className='line2'/>

<div className="ending">
    <div className="the-m">
        <img className='bottom-image'src={mer1} alt="pic" width="50px"/>
        <img className='bottom-img2'src={mer2} alt="pic" width="180px"/>
        <span className="last-icons">
            <a href="https://www.instagram.com/MercedesBenzUSA/" target="blank" className="so-icon">
            <i className="fa-brands fa-instagram the-sign"></i>
            </a>
            <a href="https://www.youtube.com/@MercedesBenz" target="_blank" rel="noopener noreferrer" className="so-icon">
                    <i className="fab fa-youtube the-sign"></i>
                </a>
                <a href="https://x.com/mercedesbenzusa" target="_blank" rel="noopener noreferrer" className="so-icon">
                    <i className="fab fa-twitter the-sign"></i>
                </a>
                <a href="https://www.facebook.com/MercedesBenzUSA" target="_blank" rel="noopener noreferrer" className="so-icon">
                            <i className="fab fa-facebook the-sign"></i>
                        </a>
                        </span>
                        </div>
    </div>
    <br></br>
    <div className="bottom">
    <p className="bottom-form2">© 2024 Mercedes-Benz USA, LLC</p>
    <div className="arrow">
    <a href="#top" className="back-top">
        <img className='icon-form arrow veh-icon'src={iconUp} alt="pic"/>
    </a>
    </div>
    </div>
        </div>


        
    )
}

export default Shop ;
