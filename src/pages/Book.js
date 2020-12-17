import Headline from '../components/Headline';
import BackArrow from '../components/BackArrow';
import Cards from '../components/Cards';
import Card from '../components/Card';

import ScrollReveal from 'scrollreveal';

import file1 from '../assets/example_book/ph1.png';
import file2 from '../assets/example_book/ph2.png';
import file3 from '../assets/example_book/ph3.png';
import file4 from '../assets/example_book/ph4.png';
import file5 from '../assets/example_book/ph5.png';
import file6 from '../assets/example_book/ph6.png';
import file7 from '../assets/example_book/ph7.png';
import file8 from '../assets/example_book/ph8.png';

const cards_data = [
	{
		text: "En Odd Fellow-loge fyller 125-år. Jubileumsboken skulle locka till läsning med korta texter och många bilder!",
		background: file1
	},
	{
		text: "En genomtänkt grafisk form är nyckeln!",
		background: file2
	},
	{
		text: "Ett genomtänkt innehåll med tydlig kapitelindelning och tydliga rubriker.",
		background: file3
	},
	{
		text: "Varför inte följa historien med ett avsnitt per decennium?",
		background: file4
	},
	{
		text: "Varje uppslag följer samma princip med stora bilder, tydlig rubrik, korta bildtexter, sammanfattande ingress, kort brödtext",
		background: file5
	},
	{
		text: "Vänstersida med utfallande bild, högersida med rubrik, ingress, brödtext, mindre bilder på bakgrundsplatta",
		background: file6
	},
	{
		text: "Som läsare ska du kunna stanna till var som helst i boken och på ett enda uppslag få en helhetsbild av ett visst kapitel",
		background: file7
	},
	{
		text: "En Odd Fellow-loge fyller 125-år. Jubileumsboken skulle locka till läsning med korta texter och många bilder!",
		background: file8
	}
];

let cards = [];

for (const card of cards_data) {
	cards.push(
		<Card
			text={card.text}
			background={{backgroundImage: `url(${card.background})`}} />
	);
}

const Book = () => {
	ScrollReveal().reveal('.exbok_box');

	return (
		<div>
			<Headline page="Exempelbok" />

			<Cards>
				{cards}
			</Cards>

			<BackArrow />
		</div>
	)
};

export default Book;