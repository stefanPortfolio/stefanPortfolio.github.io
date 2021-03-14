import '../../style/MiddleTabs.css';
import BackArrow from '../../components/BackArrow';
import Headline from '../../components/Headline';

const Text = () => {
	return (
		<div style={{background: "#B8B8B8", color: "white"}}>
			<Headline page="Texten" bg="#B8B8B8" />

			<div className="middle_tab_content">
				Texten skapar en upplevelse, ger en känsla och kan i bästa fall få läsaren att vilja vara med då det hände. <br /><br />
				Texten kan bestå av rubrik, ingress, brödtext och bildtext. 
				Hur texten ser ut beror på viket typsnitt man väljer. Ofta väljer man ett typsnitt med "klackar" i långa texter. Times New Roman är ett sådant. I rubriker kan man välja typsnitt mer fritt.
			</div>

			<BackArrow />
		</div>
	)
};

export default Text;