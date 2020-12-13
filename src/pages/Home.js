import BoxRow from '../components/BoxRow';
import { Box } from '../components/Box';

import TextenImg from '../assets/middleTabs/texten.png';
import BildenImg from '../assets/middleTabs/bilden.jpg';
import  IntroImg from '../assets/middleTabs/inledningen.png';

import '../style/Home.css';

const Home = () => {
  return (
    <div>
      <div id="landing_page">
        <div id="landing_page_content">
          <div id="landing_page_content_title">
            <p>Vill du att fler ska läsa Din historia?</p>
          </div>

          <div id="landing_page_content_text">
            <p>Då kan vi hjälpa dig med rätt form, design och text!
              En kombo av bra text, bra foton och genomtänkt indelning gör din historia läsvärd!</p>
          </div>
        </div>
      </div>


      <div className="home_text">
        <q>Det första jag ser i en bok är bilderna <br />
          sedan tittar jag på rubrikerna <br />
          att boken känns bra i handen är också viktigt!</q>
      </div>



      {/* <BoxRow>
        <BoxNoLink text="Det första jag ser i en bok är bilderna" />
        
        <BoxNoLink text="sedan tittar jag på rubrikerna" />
        
        <BoxNoLink text="att boken känns bra i handen är också viktigt!" />
      </BoxRow> */}

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
    </div>
  )
};

export default Home;