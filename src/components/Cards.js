import './style/Cards.css';

const Cards = (props) => {
	return (
		<div className="exbok_boxes">
			{props.children}
		</div>
	)
};

export default Cards;