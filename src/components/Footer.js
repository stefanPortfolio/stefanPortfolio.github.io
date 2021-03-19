import '../style/components/Footer.css';

import logo from "../assets/logo.png";

const Home = () => (
	<div className="footer">
		<img id="logo_img" src={logo} alt="" />
		<p id="footer_p">Stefan Nilszén &copy; 2021</p>
	</div>
);

export default Home;