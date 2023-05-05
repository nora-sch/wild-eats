const camelCase = (sentence) =>
  sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

const firstToUpperCase = (sentence) =>
  sentence.charAt(0).toUpperCase() + sentence.slice(1);

const splitAndJoin = (sentence) => {
  let arr = sentence.split("-");
  arr.shift();
  res = arr.join("-");
  return res;
};

// const splitAndJoin = (sentence) => sentence.split('-').shift().join('-');
