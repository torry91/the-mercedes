
import "./App.css";
import { useNavigate} from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  
  const handleContactClick = ()=> {
    navigate('/#scroll-target');
  };
  
  return (
    <button className="contact cnt" onClick={handleContactClick}>Contact
    </button>
  );
}

export default Contact;
