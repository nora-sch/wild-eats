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

module.exports = { getTop10 };


