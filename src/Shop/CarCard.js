
function Cars ({lastState}) {

    return (
    <div className="car-container">
        {lastState.map ((element => {
            const {id,name,startingPrice,description,imageUrl} = element;
            return (
                <div key = {id}className="car-info">
                    <h3 className="the-name">{name}</h3>
                    <h3 className="gray"> Starting at $ {startingPrice}</h3>
                    <p>{description}</p>
                    <img src={imageUrl} alt="pic" />
                    <hr className='the-veh-line'/>
                </div>
            )
        }))}
        </div>
    )
}

export default Cars;
