const colors = ["green", "white", "blue", "yellow", "grey", "black", "orange", "pink", "red"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener(`click`, () => {
    let randomNumberForColor = randomNum();
    document.body.style.backgroundColor = colors[randomNumberForColor];
    color.textContent = colors[randomNumberForColor];
})

let randomNum = () => { return Math.floor(Math.random() * colors.length); }