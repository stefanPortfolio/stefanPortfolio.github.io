import '../style/MiddleTabs.css';
import BackArrow from '../components/BackArrow';
import Headline from '../components/Headline';

const Photo = () => {
	return (
		<div>
			<Headline page="Bilden" bg="#C5E2EE" />

			<div className="middle_tab_content">
				<p><i>"En bild säger mer än tusen ord"</i> säger vi ofta. Bilden, ett foto, en teckning, ett konstverk eller en grafisk form är mer än ett komplement till texten.</p>
				<p>Bilden ger en annan upplevelse för läsaren än texten. Båda behövs för att skapa en bra läsupplevelse.</p>
				<p>Man ser först bilden, sedan texten. Val av bild är därför viktigt. Den kan vara svartvit eller i färg. Den kan vara begränsad eller utfallande, var ljus eller mörk. Välj noga!</p>
			</div>

			<BackArrow />
		</div>
	)
};

export default Photo;