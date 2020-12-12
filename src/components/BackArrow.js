import '../styles/BackArrow.css';
import { Link } from "react-router-dom";

const Text = () => {
	return (
		<div className="back">
            <Link to='/'>&#8678; Gå tillbaka</Link>
		</div>
	)
};

export default Text;