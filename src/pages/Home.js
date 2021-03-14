import BoxRow from '../components/BoxRow';
import { Box } from '../components/Box';

import TextenImg from '../assets/middleTabs/texten.png';
import BildenImg from '../assets/middleTabs/bilden.jpg';
import  IntroImg from '../assets/middleTabs/inledningen.png';

import logo from "../assets/logo.png";

import '../style/Home.css';

const Home = () => {
  document.body.style.backgroundColor = "white";

  return (
    <div>
      <div id="landing_page">
        <div id="landing_page_content">
          <div id="landing_page_content_title">
            <p>Funderar du på att göra en bok av din historia?</p>
          </div>

          <div id="landing_page_content_text">
            <p>Då kan vi hjälpa dig med rätt form, design, text och tryck!
              Bra text, intressanta foton och en genomtänkt struktur gör din historia läsvärd!</p>
          </div>

          <img id="logo_img" src={logo} width="600" alt="" />

          {/* <div id="mobile_arrow">
            . <br />
            . <br />
            .
          </div> */}

        </div>
      </div>


      <div className="home_text">
      <marquee behavior="scroll" direction="left" scrollamount="10">
      Det första jag ser i en bok är bilderna sedan tittar jag på rubrikerna.
      </marquee>
        {/* <q>Det första jag ser i en bok är bilderna <br />
          sedan tittar jag på rubrikerna <br /> <br />
          ... att boken känns bra i handen är också viktigt!</q> */}
      </div>



      {/* <BoxRow>
        <Box to="/text" text="Texten"
          style={{backgroundImage: `url(${TextenImg})`}} />
        
        <Box to="/photo" text="Bilden"
          style={{backgroundImage: `url(${BildenImg})`}} />
        
        <Box to="/intro" text="Strukturen"
          style={{backgroundImage: `url(${IntroImg})`}} />
      </BoxRow> */}

      <div name="landing_page_content"></div>

      <BoxRow id="back">
        <Box to="/text" text="Texten"
          style={{background: "#B8B8B8"}} />
        
        <Box to="/photo" text="Bilden"
          style={{background: "#C5E2EE"}} />
        
        <Box to="/intro" text="Strukturen"
          style={{background: "#AB96D2"}} />
      </BoxRow>

      <BoxRow id="back1">
        <Box to="/book" text="Exempelbok"
          style={{background: "#f9d1af"}} />
        
        <Box to="/reference" text="Referenser"
          style={{background: "#DCEED1"}} />
        
        <Box to="/contact" text="Kontakt"
          style={{background: "#ffb1a3"}} />
      </BoxRow>
    </div>
  )
};

export default Home;