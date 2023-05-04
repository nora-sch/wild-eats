// get all restaurants sorted by note descendant
const getAllNoteDesc = (data) => {
  let allDesc = [];

  for (let i = 5; i > 0; i--) {
    data.forEach((restaurant) => {
      if (restaurant.note === i) {
        allDesc.push(restaurant);
      }
    });
  }
  return allDesc;
};

// get all restaurants sorted by note ascendant
const getAllNoteAsc = (data) => {
  let allAsc = [];

  for (let i = 1; i <= 5; i++) {
    data.forEach((restaurant) => {
      if (restaurant.note === i) {
        allAsc.push(restaurant);
      }
    });
  }
  return allAsc;
};

// get top 10 restaurants
/**
 *
 * @param {*} data
 * @return {*}
 */
const getTop10 = (data) => {
  let arrayOf10 = [];

  for (let i = 5; i > 0; i--) {
    data.forEach((restaurant) => {
      if (arrayOf10.length < 10) {
        if (restaurant.note === i) {
          arrayOf10.push(restaurant);
        }
      }
    });
  }
  return arrayOf10;
};

// get max price
const getMaxPrice = (data) => {
  let maxPrice = 0;
  data.forEach((resto) => {
    resto.prix > maxPrice ? (maxPrice = resto.prix) : maxPrice;
  });
  return maxPrice;
};
// get max price from filtered

// get all specialities
const getAllFiltersToDisplay = (data) => {
  const allFiltersDisplay = {
    sortBy: [],
    speciality: [],
    diet: [],
    organisation: [],
    price: null,
  };
    // SORT BY
  allFiltersDisplay.sortBy.push("Meilleures notes");
  allFiltersDisplay.sortBy.push("Prix");
  // ORGANISATION
  allFiltersDisplay.organisation.push("Sur place");
  allFiltersDisplay.organisation.push("Livraison");
  allFiltersDisplay.organisation.push("A emporter");
  // PRICE
  allFiltersDisplay.price = getMaxPrice(data);
  data.forEach((resto) => {
    // SPECIALITY
    if (!allFiltersDisplay.speciality.includes(resto.specialite)) {
      allFiltersDisplay.speciality.push(resto.specialite);
    }
    // DIET
    resto.regime.forEach((regime) => {
      if (
        !allFiltersDisplay.diet.includes(regime) &&
        regime !== null &&
        regime != ""
      ) {
        allFiltersDisplay.diet.push(regime);
      }
    });
  });
  return allFiltersDisplay;
};

// ======= EXPORTS =======

// module.exports = {
//   getTop10,
//   getAllNoteDesc,
//   getAllNoteAsc
// };
export { getTop10, getAllNoteDesc, getAllNoteAsc, getAllFiltersToDisplay };
