import get from "./getElement.js";

const loading = get(".loading");

export const showLoading = () => {
  loading.classList.remove("hide-loading");
};

export const hideLoading = () => {
  loading.classList.add("hide-loading");
};

// https://youtu.be/ttmepWJNfBU?t=167
