import '../style/Reference.css';

import ref1 from "../assets/reference/ref1.png";
import ref2 from "../assets/reference/ref2.png";
import ref3 from "../assets/reference/ref3.png";
import ref4 from "../assets/reference/ref4.png";
import ref5 from "../assets/reference/ref5.png";


const Reference = () => {
	return (
		<div className="ref_main">
		    {/* <p>Reference</p> */}

			<div>
				<img src={ref1} alt="" width="600" className="ref_imgs" />
				<img src={ref2} alt="" width="600" className="ref_imgs" />
				<img src={ref3} alt="" width="600" className="ref_imgs" />
				<img src={ref4} alt="" width="600" className="ref_imgs" />
				<img src={ref5} alt="" width="600" className="ref_imgs" />
			</div>
		</div>
	)
};

export default Reference;