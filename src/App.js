
import "./App.css";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Electric from "./Electric";
import Home from "./Home";
import Shop from "./Shop";
import Vehicle from "./Vehicless/Vehicle";
import image from "./logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import Contact from "./Contact";
import Email from "./Email";



function App() {

  const navRef = useRef();
  
  const toggleNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  const hideNavBar = () => {
    navRef.current.classList.remove("responsive-nav")
  }
  
  
  return (
    <div>
    <Router>
      <div className="header">
      <img src={image} alt="logo" className="logo" width="100px"/>
      <button className="hamburger" onClick={toggleNavBar}>
      <FaBars/>
      </button>
      <nav className="nav-links" ref={navRef}>
        <Link to="/" className="link" onClick={hideNavBar} >Home</Link>
        <Link to="/vehicles" className="link" onClick={hideNavBar}>Vehicles</Link>
        <Link to="/electric" className="link" onClick={hideNavBar}>Electric</Link>
        <Link to="/shop" className="link" onClick={hideNavBar}>Shop</Link>
        <Contact />
        </nav>
        <div className="close-sign">
          <button className="btn-close" onClick={toggleNavBar}
          ><FaTimes/></button>
        </div>
        </div>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/vehicles" element ={<Vehicle/>}/>
        <Route path="/electric" element ={<Electric/>}/>
        <Route path="/shop" element ={<Shop/>}/>
        <Route path="/email" element={<Email/>}/>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
