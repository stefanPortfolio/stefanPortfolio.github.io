import './style/BoxRow.css';

const BoxRow = (props) => {
  return (
      <div className="boxes">
        <div className="row">
            {props.children}
        </div>
      </div>
  )
};

export default BoxRow;