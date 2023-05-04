console.log(restaurants);
import {
  getTop10,
  getAllNoteDesc,
  getAllNoteAsc,
  getAllFiltersToDisplay,
} from "./filters.js";

const allFiltersToDisplay = getAllFiltersToDisplay(restaurants);
console.log(allFiltersToDisplay);
// const data = require('../sources/data.js');
// const {getTop10, getAllNoteDesc, getAllNoteAsc} = require('./filters.js');

// const restaurantTop10 = getTop10(data); // restaurant Top 10
// const top10Length = getTop10(data).length; // nb of restaurants
// const allSortDescendant = getAllNoteDesc(data); // all restaurants sorted by note Desc
// const allSortAscendant = getAllNoteAsc(data); // all restaurants sorted by note Asc

// const {getTop10, getAllNoteDesc, getAllNoteAsc} = require/filters.js');

const restaurantTop10 = getTop10(restaurants); // restaurant Top 10
// console.log(restaurantTop10);
const top10Length = getTop10(restaurants).length; // nb of restaurants
const allSortDescendant = getAllNoteDesc(restaurants); // all restaurants sorted by note Desc
const allSortAscendant = getAllNoteAsc(restaurants); // all restaurants sorted by note Asc
// ===== DOM =====

// FOLD / OPEN CHECKBOX SECTION

let openButtons = document.querySelectorAll(".open-button");
openButtons.forEach((open) => {
  open.addEventListener("click", (event) => {
    console.log("click");
    let ifOpen = false;
    let foldable = document.querySelector("#foldable-specialite");
    foldable.classList.remove("hidden");
    foldable.style.transitionDuration = "500ms";
    let closeButton = document.querySelector("#close-specialite");
    closeButton.classList.remove("hidden");
    open.classList.add("hidden");
  });
});

let closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach((close) => {
  close.addEventListener("click", (event) => {
    let ifOpen = false;
    let foldable = document.querySelector("#foldable-specialite");
    foldable.classList.add("hidden");
    foldable.style.transitionDuration = "500ms";
    let openButton = document.querySelector("#open-specialite");
    openButton.classList.remove("hidden");
    close.classList.add("hidden");
  });
});

// SLIDER
let slider = document.querySelector(".slider");
let maxValue = allFiltersToDisplay.price;
let sliderValue = document.querySelector(".slider").value;
document.querySelector(".slider").max = maxValue;
let sliderValueDisplay = document.querySelector("#slider-value");
sliderValue = maxValue;
document.querySelector(".slider").defaultValue = maxValue;
sliderValueDisplay.textContent = sliderValue;
slider.addEventListener("input", (event) => {
  sliderValueDisplay.textContent = event.target.value;
});

let sliderLeft = slider.offsetLeft; //readonly
let sliderTop = slider.offsetTop; //readonly
let sliderWidth = slider.offsetWidth; //readonly
// console.log(sliderLeft, sliderWidth);
sliderValueDisplay.style.left = sliderWidth + "px";
sliderValueDisplay.style.top = sliderTop - 28 + "px";

slider.addEventListener("click", (event) => {
  var cursorX = event.pageX;
  sliderValueDisplay.style.top = sliderTop - 28 + "px";
  if (cursorX < sliderLeft + 7) {
    sliderValueDisplay.style.left = sliderLeft + 7 + "px";
  } else if (cursorX > sliderWidth + 7) {
    sliderValueDisplay.style.left = sliderWidth + "px";
  } else {
    sliderValueDisplay.style.left = cursorX - 6 + "px";
  }
});
// this.addEventListener("mousemove", (event) => {
//   var cursorX = event.pageX;
//   sliderValueDisplay.style.top = sliderTop - 28 + "px";
//   if (cursorX < sliderLeft + 7) {
//     sliderValueDisplay.style.left = sliderLeft + 7 + "px";
//   } else if (cursorX > sliderWidth + 7) {
//     sliderValueDisplay.style.left = sliderWidth + "px";
//   } else {
//     sliderValueDisplay.style.left = cursorX - 6 + "px";
//   }
// });

