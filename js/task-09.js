const body = document.querySelector ("body");
const colorName = document.querySelector(".color");

const btn = document.querySelector(".change-color");

btn.addEventListener ("click", (event)=> {

 colorName.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 body.style.backgroundColor = colorName.textContent;

}) 