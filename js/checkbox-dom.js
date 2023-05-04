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
  sortBoxSection.insertAdjacentHTML(
    "beforeend",
    `<p class="division-line"></p>`
  );
//   document.querySelector("#sortByMeilleuresNotes").checked = true;
  
// CHECKBOX section
const checkBoxSection = document.querySelector(".form-checkbox-section");

// Speciality
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

// Object.keys(obj).forEach(key => { console.log(key, obj[key]); });
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
});

// if(document.getElementById('myElement')) {
//   // do stuff
// }

checkBoxSection.insertAdjacentHTML(
  "afterend",
  `</div>
    <p class="division-line"></p>`
);

// Diet
checkBoxSection.insertAdjacentHTML(
  "beforeend",
  `<legend class="checkbox-section-title">
        <span class="form-section-title">Régime </span>
        <span class="open-button" id="open-regime">
           <i class="fa-solid fa-circle-chevron-down"></i>
        </span>
        <span id="close-regime" class="close-button hidden">
          <i class="fa-solid fa-circle-chevron-up"></i>
        </span>
    </legend>
    <div id="foldable-regime" class="hidden">   
  `
);

// Object.keys(obj).forEach(key => { console.log(key, obj[key]); });
Object.keys(allFiltersToDisplay.diet).forEach((diet) => {
  checkBoxSection.insertAdjacentHTML(
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

// if(document.getElementById('myElement')) {
//   // do stuff
// }

checkBoxSection.insertAdjacentHTML(
  "afterend",
  `
    </div>
    <p class="division-line"></p>`
);

