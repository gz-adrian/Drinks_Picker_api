import get from "./getElement.js";

import { hideLoading } from "./toggleLoading.js"; //https://youtu.be/ttmepWJNfBU?t=312

const displayDrinks = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");
  //  console.log(drinks)
  if (!drinks) {
    //display setup the error msg
    //hide loading
    hideLoading(); // invoke here

    title.textContent = "Sorry, no drinks matched your search";
    section.innerHTML = null;
    return; // it returns undefined
  }
  const newDrinks = drinks
    .map((drink) => {
      // An Array
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      // console.log(drink)

      return `<a href="drink.html">
              <article class="cocktail" data-id="${id}">
                <img src="${image}" alt="${name}" />
                <h3>${name}</h3>
              </article>
            </a>`;
      //  return `<a href="drink.html">
      //         <article class="cocktail" data-id="${id}">
      //           <img src="./cocktail.jpg" alt="cocktail">
      //           <h3>martini</h3>
      //         </article>
      //       </a>`
    })
    .join("");

  hideLoading();
  //hide loading
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
  // return 'hello world';
};

export default displayDrinks;

//https://youtu.be/iHfYZjg0h2A?t=160