// FILTER FACTORY

const filters = {
  sortBy: "note" /*price*/,
  speciality: [],
  diet: [],
  organisation: [],
  maxPrice: allFiltersToDisplay.price,
};

// ADD FILTER DOM

const sortBoxSection = document.querySelector(".form-sort-section");
const checkBoxSection = document.querySelector(".form-checkbox-section");

// SORT section
sortBoxSection.insertAdjacentHTML(
  "beforeend",
  `<legend><span class="form-section-title">Trier par</span></legend>`
);
allFiltersToDisplay.sortBy.forEach((sort) => {
  sortBoxSection.insertAdjacentHTML(
    "beforeend",
    `<p>
      <input
        type="radio"
        name="sortBy"
        id="sortBy${camelCase(sort)}"
        value="${camelCase(sort)}"
      />
      <label for="sortBy${camelCase(sort)}">${firstToUpperCase(sort)}</label>
    </p>  
    `
  );
  sortBoxSection.insertAdjacentHTML(
    "beforeend",
    `<p class="division-line"></p>`
  );
});

document.querySelector("#sortByMeilleuresNotes").checked = true;

// CHECKBOX section
checkBoxSection.insertAdjacentHTML(
  "beforeend",
  `<legend class="checkbox-section-title">
        <span class="form-section-title">Specialité </span>
        <span class="open-button" id="open-specialite">
           <i class="fa-solid fa-circle-chevron-down"></i>
        </span>
        <span id="close-specialite" class="close-button hidden">
          <i class="fa-solid fa-circle-chevron-up"></i>
        </span>
    </legend>
    <div id="foldable-specialite" class="hidden"> 
`
);
// Object.keys(obj).forEach(key => {
//   console.log(key, obj[key]);
// });
Object.keys(allFiltersToDisplay.speciality).forEach((spec) => {
  checkBoxSection.insertAdjacentHTML(
    "beforeend",
    ` <p>
  <input
    type="checkbox"
    name="type[]"
    class="form-checkbox"
    value="${spec}"
  />
  <span class="checkmark"></span>
  <label for="${spec}">${spec} <span class="nb-items">(${allFiltersToDisplay.speciality[spec]})</span></label>
</p>`
  );
  // const specNbDisplay = document.querySelector(".nb-items");
  // allFiltersToDisplay.speciality[spec] > 0
  //   ? specNbDisplay.classList.add("nb-items-vert")
  //   : specNbDisplay.classList.remove("nb-items-vert");
});

checkBoxSection.insertAdjacentHTML(
  "beforeend",
  `
  </div>
  <p class="division-line"></p>`
);

// FORM VALUES
let filterForm = document.forms["filter-form"];

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // SORT
  let sort = document.getElementsByName("sortBy");
  let sortValue;
  for (var i = 0; i < sort.length; i++) {
    if (sort[i].checked) {
      sortValue = sort[i].value;
    }
  }

  console.log(sortValue);
  // CHECK
  let checkBoxes = document.querySelectorAll(".form-checkbox");
  let checkedBoxes = [];
  for (let box of checkBoxes) {
    if (box.checked == true) {
      checkedBoxes.push(box.value);
    }
  }

  console.log(checkedBoxes);
  console.log(filters);

  // SLIDER
  // console.log(event.priceRange);
  console.log(this.priceRange);
  console.log(this.priceRange.value);
});

// RESET
filterForm.addEventListener("reset", (event) => {
  console.log("reset");
  sliderValueDisplay.textContent = sliderValue;
  // document.querySelector("#sortByMeilleuresNotes").checked = true;
  // console.log(sortValue);
  // console.log(checkedBoxes);
  console.log(this.priceRange.value);
});
