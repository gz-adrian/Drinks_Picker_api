const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};

export default getElement;
// https://youtu.be/yXz1hBqLiY4?t=22
