import "./style/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to='/'>Hem</Link>
      <Link to='/book'>Exempelbok</Link>
      <Link to='/contact'>Kontakt</Link>
    </div>
  );
}

export default Header;