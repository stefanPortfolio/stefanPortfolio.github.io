import './style/BackArrow.css';
import { Link } from "react-router-dom";

const Text = () => {
	return (
		<div className="back">
			<Link id="back_a" to='/#back'>&#8678;</Link>
		</div>
	);
};

export default Text;