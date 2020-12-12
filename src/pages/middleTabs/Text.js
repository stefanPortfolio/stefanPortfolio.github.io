import '../../style/MiddleTabs.css';
import Header from '../../components/Header';
import BackArrow from '../../components/BackArrow';

const Text = () => {
	return (
		<div>
            <Header />
			<div className="content">
				Texten är naturligtvis central i en historia. Den ska ge läsaren information, skapa en upplevelse, ge en känsla och få läsaren att nästa vilja vara med då det hände. <br /><br />
				Texten kan bestå av flera delar:

				<ul>
					<li>Rubrik</li>
					<li>Ingress</li>
					<li>Brödtext</li>
					<li>Bildtext</li>
				</ul>

				Varje del är lika viktig! <br /><br />
				Tänk på hur texten inleds … <br />
				August Strindberg inleder Hemsöborna på ett sätt som många kommer ihåg: <br /><br />
				<i>"Han kom som ett yrväder en aprilafton och hade ett höganäskrus i en svångrem om halsen"</i>
			</div>

			<BackArrow />
		</div>
	)
};

export default Text;