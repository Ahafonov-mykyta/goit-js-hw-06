function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }



const body = document.querySelector ("body");
const colorName = document.querySelector(".color");

const btn = document.querySelector(".change-color");


btn.addEventListener ("click", ()=> {

 colorName.textContent = getRandomHexColor();
 body.style.backgroundColor = colorName.textContent;

}) 