
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Electric from "./Electric/Electric";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Vehicles from "./Vehicles-Info/Vehicles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Email from "./Email/Email";
import NavBar from "./NavBar";



function App() {

  return (
    <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/vehicles" element ={<Vehicles/>}/>
        <Route path="/electric" element ={<Electric/>}/>
        <Route path="/shop" element ={<Shop/>}/>
        <Route path="/email" element={<Email/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
