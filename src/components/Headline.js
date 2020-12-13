import "./style/Headline.css";

function Headline(props) {
  return (
    <div className="headline">
        <p>{props.page}</p>
    </div>
  );
}

export default Headline;