import './style/Card.css';

const Card = (props) => {
    return (
        <div className="exbok_box">
            <div className="exbok_img" style={props.background} />
            <div className="exbok_text">{props.text}</div>
        </div>
    )
};

export default Card;