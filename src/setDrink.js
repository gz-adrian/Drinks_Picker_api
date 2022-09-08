// https://youtu.be/NgxfHP3cnf0?t=389

const setDrink = (section) => {
  section.addEventListener("click", function (e) {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // JSON.stringify JSON.parse
    localStorage.setItem("drink", id);
    // console.log(id);
    // console.log(e.target);

    // console.log(section);
  });
};

export default setDrink;
