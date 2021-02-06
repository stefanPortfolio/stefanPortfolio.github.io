import '../../style/MiddleTabs.css';
import BackArrow from '../../components/BackArrow';
import Headline from '../../components/Headline';

const Photo = () => {
	return (
		<div style={{background: "#C5E2EE"}}>
			<Headline page="Bilden" />

			<div className="middle_tab_content">
				Vi säger ofta att <i>"en bild säger mer än tusen ord"</i>. Bilden kan vara ett foto, en teckning, ett konstverk eller en grafisk form. Bilden är inte bara ett komplement till texten.<br /><br />
				Bilden ger en annan upplevelse för läsaren än texten. Men båda behövs för att skapa läsupplevelsen. <br /><br />
				Ofta ser man först bilden, sedan texten. Val av bild är därför viktigt. Den ska passa in. Den kan vara svartvit eller i färg. Den kan vara begränsad eller utfallande, var ljus eller mörk. Välj noga!    
			</div>

			<BackArrow />
		</div>
	)
};

export default Photo;