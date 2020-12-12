import "../style/Contact.css";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div>
        <Header />
        <br />
        <p>Hello There</p>
        <Link to='/'>Hem</Link>

        <Footer />
    </div>
  );
}

export default Contact;