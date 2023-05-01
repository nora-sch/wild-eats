// const data = require('../sources/data.js');
// const {getTop10, getAllNoteDesc, getAllNoteAsc} = require('./filters.js');

// const restaurantTop10 = getTop10(data); // restaurant Top 10
// const top10Length = getTop10(data).length; // nb of restaurants
// const allSortDescendant = getAllNoteDesc(data); // all restaurants sorted by note Desc
// const allSortAscendant = getAllNoteAsc(data); // all restaurants sorted by note Asc

// ===== DOM =====

// FOLD / OPEN CHECKBOX SECTION

let openButtons = document.querySelectorAll(".open-button");
openButtons.forEach((open) => {
  open.addEventListener("click", (event) => {
    let ifOpen = false;
    let foldable = document.querySelector("#foldable-specialite");
    foldable.classList.remove('hidden');
    foldable.style.transitionDuration = "500ms";
    let closeButton = document.querySelector('#close-specialite');
    closeButton.classList.remove('hidden');
    open.classList.add('hidden');
   });
});
let closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach((close) => {
  close.addEventListener("click", (event) => {
    let ifOpen = false;
    let foldable = document.querySelector("#foldable-specialite");
    foldable.classList.add('hidden');
    foldable.style.transitionDuration = "500ms";
    let openButton = document.querySelector('#open-specialite');
    openButton.classList.remove('hidden');
    close.classList.add('hidden');
   });
});


// SLIDER
let slider = document.querySelector(".slider");
let sliderValue = document.querySelector(".slider").value;
let sliderValueDisplay = document.querySelector("#slider-value");
let maxValue = 100;
sliderValue = maxValue;
document.querySelector(".slider").defaultValue = maxValue;
sliderValueDisplay.textContent = sliderValue;
slider.addEventListener("input", (event) => {
  sliderValueDisplay.textContent = event.target.value;
});

let sliderLeft = slider.offsetLeft; //readonly
let sliderTop = slider.offsetTop; //readonly
let sliderWidth = slider.offsetWidth; //readonly
console.log(sliderLeft, sliderWidth);
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

// FORM VALUES
let filterForm = document.forms["filter-form"];

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  let sort = document.getElementsByName("sortBy");
  let sortValue;
  for (var i = 0; i < sort.length; i++) {
    if (sort[i].checked) {
      sortValue = sort[i].value;
    }
  }

  console.log(sortValue);

  let checkBoxes = document.querySelectorAll(".form-checkbox");
  let checkedBoxes = [];
  for (let box of checkBoxes) {
    if (box.checked == true) {
      checkedBoxes.push(box.value);
    }
  }

  console.log(checkedBoxes);
  console.log(this.priceRange.value);
});
