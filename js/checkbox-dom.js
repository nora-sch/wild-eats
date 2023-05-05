import {
  getTop10,
  getAllNoteDesc,
  getAllNoteAsc,
  getAllFiltersToDisplay,
} from "./filters.js";

const allFiltersToDisplay = getAllFiltersToDisplay(restaurants);

// ===== DOM =====

// SLIDER
// values
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
// display style
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

// ADD FILTER DOM
const sortBoxSection = document.querySelector(".form-sort-section");
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
});
sortBoxSection.insertAdjacentHTML("beforeend", `<p class="division-line"></p>`);
//   document.querySelector("#sortByMeilleuresNotes").checked = true;

// CHECKBOX section
const checkBoxSection = document.querySelector(".form-checkbox-section");

// Speciality
checkBoxSection.insertAdjacentHTML(
  "beforeend",
  `<legend class="checkbox-section-title" id="legend-specialite">
        <div class="form-section-title">Specialité </div>
        <div class="open-button" id="open-specialite">
           <i class="fa-solid fa-circle-chevron-down"></i>
        </div>
        <div class="close-button hidden" id="close-specialite">
          <i class="fa-solid fa-circle-chevron-up"></i>
        </div>
    </legend>
    <div id="foldable-specialite" class="hidden"> 
    </div>
      <p class="division-line"></p>  
  `
);
const foldableSpeciality = document.querySelector("#foldable-specialite");

// Object.keys(obj).forEach(key => { console.log(key, obj[key]); });
Object.keys(allFiltersToDisplay.speciality).forEach((spec) => {
  foldableSpeciality.insertAdjacentHTML(
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
});

// Diet
checkBoxSection.insertAdjacentHTML(
  "beforeend",
  `<legend class="checkbox-section-title" id="legend-regime">
        <div class="form-section-title">Régime </div>
        <div class="open-button" id="open-regime">
           <i class="fa-solid fa-circle-chevron-down"></i>
        </div>
        <div class="close-button hidden" id="close-regime">
          <i class="fa-solid fa-circle-chevron-up"></i>
        </div>
    </legend>
    <div id="foldable-regime" class="hidden">  
    </div>
    <p class="division-line"></p> 
  `
);
const foldableRegime = document.querySelector("#foldable-regime");

Object.keys(allFiltersToDisplay.diet).forEach((diet) => {
  foldableRegime.insertAdjacentHTML(
    "beforeend",
    ` <p>
    <input
      type="checkbox"
      name="type[]"
      class="form-checkbox"
      value="${firstToUpperCase(diet)}"
    />
    <span class="checkmark"></span>
    <label for="${firstToUpperCase(diet)}">${firstToUpperCase(
      diet
    )} <span class="nb-items">(${allFiltersToDisplay.diet[diet]})</span></label>
  </p>`
  );
});

// FOLD / OPEN CHECKBOX SECTION

// function openAndCloseSection(
//   foldableSection,
//   openButtons,
//   closeButtons,
//   openButton,
//   closeButton
// ) {
//   openButtons.forEach((open) => {
//     open.addEventListener("click", (event) => {
//       console.log("click");
//       foldableSection.classList.remove("hidden");
//       foldableSection.style.transitionDuration = "500ms";
//       closeButton.classList.remove("hidden");
//       openButton.classList.add("hidden");
//     });
//   });
//   closeButtons.forEach((close) => {
//     close.addEventListener("click", (event) => {
//       foldableSection.classList.add("hidden");
//       foldableSection.style.transitionDuration = "500ms";
//       openButton.classList.remove("hidden");
//       closeButton.classList.add("hidden");
//     });
//   });
// }

// const foldableSpecialite = document.querySelector("#foldable-specialite");
// let openButtons = document.querySelectorAll(".open-button");
// let closeButtons = document.querySelectorAll(".close-button");
// let closeButtonSpecialite = document.querySelector("#close-specialite");
// let openButtonSpecialite = document.querySelector("#open-specialite");

// openAndCloseSection(
//   foldableSpecialite,
//   openButtons,
//   closeButtons,
//   openButtonSpecialite,
//   closeButtonSpecialite
// );

// const foldableDiet = document.querySelector("#foldable-regime");
// let closeButtonDiet = document.querySelector("#close-regime");
// let openButtonDiet = document.querySelector("#open-regime");
// openAndCloseSection(
//   foldableDiet,
//   openButtons,
//   closeButtons,
//     openButtonDiet,
//   closeButtonDiet
// );

// let openButtons = document.querySelectorAll(".open-button");
// openButtons.forEach((open) => {
//   open.addEventListener("click", (event) => {
//     console.log("click");
//     let ifOpen = false;
//     let foldable = document.querySelector("#foldable-specialite");
//     foldable.classList.remove("hidden");
//     foldable.style.transitionDuration = "500ms";
//     let closeButton = document.querySelector("#close-specialite");
//     closeButton.classList.remove("hidden");
//     open.classList.add("hidden");
//   });
// });

// let closeButtons = document.querySelectorAll(".close-button");
// closeButtons.forEach((close) => {
//   close.addEventListener("click", (event) => {
//     let ifOpen = false;
//     let foldable = document.querySelector("#foldable-specialite");
//     foldable.classList.add("hidden");
//     foldable.style.transitionDuration = "500ms";
//     let openButton = document.querySelector("#open-specialite");
//     openButton.classList.remove("hidden");
//     close.classList.add("hidden");
//   });
// });

let openButtons = document.querySelectorAll(".open-button");
openButtons.forEach((open) => {
  open.addEventListener("click", (event) => {
    const parentId = open.parentElement.getAttribute("id");
    let sectionTheme = splitAndJoin(parentId);
    let foldable = document.querySelector(`#foldable-${sectionTheme}`);
    foldable.classList.remove("hidden");
    foldable.style.transitionDuration = "500ms";
    let closeButton = document.querySelector(`#close-${sectionTheme}`);
    closeButton.classList.remove("hidden");
    open.classList.add("hidden");
  });
});

let closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach((close) => {
  close.addEventListener("click", (event) => {
    const parentId = close.parentElement.getAttribute("id");
    let sectionTheme = splitAndJoin(parentId);
    let foldable = document.querySelector(`#foldable-${sectionTheme}`);
    foldable.classList.add("hidden");
    foldable.style.transitionDuration = "500ms";
    let openButton = document.querySelector(`#open-${sectionTheme}`);
    openButton.classList.remove("hidden");
    close.classList.add("hidden");
  });
});
