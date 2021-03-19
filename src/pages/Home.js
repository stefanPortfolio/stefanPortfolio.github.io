import BoxRow from '../components/BoxRow';
import Box from '../components/Box';

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
        </div>
      </div>


      <div className="home_text">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          Det första jag ser i en bok är bilderna, sedan tittar jag på rubrikerna...
        </marquee>
      </div>

      <BoxRow>
        <Box to="/text" text="Texten"
          style={{background: "#B8B8B8"}} />
        
        <Box to="/photo" text="Bilden"
          style={{background: "#C5E2EE"}} />
        
        <Box to="/intro" text="Strukturen"
          style={{background: "#AB96D2"}} />
      </BoxRow>

      <BoxRow>
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
