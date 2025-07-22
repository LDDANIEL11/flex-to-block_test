"use strict";

const btn = document.getElementById("button");
const container = document.getElementById("container");

btn.addEventListener("click", function () {
  if (container.classList.contains("flex-container")) {
    container.classList.remove("flex-container");
    container.classList.add("block-container");
  } else {
    container.classList.remove("block-container");
    container.classList.add("flex-container");
  }
});
