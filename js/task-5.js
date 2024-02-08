`use strict`

const body = document.body;
const buttonClick = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {

  const color = getRandomHexColor();

  console.log(color)
  colorValue.textContent = color;
  body.style.backgroundColor = color;
}

buttonClick.addEventListener("click", changeColor)