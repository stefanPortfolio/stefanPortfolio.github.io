import { Link } from 'react-router-dom';
import './style/Box.css';
import ScrollReveal from 'scrollreveal';

const Box = (props) => {
  ScrollReveal().reveal('.box_row');

  return (
      <div className="box_row" style={props.style}>
        <Link to={props.to}>
        <div className="on_hover"></div>

        <div className="text">
          <p>{props.text}</p>
        </div>
        </Link>
      </div>
  )
};

const BoxNoLink = (props) => {
  return (
    <div className="box_text">
        <div className="text">
          <p>{props.text}</p>
        </div>
    </div>
  )
};

export { Box, BoxNoLink };