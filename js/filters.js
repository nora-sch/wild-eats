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

// ======= EXPORTS =======

module.exports = {
  getTop10,
  getAllNoteDesc,
  getAllNoteAsc
};
