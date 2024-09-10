import image1 from "./main.png";
import "./App.css";
import { useRef, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Tabs from './Tabs/Tabs';
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import CarouselComponent from "./CarouselComponent";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';
import {Link} from "react-router-dom";
import mer1 from "./mercedes.png";
import mer2 from "./m2.png";

const Home = () => {
    const quickFactsRef = useRef(null);
    const firstDriverRef = useRef(null);
    const [contactValue,setContactValue]=useState(0);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#scroll-target'){
        const targetElement = document.getElementById("scroll-target");
        if(targetElement) {
            const yOffset = 2800;
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: "smooth"});
        }
        }
    },[location]);

    const handleContactChange = (event,newValue) => {
        setContactValue(newValue);
    }

    const scrollToSection = (ref, targetId = null) => {
    if (ref.current) {
    let target = ref.current;
    if(targetId) {
        target = ref.current.querySelector(targetId);
    }
    if (target) {
    target.scrollIntoView({behavior: 'smooth' , block : targetId ? 'start' : 'nearest'});
    }
}
};

    return (
        <div>
        <div className="the-container">
        <div className="image-home">
            <img src={image1} alt="mercedes" className="home-pic"/>
        </div>
        </div>
        
        <div className="tabs">
            <Tabs 
            scrollToSection={scrollToSection}
            firstDriverRef={firstDriverRef}
            quickFactsRef={quickFactsRef}/>
            </div>
            
            <div>
        <div ref = {quickFactsRef}><TabInfoOne quickFactsRef={quickFactsRef}/></div>
        <div ref = {firstDriverRef}><TabInfoTwo firstDriverRef={firstDriverRef}/></div>
        </div>
        
        <div className='introF cont3'>
            <h1 className='bertha title3 stand-ser'>Standard Services</h1>
            <p className='bertha title3 stand-ser2'>The essential digital equipment for your Mercedes – AVAILABLE FREE OF CHARGE.</p>
            <CarouselComponent/>
            <div className="the-note">
                <p className="note1">Note: Everything you need for this: Create your Mercedes me ID and link your Mercedes to it, then activate the Digital Extras. Done!</p>
            </div>
            
            <img className="image2"src="https://www.mbusa.com/content/dam/mb-nafta/us/contact-us/XL-Customer-Assistance-Brand-Hero1.jpg" alt="image2" />
            <h2 className="customer">Frequently Asked Questions</h2>
            <p className="note">Vehicle Resources</p>
            <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        >
        How can I verify if my vehicle is involved in a recall?
        </AccordionSummary>
        <AccordionDetails>
        To find out whether your vehicle is involved in a recall Simply enter your 17-digit Vehicle Identification 
        Number (VIN) on the recall information page - https://www.mbusa.com/en/recall
        will provide the most complete and up-to-date information on current or previous recalls.
        Contact your Local Authorized dealership to schedule a repair.
        </AccordionDetails>
    </Accordion>
    
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
        >
        How can I obtain the radio code for my vehicle?
        </AccordionSummary>
        <AccordionDetails>
        To obtain radio code for 1990 -2002 vehicles you can:You can visit your local authorized 
        Mercedes-Benz dealer.Contact our Customer Assistance Center at 1-800-FOR-MERCEDES (1-800-367-6372) 
        with your Vehicle Identification Number (VIN).Any issues with Code provided will need to be checked by Dealership 
        Service department.For vehicles older than MY1990 please check with local dealership for other options, as these codes 
        may no longer be available.Note: 2003 and newer vehicles do not use radio code.Find a Dealer 
        https://www.mbusa.com/en/dealers/searchLocation-ChIJOwg_06VPwokRYv534QaPC8g/searchByType-place/filter-mbdealer.
        </AccordionDetails>
    </Accordion>
    
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        >
        Where can I find "How to" Video's related to features in my Mercedes-Benz vehicle?
    </AccordionSummary>
    <AccordionDetails>
        Get to know the features and capabilities of your Mercedes-Benz with our "How-To" videos.
        https://www.mbusa.com/en/owners/videos
    </AccordionDetails>
    </Accordion>
    
    <p className="note">Service & Maintenance</p>
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        >
        Can I purchase an extended warranty from Mercedes-Benz?
        </AccordionSummary>
        <AccordionDetails>
        Whether leasing or financing, you will enjoy first class protection 
        for your Mercedes-Benz with our collection of vehicle maintenance products. 
        Information on Warranty & Maintenance Coverage plans can be found here:https://www.mbusa.com/en/owners/service-maintenance/prepaid
        </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
        >
            What type of gasoline can I use in my Mercedes-Benz gas engine passenger vehicle?
        </AccordionSummary>
        <AccordionDetails>
        Mercedes-Benz USA only recommends using the octane rating listed in the Operator's 
        Manual and fuel filler flap (minimum rating of 91 octane)..
        </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content">
        Where can I find information on Service and Maintenance for my Mercedes-Benz?
    </AccordionSummary>
    <AccordionDetails>
    Your Mercedes-Benz is made up of thousands of parts, all working in unison to deliver quality performance, comfort and safety. 
    See how to properly maintain it at every leg of the journey, and keep it running like new for years to come.
    https://www.mbusa.com/en/owners/service-maintenance
    </AccordionDetails>
    </Accordion>

    <Accordion className="accordion">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content">
        What is the recommended tire pressure for my Mercedes-Benz vehicle?
    </AccordionSummary>
    <AccordionDetails>
    The tire pressure table is on the inside of the fuel filler flap. The tire pressure table shows the recommended 
    tire pressure for all tires approved for this vehicle. The recommended tire pressures are valid for cold tires under 
    various operating conditions according to the load and/or speed of the vehicle. If one or more tire sizes precede a tire 
    pressure, the following tire pressure information is only valid for those tire sizes and their respective load condition. The load conditions "partially laden" and "fully laden" are defined in the table for different numbers of passengers and amounts of luggage.
    </AccordionDetails>
    </Accordion>
    <div>
    <div id="scroll-target" >
        <h2 className="customer">Contact Information</h2>
    </div>
    </div>
    <MuiTabs value={contactValue} onChange={handleContactChange} centered>
    <Tab label="Phone and Email" />
    <Tab label="Office Locations" />
    </MuiTabs>
    {contactValue === 0 && 
    <div className="contact-data">
    <div className="container">
        <div className="item">
    <p className="bold phone ">Takata Recall Hotline</p>
    <p>If your vehicle has been affected by the Takata airbag recall, call us to schedule your free repair.</p>
    <p className="phone">1-877-496-3691</p>
    </div>

    <div className="item phone">
        <p className="bold">Roadside Assistance</p>
        <p>In the event of an emergency, get immediate assistance 24 hours a day, 7 days a week.</p>
        <p className="phone">1-800-367-6372</p>
        <p className="phone">1-800-222-0100</p>
    </div>

    <div className="item">
        <p className="bold phone">Mercedes-Benz Financial Services</p>
        <p>Speak to a MBFS representative, available Mon-Fri, 9 am - 9 pm or Sat 9 am -5 pm (ET).</p>
        <p className="phone">1-800-654-6222 </p>
    </div>
    </div>

    <div className="container">
        <div className="item">
    <p className="bold phone">Connected Car Services </p>
    <p>For setup and assistance with connected vehicle services, contact our Customer Assistance Center.</p>
    <p className="phone">1-800-367-6372</p>
    <p className="phone">1-800-222-0100</p>
    </div>

    <div className="item">
    <p className="bold phone">Customer Care</p>
    <p>For general assistance with your vehicle or account, contact us Mon-Fri, 9 am- 9 pm (ET).</p>
    <p className="phone">1-800-367-6372</p>
    <p className="phone">1-800-222-0100</p>
    </div>

    <div className="item">
    <p className="bold phone">Email Us</p>
    <p>Prefer email instead? Send us a message and we’ll respond within 24 hours.</p>
    <Link to="/email" className="phone">Email Us</Link>
    </div>
    </div>
    </div>
}
    {contactValue === 1 && 
    <div className="contact-info locations">
    <div className="column-contact">
    <p className="bold">Corporate Offices</p>
    <p>Main Office - Customer Assistance Office</p>
        <p>1 Mercedes-Benz Dr.</p>
        <p>Sandy Springs, GA, 30328</p>
        
        <p className="bold">Northeast Region</p>
        <p>Morris Corporate Center 3, Bldg. D</p>
        <p>400 Interpace Parkway</p>
        <p>Parsippany, NJ 07054</p>

        <p className="bold">Western Region</p>
        <p>3860 North Lakewood Blvd</p>
        <p>Long Beach, CA 90808</p>
        
        <p className="bold">Central Region</p>
        <p>9399 West Higgins Avenue</p>
        <p>Suite 210</p>
        <p>Rosemont, IL 60018</p>

        <p className="bold">Southern Region</p>
        <p>13470 International Parkway</p>
        <p>Jacksonville, Fl 32218</p>
        </div>
    
    <div className="column-contact">
    <p className="bold">Parts Distribution Centers</p>
    <p>Carol Stream</p>
    <p>9399 West Higgins Avenue Ste.210</p>
    <p>Rosemont, IL 60018</p>
    
    <p className="bold">Fort Worth</p>
    <p>15050 Frye Road</p>
    <p>Fort Worth, TX 761558</p>
    
    <p className="bold">Fontana</p>
    <p>14613 Bar Harbor Road</p>
    <p>Fontana, CA 92336</p>

    <p className="bold">Robbinsville</p>
    <p>100 New Canton Way</p>
    <p>Robbinsville, NJ 08691</p>

    <p className="bold">Jacksonville</p>
    <p>13470 International Parkway</p>
    <p>Jacksonville, FL 32218</p>
    </div>

    <div className="column-contact">
    <p className="bold">Vehicle Preparation Center</p>
    <p>Baltimore VPC</p>
    <p>2908 Childs Street</p>
    <p>Baltimore, MD 21226</p>

    <p className="bold">Carson VPC</p>
    <p>3860 North Lakewood Blvd</p>
    <p>Long Beach, CA 90808</p>

    <p className="bold">Brunswick VPC</p>
    <p>101 Jointer Creek Road</p>
    <p>Colonels Island</p>
    <p>Brunswick, GA 31523</p>
    </div>

    <div className="column-contact">
    <p className="bold">Learning & Performances</p>
    <p>Jacksonville</p>
    <p>13470 International Parkway</p>
    <p>Jacksonville, FL 32218</p>

    <p className="bold">Itasca</p>
    <p>295 Spring Lake Drive</p>
    <p>Itasca, IL 601435</p>

    <p className="bold">Rancho Cucamonga</p>
    <p>9571 Pittsburg Avenue</p>
    <p>Rancho Cucamonga, CA 91730</p>

    <p className="bold">Montvale</p>
    <p>3 Mercedes Drive</p>
    <p>Montvale, NJ 07645</p>
    </div>
</div>
}
<hr id="scroll-target" className='line2'/>

<div className="ending">
    <div className="the-m">
        <img className='bottom-image'src={mer1} alt="pic" width="50px"/>
        <img className='bottom-img2'src={mer2} alt="pic" width="180px"/>
        <span className="last-icons">
            <a href="https://www.instagram.com/MercedesBenzUSA/" target="blank" className="so-icon">
            <i class="fa-brands fa-instagram the-sign"></i>
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
    

</div>

);
}

export default Home;