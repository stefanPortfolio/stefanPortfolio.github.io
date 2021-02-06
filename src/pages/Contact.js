import "../style/Contact.css";
import Headline from '../components/Headline';
import BackArrow from '../components/BackArrow';

import contact_img from "../assets/contact_img.png";

function Contact() {
  return (
    <div className="contact_main">
      <Headline page="Kontakt" />

      <div className="contact_content">
        Har du frågor eller funderingar,<br />kontakta oss via <a href="mailto:stefan.nilszen@teliacompany.com">email</a> eller<br />på <a href="tel:+46706678855">070-667 88 55</a>!
      </div>

      <img id="contact_img" src={contact_img} width="500" alt="" />

      <BackArrow />
    </div>
  );
}

export default Contact;