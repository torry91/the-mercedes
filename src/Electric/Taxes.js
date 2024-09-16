import child from "../assets/child.jpeg";
import elcar from "../assets/elcar.jpeg";
import serv from "../assets/serv.jpeg";
import image4 from "../assets/image4.png";

const TaxIncentives = () => {
    return (
        <div className='taxes'>
            <div className='tx-info'>
                <figure><img src={child} width="450px" alt='pic' className='hover-el'/></figure>
                <div className='centered'>
                    <h3>Tax Credits & Incentives</h3>
                    <p>Owning an all-electric Mercedes-Benz comes with more than a few perks...</p>
                </div>
            </div>
            <div className='tx-info'>
                <figure><img src={elcar} width="450px" alt='pic' className='hover-el'/></figure>
                <div className='centered'>
                    <h3>Cost of Ownership</h3>
                    <p>The cost of electricity — measured by kilowatt hour...</p>
                </div>
            </div>
            <div className='tx-info'>
                <figure><img src={serv} width="450px" alt='pic' className='hover-el'/></figure>
                <div className='centered'>
                    <h3>Service & Maintenance</h3>
                    <p>Battery upkeep is easy and typically requires fewer scheduled maintenance visits...</p>
                </div>
            </div>
            <div className='tx-info'>
                <figure><img src={image4} width="450px" alt='pic' className='hover-el'/></figure>
                <div className='centered'>
                    <h3>Charging x Starbucks</h3>
                    <p>Mercedes-Benz and Starbucks team up to co-locate EV charging stations...</p>
                </div>
            </div>
        </div>
    );
}

export default TaxIncentives;
