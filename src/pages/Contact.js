import "../style/Contact.css";
import Headline from '../components/Headline';
import BackArrow from '../components/BackArrow';

function Contact() {
  return (
    <div>
      <Headline page="Kontakt" />

      <div className="contact_content">
        Har du frågor eller funderingar, kontakta oss via <a href="mailto:stefan.nilszen@teliacompany.com">email</a> eller på <a href="tel:+46706678855">070-667 88 55</a>!
      </div>

      <BackArrow />
    </div>
  );
}

export default Contact;