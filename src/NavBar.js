import { Link} from "react-router-dom";
import { useRef } from "react";
import image from "./assets/logo.png";
import "./App.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Contact from "./Contact";


function  NavBar() {
    const navRef = useRef();
    
    const toggleNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
};

    const hideNavBar = () => {
    navRef.current.classList.remove("responsive-nav")
    }
    
    return (
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
            <button className="btn-close" onClick={toggleNavBar}>
                <FaTimes/>
                </button>
        </div>
        </div>
    );
}

export default NavBar;
