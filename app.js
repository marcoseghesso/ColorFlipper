const colors = ["green", "white", "blue", "yellow", "grey", "black", "orange", "pink", "red"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener(`click`, function(){
    document.body.style.backgroundColor = colors[randomNum()];
    color.textContent = colors[randomNum()];
})

function randomNum(){
    return Math.floor(Math.random() * colors.length);
}