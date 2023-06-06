const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients");

const items = ingredients.map((item) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = item;

  return listEl;

});

console.log(items);

ingredientsEl.append(...items);
