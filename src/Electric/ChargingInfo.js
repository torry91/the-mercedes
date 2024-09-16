import charge from "../assets/charge.png";

const ChargingInfo = () => {
    return (
        <div>
            <div className='sub-el'>
                <h3 className='char'>At home or on the road, charging your all-electric Mercedes-Benz is designed to be simple.</h3>
            </div>
            <div className='bl1'>
                <img src={charge} alt='pic' className='charge-im'/>
                <div className='bl2'>
                    <p><b>An intuitive charging experience wherever you are.</b></p>
                    <p>At public charging stations, Mercedes me Charge seamlessly incorporates the nation’s largest charging networks into the Mercedes me connect app — so you don't need multiple apps.</p>
                    <p>At home, drivers can take advantage of reduced electricity rates — just plug in at night for a full charge in the morning and ultimate convenience.</p>
                </div>
            </div>
        </div>
    );
}

export default ChargingInfo;
