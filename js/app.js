import {
  getTop10,
  getAllNoteDesc,
  getAllNoteAsc,
  getAllPriceAsc,
  getAllFiltersToDisplay,
  getByMaxPrice,
  getBySpeciality,
} from "./filters.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log(restaurants);

  const allFiltersToDisplay = getAllFiltersToDisplay(restaurants);
  console.log(allFiltersToDisplay);

  const restaurantTop10 = getTop10(restaurants); // restaurant Top 10
  const top10Length = getTop10(restaurants).length; // nb of restaurants
  const allSortDescendant = getAllNoteDesc(restaurants); // all restaurants sorted by note Desc
  const allSortAscendant = getAllNoteAsc(restaurants); // all restaurants sorted by note Asc

  // FILTER FACTORY

  const resetFilters = () => {
    return {
      sortBy: "All",
      speciality: [],
      diet: [],
      organisation: [],
      maxPrice: allFiltersToDisplay.price,
    };
  };

  let filters = resetFilters();

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
    if (sortValue) filters.sortBy = sortValue;

    // CHECK
    let checkBoxes = document.querySelectorAll(".form-checkbox");
    let checkedBoxes = [];
    for (let box of checkBoxes) {
      if (box.checked == true) {
        checkedBoxes.push(box.value);
      }
    }
    filters.speciality = checkedBoxes;
    console.log(checkedBoxes);

    // SLIDER
    filters.maxPrice = parseInt(document.querySelector(".slider").value);

    console.log(filters);

    // DISPLAY FILTERED RESULTS
    const filteredResult = (filters, restaurants) => {
      let returnRestaurants;
      // SortBy
      switch (filters.sortBy) {
        case "MeilleuresNotes":
          returnRestaurants = getAllNoteDesc(restaurants);
          break;
        case "Prix":
          returnRestaurants = getAllPriceAsc(restaurants);
          break;
        default:
          returnRestaurants = restaurants;
      }
      // Speciality
      returnRestaurants = getBySpeciality(
        returnRestaurants,
        filters.speciality
      );
      // Price
      returnRestaurants = getByMaxPrice(returnRestaurants, filters.maxPrice);
      return returnRestaurants;
    };
    console.log(filteredResult(filters, restaurants));
  });

  // RESET
  filterForm.addEventListener("reset", (event) => {
    console.log("reset");
    document.querySelector("#slider-value").textContent =
      allFiltersToDisplay.price;
    filters = resetFilters();
    console.log(filters);
  });

  console.log(filters);
});
