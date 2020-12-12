import "../styles/Contact.css";
import { Link } from "react-router-dom";
import Header from '../components/Header';

function Contact() {
  return (
    <div>
        <Header />
        <br />
        <p>Hello There</p>
        <Link to='/'>Hem</Link>
    </div>
  );
}

export default Contact;