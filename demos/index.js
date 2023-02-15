import figlet from "figlet";
const { textSync } = figlet;

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
}

axios.get("https://pokeapi.co/api/v2/pokemon/" + getRandom(1,1008))
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error){
        console.log(error)
    })
let name = response.data.name

console.log(figlet.textSync(name, {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));

