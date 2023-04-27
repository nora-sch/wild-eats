const data = require('../sources/data.js');
const {getTop10, getAllNoteDesc, getAllNoteAsc} = require('./filters.js');


const restaurantTop10 = getTop10(data); // restaurant Top 10
const top10Length = getTop10(data).length; // nb of restaurants
const allSortDescendant = getAllNoteDesc(data); // all restaurants sorted by note Desc
const allSortAscendant = getAllNoteAsc(data); // all restaurants sorted by note Asc
// console.log(restaurantTop10); 
// console.log(top10Length); 
// console.log(allSortDescendant);
// console.log(allSortAscendant);
