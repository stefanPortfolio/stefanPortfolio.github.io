import '../../style/MiddleTabs.css';
import BackArrow from '../../components/BackArrow';
import Headline from '../../components/Headline';

const Text = () => {
	return (
		<div style={{background: "#B8B8B8", color: "white"}}>
			<Headline page="Texten" />

			<div className="middle_tab_content">
				Texten är central i en historia. Den ska skapa en upplevelse, ge en känsla och få läsaren att nästa vilja vara med då det hände. <br /><br />
				Texten kan bestå av flera delar: rubrik, ingress, brödtext och bildtext. 
				Varje del är lika viktig! <br /><br />
				Tänk på hur texten inleds. August Strindberg inleder Hemsöborna på ett sätt som många kommer ihåg: <br />
				<p className="st"><i>"Han kom som ett yrväder<br />en aprilafton och hade ett<br />höganäskrus i en svångrem<br />om halsen"</i></p>
			</div>

			<BackArrow />
		</div>
	)
};

export default Text;