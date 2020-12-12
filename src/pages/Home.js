import Header from '../components/Header';
import BoxRow from '../components/BoxRow';
import { Box, BoxNoLink } from '../components/Box';
import Footer from '../components/Footer';

import TextenImg from '../photos/boxes_second/texten.png';
import BildenImg from '../photos/boxes_second/bilden.jpg';
import  IntroImg from '../photos/boxes_second/inledningen.png';

import '../style/Home.css';

const Home = () => {
  return (
    <div>
      <Header />

      <div id="landing_page">
        <div id="landing_page_content">
          <div id="landing_page_content_title">
            <p>Vill du att fler ska läsa Din historia?</p>
          </div>
          <br />
          <div id="landing_page_content_text">
            <p>Då kan vi hjälpa dig med rätt form, design och text!
              En kombo av bra text, bra foton och genomtänkt indelning gör din historia läsvärd!</p>
          </div>
        </div>
      </div>



      <BoxRow>
        <BoxNoLink text="Det första jag ser i en bok är bilderna" />
        
        <BoxNoLink text="sedan tittar jag på rubrikerna" />
        
        <BoxNoLink text="att boken känns bra i handen är också viktigt!" />
      </BoxRow>

      <BoxRow>
        <Box to="/text" text="Texten"
          style={{backgroundImage: `url(${TextenImg})`}} />
        
        <Box to="/photo" text="Bilden"
          style={{backgroundImage: `url(${BildenImg})`}} />
        
        <Box to="/intro" text="Inledningen"
          style={{backgroundImage: `url(${IntroImg})`}} />
      </BoxRow>

      <BoxRow>
        <Box to="/book" text="Exempelbok"
          style={{background: "#f9d1af"}} />
        
        <Box to="/reference" text="Referenser"
          style={{background: "#cce698"}} />
        
        <Box to="/contact" text="Kontakt"
          style={{background: "#ffb1a3"}} />
      </BoxRow>

      <Footer />
    </div>
  )
};

export default Home;