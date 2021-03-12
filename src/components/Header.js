import "./style/Header.css";
import { Link } from "react-router-dom";

const open_menu = () => {
  document.getElementById('overlay').style.width = "100%";
};

const close_menu = () => {
  document.getElementById("overlay").style.width = "0%";
};

const Header = () => (
  <div className="header">
      <p id="open" onClick={open_menu}>Menu</p>
      
      <div id="overlay">
        <p id="close" onClick={close_menu}>STÄNG</p>

        <div id="links">
          <Link to='/' onClick={close_menu}>Hem</Link>
          <Link to='/text' onClick={close_menu}>Texten</Link>
          <Link to='/photo' onClick={close_menu}>Bilden</Link>
          <Link to='/intro' onClick={close_menu}>Strukturen</Link>
          <Link to='/book' onClick={close_menu}>Exempelbok</Link>
          <Link to='/contact' onClick={close_menu}>Kontakt</Link>
        </div>
      </div>
      
  </div>
);

export default Header;