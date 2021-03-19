import "../style/Contact.css";
import Headline from '../components/Headline';
import BackArrow from '../components/BackArrow';

import contact_img from "../assets/contact_img.png";

function Contact() {
  return (
    <div className="contact_main">
      <Headline page="Kontakt" bg="#FFB1A3" />

      <div className="contact_content">
        Har du frågor eller funderingar,<br />kontakta oss!
      </div>

      <img id="contact_img" src={contact_img} alt="" />

      <div className="contact_content">
        Stefan Nilszén<br />
        <div id="info_text">
        Fil. kand. i historia, religion och statskunskap. <br />
        Lärare och projektledare.
        </div>
        <a id="contact_me" href="mailto:stefan.nilszen@gmail.com">e-post</a>.
      </div>

      <BackArrow />
    </div>
  );
}

export default Contact;