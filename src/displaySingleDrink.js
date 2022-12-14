// https://youtu.be/QBXqfkhQx30?t=158  setup preview

// https://youtu.be/1UVvlNFyCuk part 2

import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

// const displayDrink = (drink) => {
const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;

  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
    drink.strIngredient11,
  ];

  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");
  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      // return `<li>${item}</li>`;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");
  console.log(drink, list);
};

export default displayDrink;
