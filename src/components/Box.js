import { Link } from 'react-router-dom';
import './style/Box.css';

const Box = (props) => {
  return (
    <div className="box_row" style={props.style}>
        <div class="text">
            <Link to={props.to}>
                <p>{props.text}</p>
            </Link>
        </div>
    </div>
  )
};

const BoxNoLink = (props) => {
  return (
    <div className="box_text">
        <div class="text">
          <p>{props.text}</p>
        </div>
    </div>
  )
};

export { Box, BoxNoLink };