import '../style/Reference.css';
import Headline from '../components/Headline';
import BackArrow from '../components/BackArrow';

import ref1 from "../assets/reference/ref1.png";
import ref2 from "../assets/reference/ref2.png";
import ref3 from "../assets/reference/ref3.png";
import ref4 from "../assets/reference/ref4.png";
import ref5 from "../assets/reference/ref5.png";
import ref6 from "../assets/reference/ref6.png";

const Reference = () => {
	return (
		<div className="ref_main">
			<Headline page="Referenser" bg="#DCEED1" />

			<img src={ref5} alt="" width="600" className="ref_imgs" />
			<img src={ref4} alt="" width="600" className="ref_imgs" />
			<img src={ref3} alt="" width="600" className="ref_imgs" />
			<img src={ref2} alt="" width="600" className="ref_imgs" />
			<img src={ref1} alt="" width="600" className="ref_imgs" />
			<img src={ref6} alt="" width="600" className="ref_imgs" />
			<br />
			<br />

			<BackArrow />
		</div>
	)
};

export default Reference;