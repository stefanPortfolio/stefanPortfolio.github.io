import Headline from '../components/Headline';
import BackArrow from '../components/BackArrow';

import '../style/Book.css';
import { GlassMagnifier } from "react-image-magnifiers";

import img1 from '../assets/example_book/img1.png';
import img2 from '../assets/example_book/img2.png';
import img3 from '../assets/example_book/img3.png';
import img4 from '../assets/example_book/img4.png';
import img5 from '../assets/example_book/img5.png';
import img6 from '../assets/example_book/img6.png';
import img7 from '../assets/example_book/img7.png';
import img8 from '../assets/example_book/img8.png';

import img1x2 from '../assets/example_book/x2/img1x2.png';
import img2x2 from '../assets/example_book/x2/img2x2.png';
import img3x2 from '../assets/example_book/x2/img3x2.png';
import img4x2 from '../assets/example_book/x2/img4x2.png';
import img5x2 from '../assets/example_book/x2/img5x2.png';
import img6x2 from '../assets/example_book/x2/img6x2.png';
import img7x2 from '../assets/example_book/x2/img7x2.png';
import img8x2 from '../assets/example_book/x2/img8x2.png';

const cards_data = [
	{
		text: "En Odd Fellow-loge fyller 125 år. Jubileumsboken skulle locka till läsning med korta texter och många bilder!",
		img: img1,
		imgx2: img1x2
	},
	{
		text: "En genomtänkt grafisk form är nyckeln!",
		img: img2,
		imgx2: img2x2
	},
	{
		text: "Ett genomtänkt innehåll med tydlig kapitelindelning och tydliga rubriker.",
		img: img3,
		imgx2: img3x2
	},
	{
		text: "Varför inte följa historien med ett avsnitt per decennium?",
		img: img4,
		imgx2: img4x2
	},
	{
		text: "Varje uppslag följer samma princip med stora bilder, tydlig rubrik, korta bildtexter, sammanfattande ingress, kort brödtext",
		img: img5,
		imgx2: img5x2
	},
	{
		text: "Vänstersida med utfallande bild, högersida med rubrik, ingress, brödtext, mindre bilder på bakgrundsplatta",
		img: img6,
		imgx2: img6x2
	},
	{
		text: "Som läsare ska du kunna stanna till var som helst i boken och på ett enda uppslag få en helhetsbild av ett visst kapitel",
		img: img7,
		imgx2: img7x2
	},
	{
		text: "En kombination av bilder och kortare texter ger en bra helhetsupplevelse.",
		img: img8,
		imgx2: img8x2
	}
];

let cards = [];

const Card = (props) => {
    return (
        <div className="book_box">
			<div className="book_img_holder">
			<GlassMagnifier
			  className="book_img2"
              imageSrc={props.img}
			  largeImageSrc={props.imgx2}
              allowOverflow={true}
              magnifierSize="50%"
              square={true}
            />
			</div>
            <div className="book_text">{props.text}</div>
        </div>
    )
};

for (const card of cards_data) {
	cards.push(
		<Card
			text={card.text}
			img={card.img}
			imgx2={card.imgx2} />
	);
}

const Book = () => (
	<div>
		<Headline page="Exempelbok" bg="#F9D1AF" />

		<div className="book_boxes">
			{cards}
		</div>

		<BackArrow />
	</div>
);

export default Book;