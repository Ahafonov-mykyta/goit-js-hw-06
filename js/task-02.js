const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
console.log (list)
let listItem;

const iningredientsList = ingredients.map((ingredient) => {
 
  listItem = document.createElement("li")
  listItem.textContent = ingredient;
  listItem.classList.add("item");
 
  return listItem;
});
list.append(...iningredientsList); 