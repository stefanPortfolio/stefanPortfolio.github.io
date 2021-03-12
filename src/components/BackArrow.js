import './style/BackArrow.css';
import { Link } from "react-router-dom";

const Text = () => (
	<div className="back">
		<Link to='/'>&#8678;</Link>
	</div>
);

export default Text;