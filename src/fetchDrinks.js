import { showLoading } from "./toggleLoading.js";
const fetchDrinks = async (url) => {
  showLoading();

  // return 1 // return a promise
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
