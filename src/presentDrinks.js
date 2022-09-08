import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

// Async Await
const showDrinks = async (url) => {
  // fetch drink
  const data = await fetchDrinks(url);

  // display drinks
  const section = await displayDrinks(data); // checking what is coming back
  if (section) {
    // if true does this
    setDrink(section);
  }

  // console.log(data);
};

export default showDrinks;

//   // display drinks
// const section = await displayDrinks(data);
// console.log(section);

// // console.log(data);
