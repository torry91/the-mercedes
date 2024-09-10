import years from "./years.jpeg";
import continents from "./continents.jpeg";
import lightbulb from "./lightbulb.jpeg";
import locations from "./locations.jpeg";

const TabInfoOne = ({quickFactsRef}) => {

  return (

    <div className="info1" ref={quickFactsRef}>
      <h1 className="title1"> Did you know ... </h1>
      <p className="info-top">
      Crafted for those who demand the extraordinary in every moment on the road,
      where every journey is a masterpiece. Experience the fusion of cutting-edge technology,
      unparalleled luxury and timeless design.
      </p>
      
      <div className="icon-cont">
      <div className="imp-info">
        <div className="image-container">
        <img src={years} className="icon-facts" alt="years" />
        <p className="number">94 years</p>
        </div>
        <p className="text">Mercedes-Benz was founded in 1926 by Karl Benz,
        Gottlieb Daimler, Wilhelm Maybach and Emil Jellinek, 
        whose daughter Mercedes is the original namesake.</p>
        
        <div className="image-container">
          <img src={locations} className="icon-facts" alt="locations" />
          <p className="number">93 locations</p>
          </div>
          <p className="text">With offices in 93 locations worldwide and a corporate 
            headquarters in Stuttgart, Germany, our global presence continues to grow</p>
            </div>

            <div className="imp-info">
            <div className="image-container">
          <img src={continents} className="icon-facts" alt="cont" />
          <p className="number">5 continents</p>
          </div>
          <p className="text">Our vehicles are manufactured in 17 countries on five continents, 
            and distributed all over the world.</p>
            
            <div className="image-container">
          <img src={lightbulb} className="icon-facts"alt="bulb" />
          <p className="number">6 firsts</p>
          </div>
          <p className="text">From the crumple zone in 1959 to the airbag in 1980 and 
            PRE-SAFE® braking in 2002, Mercedes-Benz has invented many of 
            the automotive technologies we see today.</p>
            </div>
            </div>
            </div>
  )
}


export default TabInfoOne;
