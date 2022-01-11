let myfunction = window.onload = () => {

const card = document.querySelector(".card");
const number = document.querySelector("#number");
const topsuit= document.querySelector("#topsuit");
const bottonsuit= document.querySelector("#bottonsuit");
const button = document.querySelector("#button");

let suitarray = ["♦", "♥", "♠", "♣"];
let num = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

let suitrandom =  Math.floor(Math.random()* suitarray.length);
let printsuit = suitarray[suitrandom]

let numberrandom =  Math.floor(Math.random()* num.length);
let numberprint = num[numberrandom]

number.innerText = numberprint;
topsuit.innerText = printsuit;
bottonsuit.innerText = printsuit;


if (suitrandom === 0 || suitrandom === 1) {
    topsuit.style.color="red";
    bottonsuit.style.color="red";
} else { 
topsuit.style.color="black";
bottonsuit.style.color="black";}

}

window.setInterval(myfunction, 5000);

button.addEventListener("click", () => { myfunction() });
