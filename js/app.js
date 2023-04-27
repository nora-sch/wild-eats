const data = require('../sources/data.js');
const {getTop10} = require('./filters.js');


const restaurantTop10 = getTop10(data); // restaurant Top 10
const top10Length = getTop10(data).length; // nb of restaurants
console.log(restaurantTop10); 
console.log(top10Length); 
