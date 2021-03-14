import '../../style/MiddleTabs.css';
import BackArrow from '../../components/BackArrow';
import Headline from '../../components/Headline';

const Intro = () => {
	return (
		<div>
			<Headline page="Strukturen" bg="#AA95D0" />

			<div className="middle_tab_content">
				Strukturen kräver eftertanke. En roman har en löpande text och kanske en kapitelindelning. I vår typ av bok är kapitel och avsnitt avgörande för läsupplevelsen. <br /><br />
				Tanken är att läsaren ska kunna stanna till var som helst i boken, se en rubrik, titta på bilderna, läsa bildtexterna och så småningom även brödtexten. <br /><br />
				Läsaren förväntas komma tillbaka till boken flera gånger och upptäcka något nytt varje gång.    
			</div>

			<BackArrow />
		</div>
	)
};

export default Intro;