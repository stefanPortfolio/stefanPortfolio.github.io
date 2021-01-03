import "./style/Header.css";
import { Link } from "react-router-dom";

const open_menu = () => {
  document.getElementById('overlay').style.width = "100%";
};

const close_menu = () => {
  document.getElementById("overlay").style.width = "0%";
};

function Header() {
  return (
    <div className="header">
      <Link to='/' className="normal_header">Hem</Link>
      <Link to='/book' className="normal_header">Exempelbok</Link>
      <Link to='/contact' className="normal_header">Kontakt</Link>


        <p id="open" onClick={open_menu}>&#9776;</p>

        <div id="overlay">
          <p id="close" onClick={close_menu}>STÄNG</p>

          <div id="links">
            <Link to='/' onClick={close_menu}>Hem</Link>
            <Link to='/book' onClick={close_menu}>Exempelbok</Link>
            <Link to='/contact' onClick={close_menu}>Kontakt</Link>
          </div>
        </div>
        
    </div>
  );
}

export default Header;