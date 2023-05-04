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

// get all restaurants sorted by price ascendant
const getAllPriceAsc = (data) => {
  let allAsc = data.slice(0);
  allAsc.sort(function (a, b) {
    return a.prix - b.prix;
  });
  return allAsc;
};
// get restaurants by max price
const getByMaxPrice = (data, maxPrice) => {
  const res = data.filter((resto) => resto.prix <= maxPrice);
  return res;
};

// get restaurants by speciality
const getBySpeciality = (data, filterArray = []) => {
  let res = [];
  data.forEach((resto) => {
    filterArray.includes(resto.specialite) ? res.push(resto) : null;
  });
  return res.length > 0 ? res : data;
};
// get restaurants by diet
const getByDiet = (data, filterArray = []) => {
  let res = [];
  data.forEach((resto) => {
    resto.regime.map((regime) => firstToUpperCase(regime)).some((r) => filterArray.indexOf(r) >= 0)
      ? res.push(resto)
      : null;
  });
  return res.length > 0 ? res : data;
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

// get all filter values from sourcefile
const getAllFiltersToDisplay = (data) => {
  const allFiltersDisplay = {
    sortBy: [],
    speciality: {},
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
  allFiltersDisplay.organisation.push("À emporter");
  // PRICE
  allFiltersDisplay.price = getMaxPrice(data);
  data.forEach((resto) => {
    // SPECIALITY
    if (!allFiltersDisplay.speciality.hasOwnProperty(resto.specialite)) {
      allFiltersDisplay.speciality[resto.specialite] = 1;
    } else {
      allFiltersDisplay.speciality[resto.specialite] =
        allFiltersDisplay.speciality[resto.specialite] + 1;
    }
    resto.regime.forEach((regime) => {
      if (!allFiltersDisplay.diet.hasOwnProperty(regime)) {
        allFiltersDisplay.diet[regime] = 1;
      } else {
        allFiltersDisplay.diet[regime] = allFiltersDisplay.diet[regime] + 1;
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
export {
  getTop10,
  getAllNoteDesc,
  getAllNoteAsc,
  getAllPriceAsc,
  getAllFiltersToDisplay,
  getByMaxPrice,
  getBySpeciality,
  getByDiet,
};
