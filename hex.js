const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");
let randomHex = `#`;

button.addEventListener(`click`, () => {
    createHex();
    document.body.style.backgroundColor = randomHex;
    color.textContent = randomHex;
    randomHex = `#`;
})

let createHex = () => {
    for (i=0; i<6; i++){
        randomHex += hex[randomNumber()];
    }
}

let randomNumber = () => { return Math.floor(Math.random() * hex.length);}