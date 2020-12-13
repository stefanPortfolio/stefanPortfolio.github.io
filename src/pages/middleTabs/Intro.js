import '../../style/MiddleTabs.css';
import BackArrow from '../../components/BackArrow';

const Intro = () => {
	return (
		<div>
			<div className="middle_tab_content">
				Indelningen av boken kräver eftertanke. En roman har en löpande text och kanske en kapitelindelning. I vår typ av bok är indelningen i avsnitt och kapitel avgörande för läsupplevelsen. <br /><br />
				Tanken är att läsaren ska kunna stanna till var som helst i boken, se en rubrik, titta på bilderna, läsa bildtexterna och så småningom även brödtexten. <br /><br />
				Läsaren förväntas komma tillbaka till boken flera gånger och upptäcka något nytt varje gång.    
			</div>

			<BackArrow />
		</div>
	)
};

export default Intro;