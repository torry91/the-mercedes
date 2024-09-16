import level1 from "../assets/level1.webp";
import level2 from "../assets/level2.webp";
import level3 from "../assets/level3.webp";
import kilow from "../assets/kilow.webp";
import mercme from "../assets/mercme.webp";

const LevelInfo = () => {
    return (
        <div className='container-kW'>
            <div className='row'>
                <div className='column'>
                    <img src={level1} alt='pic'/>
                    <p><b>2–4 miles per 1 hour</b></p>
                    <p className='charge-text'>Level 1 charging uses a standard 120V household outlet...</p>
                </div>
                <div className='column'>
                    <img src={level2} alt='pic'/>
                    <p><b>Up to 30 miles per 1 hour</b></p>
                    <p className='charge-text'>Level 2 charges nine times faster than Level 1...</p>
                </div>
                <div className='column'>
                    <img src={level3} alt='pic'/>
                    <p><b>From 10 – 80% in 30 minutes</b></p>
                    <p className='charge-text'>Level 3, also called DC Fast Charging...</p>
                </div>
            </div>
            <div className='row'>
                <div className='large-column'>
                    <p><b>What is a kilowatt (kW) and kilowatt-hour (kWh)?</b></p>
                    <p className='charge-text'> A kilowatt (kW) is a unit of power...</p>
                </div>
                <div className='large-column'>
                    <img src={kilow} alt="pic" className='kw'/>
                </div>
            </div>
            <div className='row'>
                <div className='large-column'>
                    <img src={mercme} alt="pic" className='kw'/>
                </div>
                <div className='large-column'>
                    <p className='charge-text'><b>Mercedes me connect: One app to access them all.</b></p>
                    <p className='charge-text'>The Mercedes me connect app features Mercedes me Charge...</p>
                </div>
            </div>
        </div>
    );
}

export default LevelInfo;
