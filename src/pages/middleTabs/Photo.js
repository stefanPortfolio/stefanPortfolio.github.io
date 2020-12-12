import '../../style/MiddleTabs.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackArrow from '../../components/BackArrow';

const Photo = () => {
	return (
		<div>
            <Header />
			<div className="content">
				Bilden är inte bara ett komplement till texten. Vi säger ofta att <i>"en bild säger mer än tusen ord"</i>. Bilden kan vara ett foto, en teckning, ett konstverk eller en grafisk form då ett citat tydliggörs eller en bokstav som lyfts fram. <br /><br />
				Bilden ger en annan upplevelse för läsaren än texten. Men båda behövs för att skapa läsupplevelsen. <br /><br />
				Ofta ser man först bilden, sedan texten. Val av bild är därför viktigt. Den ska passa in, den kan vara svartvit eller i färg, vara begränsad eller utfallande, var ljus eller mörk. Välj noga!    
			</div>

			<BackArrow />

			<Footer />
		</div>
	)
};

export default Photo;