import "../style/Contact.css";
import Headline from '../components/Headline';
import BackArrow from '../components/BackArrow';

import contact_img from "../assets/contact2.png";
import logo from "../assets/logo.png";

function Contact() {
  return (
    <div className="contact_main">
      <Headline page="Kontakt" bg="#FFB1A3" />

      <div className="contact_content">
        Har du frågor eller funderingar,<br />kontakta oss!
      </div>

      <img id="contact_img" src={contact_img} width="700" alt="" />

      <div className="contact_content">
        Stefan Nilszén<br />
        <div id="info_text">
        Fil. kand. i historia, religion och statskunskap. <br />
        Lärare och projektledare.
        </div>
        <img id="contact_img" src={logo} width="700" alt="" />
        <a href="mailto:stefan.nilszen@teliacompany.com">e-post</a> eller <a href="tel:+46706678855">070-667 88 55</a>
      </div>

      <BackArrow />
    </div>
  );
}

export default Contact;