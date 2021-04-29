const { arrayLinks } = require("./app.js");
const pathRoute = process.argv[2];

const total = (arrayLinks) => {
  let empty = [];
  arrayLinks.forEach((element) => {
    if (!empty.includes(element.href)) empty.push(element.href);
    // console.log(empty)
  });
  return empty;
};
//console.log(total(arrayLinks(pathRoute)));
// console.log(arrayLinks(pathRoute))
