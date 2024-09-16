
function buttons ({filteredCars}){
    return (
    <div>
        <div className="veh-nav">
        <button className="vh-btn" onClick={() => filteredCars("EV")}>EVs</button>
            <button className="vh-btn" onClick={() => filteredCars("SUV")}>SUVs</button>
            <button className="vh-btn" onClick={() => filteredCars("Sedans")}>Sedans & Wagons</button>
            <button className="vh-btn" onClick={() => filteredCars("Coupes")}>Coupes</button>
            <button className="vh-btn" onClick={() => filteredCars("Convertible")}>Convertible & Roadsters</button>
            </div>
            </div>
            )
        }
        
    export default buttons;

