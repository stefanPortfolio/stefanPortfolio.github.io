import { Link } from 'react-router-dom';
import '../style/components/Box.css';

const Box = props => {
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

export default Box;