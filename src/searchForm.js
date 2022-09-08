// https://youtu.be/VNVzb1Guzl0?t=34
// console.log('hello world');

import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
const input = get('[name="drink"]'); //the name of the object

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  // console.log(input.value);
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
