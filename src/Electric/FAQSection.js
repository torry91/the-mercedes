import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import mer1 from "../assets/mercedes.png";
import mer2 from "../assets/m2.png";

const FAQSection = () => {
    return (
        <div className='acc-wrapper'>
            <h2 className="customer el-faq"><b>Electric Cars FAQ</b></h2>
            <div>
            <Accordion className="accordion">
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                    <p>What is the current estimated range on all-electric Mercedes-Benz models?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>EQB SUV</p>
                    <p>EQB 250 = 245 mi</p>
                    <p>EQB 300 4MATIC® = 243 mi</p>
                    <p>EQB 350 4MATIC® = 227 mi</p>
                    <p><b>EQE Sedan</b></p>
                    <p>EQE 350 = 305 mi</p>
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
        <p>There is. For more details,see your certified tax professional or read about the new credits available under the Inflation Reduction Act, passed in 2022.</p>
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

    );
}

export default FAQSection;
