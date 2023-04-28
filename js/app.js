// const data = require('../sources/data.js');
// const {getTop10, getAllNoteDesc, getAllNoteAsc} = require('./filters.js');

// const restaurantTop10 = getTop10(data); // restaurant Top 10
// const top10Length = getTop10(data).length; // nb of restaurants
// const allSortDescendant = getAllNoteDesc(data); // all restaurants sorted by note Desc
// const allSortAscendant = getAllNoteAsc(data); // all restaurants sorted by note Asc

// ===== DOM =====

let slider = document.querySelector(".slider");
let sliderValue = document.querySelector(".slider").value;
let sliderValueDisplay = document.querySelector("#slider-value");
let maxValue = 100;
document.querySelector(".slider").defaultValue = maxValue;
sliderValueDisplay.textContent = sliderValue;
slider.addEventListener("input", (event) => {
  sliderValueDisplay.textContent = event.target.value;
  console.log(sliderValue);
  // console.log(event);
});

let filterForm = document.forms["filter-form"];

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  console.log(this.priceRange.value);
});
