// https://youtu.be/QBXqfkhQx30

import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

// Another window event listener. callback function

const presentDrink = async () => {
  const id = localStorage.getItem("drink"); // get me the drink item.
  if (!id) {
    window.location.replace("index.html");
  } else {
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(drink);
  }
  // fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`)
  // const drink = fetchDrinks(

  // const drink = await fetchDrinks(
  //   `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  // );
  // displayDrink(drink);

  // console.log('hello there');
};

window.addEventListener("DOMContentLoaded", presentDrink);
