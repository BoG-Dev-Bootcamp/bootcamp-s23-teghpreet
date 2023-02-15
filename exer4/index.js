import figlet from "figlet";
import axios from "axios";
const { textSync } = figlet;

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getPokemon() {
	try {
		const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + getRandom(1, 1008));
		let name = response.data.name;
    	console.log(textSync(name, {
      		font: "Standard",
      		horizontalLayout: "default",
      		verticalLayout: "default",
      		width: 80,
      		whitespaceBreak: true,
    	}));
	}
	catch (error) {
		console.log("No pokemon found");
	}
} 

getPokemon()