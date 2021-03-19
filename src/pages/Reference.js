import '../style/Reference.css';
import Headline from '../components/Headline';
import BackArrow from '../components/BackArrow';

import ref1 from "../assets/reference/ref1.png";
import ref2 from "../assets/reference/ref2.png";
import ref3 from "../assets/reference/ref3.png";
import ref4 from "../assets/reference/ref4.png";
import ref5 from "../assets/reference/ref5.png";

const imgs = [ref1, ref2, ref3, ref4, ref5];
const imgs_tag = [];


const Reference = () => {
	for (let image of imgs.reverse()) {
		imgs_tag.push(<img src={image} alt="" width="600" className="ref_imgs" />);
	}


	return (
		<div className="ref_main">
			<Headline page="Referenser" bg="#DCEED1" />

			{imgs_tag}

			<BackArrow />
		</div>
	)
};

export default Reference;