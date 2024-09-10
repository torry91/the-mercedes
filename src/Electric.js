import electricIntro from './electric.jpeg';
import electricBkgr from './electric-bkgr.png';
import Carousel from 'react-bootstrap/Carousel';
import car1 from "./car1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import child from "./child.jpeg";
import elcar from './elcar.jpeg';
import serv from "./serv.jpeg";
import { useEffect, useState} from 'react';
import {gsap} from 'gsap';
import sim from './sim.png';
import calc from './calc.png';
import inc from './inc.png';
import finder from './finder.png'; 
import sl1 from "./sl1.jpeg";
import batt from "./batt.png";
import batt1 from "./batt1.png";
import batt2 from "./batt2.png";
import sl2 from "./sl2.jpeg";
import sl3 from "./sl3.png";
import sl4 from "./sl4.png";
import sl5 from "./sl5.png";
import sl6 from "./sl6.png";
import sl7 from "./sl7.png";
import sl8 from "./sl8.png";
import sl9 from "./sl9.png";
import sl10 from "./sl10.png";
import mer1 from "./mercedes.png";
import mer2 from "./m2.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import charge from "./charge.png";
import kilow from "./kilow.webp";
import level2 from "./level2.webp";
import mercme from "./mercme.webp";
import level1 from "./level1.webp";
import level3 from "./level3.webp";
import image4 from "./image4.png";

    const Electric = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
            
        const slides = [
            {
                title: "Mercedes-Maybach EQS 680",
                imageSrc: sl1,
                details: [
                {
                    icon: batt,
                    text: "Battery capacity",
                    value: "107.8 kWh",
                },
                { icon: batt1, 
                    text: "Range", 
                    value: "undefined ††" },
                {
                    icon: batt2,
                    text: "Acceleration",
                    value: "0-60 mph in 4.1 sec",
                },
                ],
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
            setCurrentSlide((current) => {
                return current === slides.length - 1 ? 0 : current + 1;
            });
            };
        
            const prevSlide = () => {
            setCurrentSlide((current) => {
                return current === 0 ? slides.length - 1 : current - 1;
            });
            };

        useEffect(() => {
            gsap.fromTo( ".electricIntro",
                {  x:'-40vw'},
                {  x:'0vW',duration: 2.2, ease: "power1.out"}
            );
        },[]);

    return (
        <div>

        <div className='ele-cont'>
        <img src={electricBkgr} className="electric-image" alt="electric"/>
        
        <div className='overlay'>
            <div className='over-car'>
        <img src={electricIntro} alt='ele' className="electricIntro"/>
        </div>
                <div className='over-scr'>
                <h3>An evolution of electric luxury</h3>
                <p>Pouring over a century of our knowledge into electric mobility, 
                    we're transforming the driving experience, delivering the luxury and performance you expect from Mercedes-Benz.</p>
                    </div>
                    </div>
                    </div>
                    <div className='sub-el'>
                <h3 className='char'>At home or on the road, charging your all-electric
                Mercedes-Benz is designed to be simple.</h3>
            </div>
            <div className='bl1'>
                <img src = {charge} alt='pic' className='charge-im'/>
                <div className='bl2'>
                    <p><b>An intuitive charging experience wherever you are.</b></p>
                    <p>At public charging stations, Mercedes me Charge seamlessly incorporates the nation’s largest charging networks into the Mercedes me connect app — so you don't need multiple apps.</p>
                    <p>At home, drivers can take advantage of reduced electricity rates — just plug in at night for a full charge in the morning and ultimate convenience.</p>
                </div>
                </div>
                <div className='sub-el'>
                    <h3>Discover the charging options.</h3>
                    <p>While your all-electric Mercedes-Benz can travel long distances without a charging stop, eventually, you’ll need to recharge. Electric vehicle batteries are charged through a Level 3, 2 or 1 charger. The higher the number, the faster the charge.</p>
                </div>
                <div className='container-kW'>
                    <div className='row'>
                        <div className='column'>
                        <img src={level1} alt='pic'/>
                        <p><b>2–4 miles per 1 hour</b></p>
                        <p className='charge-text'>Level 1 charging uses a standard 120V household outlet. Given its limited output — only up to 1.9 kW — we recommend this method only when faster options are not available. Your EV’s Mobile Flex Charging Cable includes a plug that is compatible with household outlets.</p>
                    </div>
                    <div className='column'>
                        <img src={level2} alt='pic'/>
                        <p><b>Up to 30 miles per 1 hour</b></p>
                        <p className='charge-text'>Level 2 charges nine times faster than Level 1 and is widely available at public stations nationwide. At home, the Mercedes-Benz Wallbox, available through your dealer, is the perfect solution for convenient overnight charging, so you’re ready to roll the next morning.</p>
                    </div>
                    <div className='column'>
                        <img src={level3} alt='pic'/>
                        <p><b>From 10 – 80% in 30 minutes</b></p>
                        <p className='charge-text'>Level 3, also called DC Fast Charging, is the fastest charging method at up to 400 kW. This charger type is mainly found in public places like parking facilities, rest stops, and shopping centers.</p>
                    </div>
                    </div>
                <div  className='row'>
                    <div className='large-column'>
                    <p><b>What is a kilowatt (kW) and kilowatt-hour (kWh)?</b></p>
                    <p className='charge-text'> A kilowatt (kW) is a unit of power that measures the charging speed of an EV. Your vehicl's battery has a maximum charging speed it can accept, and the EV charger has a maximum charging output it can provide — both are expressed in kilowatts.</p>
                    <p className='charge-text'> A kilowatt-hour (kWh) is a unit of energy that measures your battery's capacity, similar to gallons in a gas tank. You may recognize kilowatt-hours from your electricity bill, where your utility tracks your electricity usage. When you recharge your vehicle, the amount charged is measured in kilowatt-hours.</p>
                    </div>
                    <div className='large-column'>
                        <img src={kilow} alt="pic" className='kw'/>
                    </div>
                    <div  className='row'>
                    <div className='large-column'>
                    <img src={mercme} alt="pic" className='kw'/>
                    </div>
                    <div className='large-column'>
                    <p className='charge-text'><b>Mercedes me connect: One app to access them all.</b></p>
                    <p className='charge-text'>The Mercedes me connect app features Mercedes meCharge, giving you seamless access to all major public charging networks — that’s over 85,000 charging stations across the country.Plus, model year 2024 all-electric Mercedes-Benz vehicle owners who activate Mercedes me Charge get 2 years of unlimited charging sessions at Mercedes-Benz Charging Hub stations and 2 years of complimentary 30-minute charging sessions at Electrify America stations. </p>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className='sub-el'>
                        <h3 className='el-pre'><b>Unlock the Future of Driving with Mercedes-Benz Electric</b></h3>
                        <p>Our all-electric vehicles not only redefine what it means to drive but also bring with them a host of financial and environmental benefits. Explore how making the switch to electric can enhance your lifestyle, save you money, and reduce your carbon footprint.</p>
                    </div>
            <div className='taxes'>
                <div className='tx-info'>
                <figure><img src={child} width="450px" alt='pic' className='hover-el'/></figure>
                <div className='centered'>
                <h3>Tax Credits & Incentives</h3>
                <p>Owning an all-electric Mercedes-Benz comes with more than a few perks. Consult your tax advisor for any state or local incentives for purchasing electric vehicles.Driving electric combines luxury with smart financial perks,incentives, an Eco-conscious driving.</p>
                </div>
                </div>
                
                <div className='tx-info'>
                <figure><img src={elcar} width="450px" alt='pic' className='hover-el'/></figure>
                    <div className='centered'>
                    <h3>Cost of Ownership</h3>
                    <p> The cost of electricity — measured by kilowatt hour, or kWh — typically remains steady, with average rates at roughly 15 cents per kWh.Disclaimer[6] That’s about $540 a year — less than half the cost of fueling a conventional vehicle.</p>
                    </div>
                    </div>

                    <div className='taxes'>
                    <div className='tx-info'>
                    <figure><img src={serv} width="450px" alt='pic' className='hover-el'/></figure>
                    <div className='centered'>
                    <h3>Service & Maintenance</h3>
                    <p> Battery upkeep is easy and typically requires fewer scheduled maintenance visits. Owning an all-electric Mercedes-Benz means you get complementary comprehensive coverage with your first scheduled maintenance at 2 years or 20,000 miles.</p>
                    </div>
                    </div>

                    <div className='tx-info'>
                <figure><img src={image4} width="450px" alt='pic' className='hover-el'/></figure>
                    <div className='centered'>
                    <h3>Charging x Starbucks</h3>
                    <p> Mercedes-Benz and Starbucks team up to co-locate EV charging stations at over 100 Starbucks stores across the country. </p>
                    </div>
                    </div>
                    </div>
                    

            </div>
            <div className='electric-carousel'>
    <Carousel className='el-car' interval={3000} pause={false} autoPlay >
        <Carousel.Item>
        <img src={car1} alt="car"className='image-crsl'/>
        <Carousel.Caption>
            <h3>All-Electric Powertrain</h3>
            <p>The Mercedes-Benz all-electric platform, powered with renewable energy, advances the way we move.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img src={image2} alt="car" className='image-crsl'/>
        <Carousel.Caption>
            <h3>MBUX Hyperscreen</h3>
            <p>Unveiling the next chapter of interaction between vehicle and driver comes the available MBUX Hyperscreen.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={image3} alt="car"  className='image-crsl'/>
        <Carousel.Caption>
            <h3>Over-The-Air Updates</h3>
            <p>Activate completely new vehicle functions with over-the-air updates via your user profile.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div> 

    <div className='arow-grid'>
        <div className='ben1'>
            <h1>Take the next step</h1>
            <h5>Discover what’s possible with our helpful tools</h5>
        </div>
        <div className='benefits'>
        <div className='grid-item'>
            <img src={calc} alt='pic' className='little'  />
            <h3>Charging Time Calculator</h3>
            <p>Find out how quickly you can charge up at home and on the road.</p>
            <button className='grid-btn'>Get Estimates</button>
        </div>

        <div className='grid-item'>
            <img src={sim} alt='pic' className='little'/>
            <h3>Range Simulator</h3>
            <p>Variables like outside temperature and driving styles can affect electric range.Simulate a drive to learn more. </p>
            <button  className='grid-btn'>Explore the Range Simulator</button>
        </div>

        <div className='grid-item'>
        <img src={finder} alt='pic' className='little finder' />
            <h3>Charge finder</h3>
            <p className='finder'>Got a commute or road trip in mind? Discoverhow convinient is to recharge when neeeded.</p>
            <button className='grid-btn'>Explore Chargers</button>
        </div>

        <div className='grid-item'>
        <img src={inc} alt='pic' className='little'/>
            <h3>Incentives calculator</h3>
            <p>Owning a electric vehicle comes with benefits.Learn what tax credites and incentives you may be eligible to recieve.</p>
            <button className='grid-btn'>Calculate Potential Benefits</button>
        </div>
    </div>
    </div>
    <div className='sub-el'>
        <h1 className='el-pre'>The Future of Automotive Excellence</h1>
        <p className='el-pre'> Begin a journey through our curated selection of cutting-edge electric vehicles, each crafted with precision and performance in mind. From powerful battery capacities to lightning-fast acceleration, these models represent the pinnacle of innovation in the automotive world. Whether you're drawn to sleek design, advanced technology, or eco-friendly efficiency, our collection has something to inspire every driver.</p>
    </div>
    <div className="slider-container">
        <div className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)`,
        transition: "transform 1.5s ease-in-out",
    }}>
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
    <div className='acc-wrapper'>
    <h2 className="customer el-faq"><b>Electric Cars FAQ</b></h2>
            <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header">
        <p>What is the current estimated range on all-electric Mercedes-Benz models?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p>EQB SUV</p>
<p>EQB 250 = 245 mi</p>
<p>EQB 300 4MATIC® = 243 mi</p>
<p>EQB 350 4MATIC® = 22 7mi</p>
<p><b>EQE Sedan</b></p>
<p>EQE 350 = 305 mi</p>
<p>EQE 350 4MATIC® = 260 mi</p>
<p>EQE 500 4MATIC® = 260 mi</p>
<p>AMG EQE = 225 mi</p>
<p><b>EQE SUV</b></p>
<p>EQE 350 = 279 mi</p>
<p>EQE 350 4MATIC® = 253 mi (with All-Season Tires)</p>
<p>EQE 500 4MATIC® = 269 mi</p>
<p><b>EQS Sedan</b></p>
<p>EQS 450+ = 350 mi</p>
<p>EQS 450 4MATIC® = 340 mi</p>
<p>EQS 580 4MATIC® = 340 mi</p>
<p>AMG EQS = 277 mi</p>
<p><b>EQS SUV</b></p>
<p>EQS 450 = 305 mi</p>
<p>EQS 450 4MATIC® = 285 mi</p>
<p>EQS 580 4MATIC® = 285 mi</p>
<p><b>EQS SUV Maybach</b></p>
<p>280 mi</p>
        </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header">
        <p >How do I extend my EV range?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p>ECO Mode, or ECO Assist Function, activated with the Dynamic Select button can help extend the range of your Mercedes-Benz EV.
Depending on the vehicle's equipment, ECO Assist analyzes the expected route data. This allows the system to optimally adjust the driving style for the route ahead, using minimal energy and recuperating as much as possible.</p>
<p>If the system detects an event or vehicle ahead, ECO Assist will calculate an optimized speed based on the distance and available route information.</p>
<p>In this case, releasing the accelerator pedal will activate Override Mode via intelligent recuperation. If ECO Assist detects a vehicle traveling in front or a stationary vehicle ahead, it can apply the brake to bring your vehicle to a standstill. For example, at the end of a traffic jam or if a detected vehicle ahead stops in front of you.</p>
<p>If the deceleration provided by ECO Assist is not sufficient, you must also brake with the service brake. For example, if you begin to accelerate in slow-moving traffic and the distance to the vehicle in front is very short.</p>
<p>Depending on the vehicle equipment and at low speeds (e.g., in a parking garage or on play streets), no adjustment will be made for stationary vehicles and therefore no display will appear.</p></AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content">
        <p>What are the different charging levels for EV batteries?</p>
    </AccordionSummary>
    <AccordionDetails>
    <p>Electric vehicles require charging through either a Level 1, 2 or 3 charger.</p>
<p>The three levels indicate different charging speeds, measured in kilowatts (kW), accessible via home chargers or public charging stations.</p>
<p><b>Level 1</b></p>
<p>This method uses a standard household outlet that connects using the Mobile Flex Charging cable provided with every all-electric Mercedes-Benz vehicle. This level charges your vehicle at a rate of around 2-4 miles per hour on a 110V circuit. Due to the very limited power output, we do not recommend relying on this method to charge your Mercedes-Benz EV.</p>
<p><b>Level 2</b></p>
<p>This method is available for both home and public charging. For charging at home, a wallbox on a dedicated circuit is required. Your dealer can assist with purchasing and arranging installation. As a home charging solution, Level 2 is capable of charging at a rate of around 20-30 miles per hour on a 240V circuit. At a maximum of 9.6 kW, the EQS can charge from 10 – 100% in just over 11 hours.</p>
<p><b>Level 3</b></p>
<p>This is called DC Fast Charging, and it is the fastest method of charging with a growing number of public stations available nationwide. The amount of electricity required, and cost of installation makes Level 3 DC Fast Charging impractical for home use. However, DC Fast Charging can be found along highways, in shopping centers and more, making long road trips possible for EVs.</p>
    </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header">
        <p>How do I locate nearby EV charging stations?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p><b>For EQS/EQE Sedans and SUVs, model year 2024 and newer and EQB SUVs.</b></p>
<p>Using your Mercedes-Benz User Experience (MBUX) 7 navigation system:</p>
<ul>
<li>Tap the EQ icon on the top left of the head unit screen.</li>
<li>Select “Charging Stations” to display a list, along with the option to filter by charger type.</li>
<li>To filter, tap the filter icon next to “In the Vicinity.”</li>
<li>Select your desired charging location.</li>
<li>Tap “Let’s Go” and let MBUX navigation guide you on the fastest route.</li>
</ul>
<p><b>For Model Year 2022 and 2023 EQB (MBUX 6).</b></p>
<p>Using your Mercedes-Benz User Experience (MBUX) 6 navigation system:</p>
<ul>
<li>Select your preferred charging station in the navigation system.</li>
</ul>
<p>Alternatively, you can:</p>
<ul>
<li>Tap Navigation -Advanced -View -Map Element</li>
<li>Tap POIs (Points of Interest) symbols.</li>
<li>Select “All Categories.”</li>
<li>Switch on the Charging Stations category.</li>
</ul>
<p>Charging stations in the vicinity of the vehicle can be recognized by the following symbols:</p>
<ul>
<li>Online charging stations: Blue symbols</li>
<li>On-board charging stations: White symbols</li>
</ul>
<p>To ensure you are parked at the right station, check the charger ID on the MBUX display and reference the ID outside at the charger where you are parked.</p>
<ul>
<li>Select the icon (e.g. CCS 150 kW) under the charger ID.</li>
</ul>
<p>[Note: This center touchscreen display also offers all MBUX features but operates on a different software version than the EQS and other all-electric Mercedes-Benz models.]</p>
<p><i>For All Mercedes-Benz EV Models</i></p>
<p>Charging stations can be found using the Mercedes me connect app:</p>
<ul>
<li>Tap the navigation tab on the bottom right corner to open the map on your current location.</li>
<li>Select “Charging Stations” to reveal all nearby stations.</li>
<li>Zoom into the map to find local charger availability or scroll for a list of nearby chargers and their information.</li>
<li>You can filter by charging speed, charging network or authentication method.</li>
<li>Once you find your desired charging station, you can send it to your vehicle’s MBUX navigation system to guide you on the fastest route.</li>
</ul>
</AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header">
        <p>How do I add nearby EV charging stations to my route?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>Using the Navigation with Electric Intelligence, toggle on the “Plan Charging Stops” route option.</p>
            <p>When the Plan Charging Stops route option is enabled, the optimal route based on time is calculated along with the required charging stations.</p>
            <p>The charging stops along your route are determined by the route and charging times needed. They are then set as destinations.</p>
            <p>Navigation with Electric Intelligence constantly checks numerous influencing variables, such as the vehicle’s interior climate control or changes in the weather. For each section of the route, the current energy requirement is calculated from the high-voltage battery.</p>
            <p>The multimedia system determines the ideal charging stations along the route based on availability and charging capacity.</p>
            <p>For each charging stop, the required amount of energy and the expected charging time is calculated and displayed.</p>
            <p>f the driver wishes, they can receive a mobile phone notification when the required condition of charge is reached.</p>I
            <p>The high-voltage battery will continue to charge until the process is interrupted by the driver.</p>
            <p>You can modify the route calculated by the Navigation with Electric Intelligence. The options “Ignore Charging Station” and “Add Charging Station” are available for this purpose.</p>
        </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content">
        <p>How do I filter for different EV charger types?</p>
    </AccordionSummary>
    <AccordionDetails>
    <p>EQE and EQS Sedans and SUVs. Model year 2024 and newer EQB (MBUX 7).</p>
    <ul>
<li>Tap the EQ icon on the top left of the head unit screen to search for chargers.</li>
<li>Select “Charging Stations” to display a list, along with the option to filter by charger type.</li>
<li>To filter, tap the filter icon next to “In the Vicinity.”</li>
<li>Select your preferred type of charger.</li>
</ul>
<p>One Arrow = Chargers with up to 49 kW charging power. Typically, these are the slowest charging speeds and can take more than 8 hours to charge fully vehicles.</p>
<p>Two Arrows = Chargers between 50 kW and 149 kW of charging power. These are moderate- to high-charging speeds capable of charging your vehicle in less than 2 hours.</p>
<p>Three Arrows = Chargers with 150 kW or more charging power. These chargers offer the fastest charging speeds for your Mercedes-EQ vehicle.</p>
    </AccordionDetails>
    </Accordion>
    <h2 className="customer">Cost & Savings</h2>
            <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header">
        <p>Is there a federal tax credit for buying electric?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p>There is. For more details, see your certified tax professional or read about the new credits available under the Inflation Reduction Act, passed in 2022.</p>
        </AccordionDetails>
        </Accordion>
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header">
        <p>What about local incentives?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>Many states offer their own incentives, including rebates and other non-monetary incentives like unlimited access to the HOV lane, which saves you time in traffic. To see your state's incentives, visit www.afdc.energy.gov/laws/state.</p>
            </AccordionDetails>
            </Accordion>
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content">
        <p>Do I have to pay for electricity like I pay for gas?</p>
    </AccordionSummary>
    <AccordionDetails>
    <p>Yes, but it's much cheaper. Electricity in the United States purchased for your home through your utility is typically around 12 cents per kWh. If you drive 15,000 miles a year, that's about $540. A year of gas, on the other hand, can cost around $1,400. On top of that, the price of gasoline can fluctuate wildly, whereas the price of electricity is relatively stable. To see the average price of electricity in your state, visit the website for the Energy Information Administration. All new Mercedes-Benz EV customers also get 2 years of free, unlimited 30-minute charging sessions through Electrify America. This enables cross-country travel essentially for free.</p>
    </AccordionDetails>
    </Accordion>

    <h2 className="customer">Charging</h2>
            <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header">
        <p>How do I start a charging session?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p>Charging sessions can be initiated in multiple ways. First, your dealer will make sure your vehicle is activated with Mercedes me Charge. Upon activation, your vehicle will be ready to initiate charging sessions with Plug & Charge, activation through the RFID card, or remote activation through the MMC app, or remote activation through the vehicle’s navigation system. Electrify America stations support Plug & Charge, which is the most convenient and secure way to initiate charging sessions. Simply plug in the activated vehicle and charging will begin automatically. For more information about this and other methods, please visit https://www.mbusa.com/en/charge/on-the-go.</p>
        </AccordionDetails>
        </Accordion>
    
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header">
        <p>How does regenerative braking work?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>Regenerative braking adds to your charge as you drive. When the vehicle is coasting and the driver touches the brake pedal, the electric motor acts as a generator, slowing the car and pumping electric power back into the battery. Essentially, the momentum of the car is converted into extra power, extending your range as you go. </p>
            </AccordionDetails>
            </Accordion>
    
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content">
        <p>What are the different levels of charging?</p>
    </AccordionSummary>
    <AccordionDetails>
    <p>You might have heard of three levels of charging electric vehicles: Level 1, Level 2 and Level 3 DC fast charging. Here's what they mean:</p>
<ul>
<li>Level 1 charging: This is charging that takes place on a typical electric outlet.</li>
<li>Level 2 charging: This level of charging utilizes a wallbox that’s connected to a 240-volt outlet. Away from home, most public charging stations are Level 2. Some are free, while others require a paid membership. This is the most common type of charging for electric vehicles.</li>
<li>Level 3 DC Fast Charging: This is the fastest kind of charging currently available, with a growing number of stations available publicly. The amount of electricity they require, and cost of installation, makes them impractical for home use. DC Fast Charging can also be found along highways, making long road trips possible for EVs.</li>
</ul>
    </AccordionDetails>
    </Accordion>

    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content">
        <p>Where can I find public charging stations, and are there enough of them where I drive?</p>
    </AccordionSummary>
    <AccordionDetails>
    <p>There are over 65,000 charging stations throughout the United States, with more being added practically every day. The best way to find them is with Mercedes me Charge, our charging ecosystem. Mercedes me Charge integrates multiple charging networks into one, giving you more freedom and flexibility. You can view all available places to charge in the Mercedes me Connect app or even in the headunit of your Mercedes-EQ vehicle.</p>
    </AccordionDetails>
    </Accordion>
    
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content">
        <p>How safe is charging?</p>
    </AccordionSummary>
    <AccordionDetails>
    <p>Yes, but it's worth noting that a standard household outlet is a 110V outlet which is far less powerful than a 240V outlet, which is typically found with dryers or can be installed by a licensed electrician. The good news is that having a 240V charging station installed in your home is easy. The ChargePoint Home Flex is the wallbox we’d recommend. Please go to their website to purchase one. In addition, we recommend using Qmerit for installation.</p>
    </AccordionDetails>
    </Accordion>

    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content">
        <p>Can I charge at home with a standard household outlet?</p>
    </AccordionSummary>
    <AccordionDetails>
    <p>Every Mercedes-Benz electric vehicle has specific features to ensure safe charging. Instead of the electricity flowing as soon as it's plugged in, like a traditional appliance, the vehicle and wallbox converse to make sure it's safe before any electricity flows. Special attention has also been paid to make sure you can safely charge in wet weather.</p>
    </AccordionDetails>
    </Accordion>
    </div>
    <hr id="scroll-target" className='line2'/>
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
    </div>
    </div>
)
}

export default Electric;
