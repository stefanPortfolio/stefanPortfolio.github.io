import '../style/components/Header.css';
import { Link } from "react-router-dom";

const open_menu = () => {
  if (window.matchMedia('(max-device-width: 500px)').matches) {
    document.getElementById('overlay').style.width = "70%";
  } else {
    document.getElementById('overlay').style.width = "30%";
  }
};

const close_menu = () => {
  document.getElementById("overlay").style.width = "0%";
};

const Header = () => (
  <div id="header">
      <p id="open" onClick={open_menu}>&#9776;</p>
      
      <div id="overlay">
        <p id="close" onClick={close_menu}>STÄNG</p>

        <div id="links">
          <Link className="link" to='/' onClick={close_menu} style={{background: "#EEE7E1"}}>Hem</Link>
          <Link className="link" to='/text' onClick={close_menu} style={{background: "#B8B8B8"}}>Texten</Link>
          <Link className="link" to='/photo' onClick={close_menu} style={{background: "#C5E2EE"}}>Bilden</Link>
          <Link className="link" to='/intro' onClick={close_menu} style={{background: "#AA95D0"}}>Strukturen</Link>
          <Link className="link" to='/book' onClick={close_menu} style={{background: "#F9D1AF"}}>Exempelbok</Link>
          <Link className="link" to='/reference' onClick={close_menu} style={{background: "#DCEED1"}}>Referenser</Link>
          <Link className="link" to='/contact' onClick={close_menu} style={{background: "#FFB1A3"}}>Kontakt</Link>
        </div>
      </div>
      
  </div>
);

export default Header;