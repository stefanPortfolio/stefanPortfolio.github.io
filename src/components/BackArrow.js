import '../style/components/BackArrow.css';
import { Link } from "react-router-dom";

const Text = () => {
	return (
		<div id="back_holder">
			<Link id="back_a" to='/#back'>
				<p id="back">&#8678; Tillbaka</p>
			</Link>
		</div>
	);
};

export default Text;