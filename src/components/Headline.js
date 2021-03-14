import "./style/Headline.css";

const Headline = props => {
  document.body.style.backgroundColor = props.bg;
  return (
    <div className="headline">
        <p>{props.page}</p>
    </div>
  );
};

export default Headline;