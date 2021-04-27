/* eslint-disable consistent-return */
/* eslint-disable no-console */
const pathRoute = process.argv[2];
const fs = require("fs");
const path = require("path");
const marked = require("marked");
const { Renderer } = require("marked");
const fetch = require("node-fetch");
const regex = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

const existPath = (route) => fs.existsSync(route);
// console.log(existPath(pathRoute));

const absolutePath = (route) => path.isAbsolute(route);
// console.log(absolutePath(pathRoute));

const convertToAbsolute = (route) => path.resolve(route);
// console.log(convertToAbsolute(pathRoute));

const validatePath = (route) => {
  if (existPath(route)) {
    if (absolutePath(route) === true) {
      return route;
    } else return convertToAbsolute(route);
  }
};
//console.log("25", validatePath(pathRoute));

const stats = (route) => {
  //console.log(route)
  const stat = fs.lstatSync(route, "utf-8");
  return stat.isFile();
};

//console.log(stats(pathRoute));

const extension = (route) => path.extname(route) === ".md";
// console.log(extension(pathRoute));

const readFile = (route) => {
  const routeFile = validatePath(route);
  // console.log(routeFile);
  if (stats(routeFile) && extension(routeFile)) {
    const readMd = fs.readFileSync(routeFile, { encoding: "utf8", flag: "r" });
    return readMd;
  } else {
    return "No es archivo de extensión .md";
  }
};

/* const read = (route) => fs.readFileSync((route),
  { encoding: 'utf8', flag: 'r' }); */
// console.log(read(pathRoute));

//console.log(readFile('C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\README.md'));

// C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\examplefile.md

//tomando links
const arrayLinks = (route) => {
  const renderer = new marked.Renderer(); // sólo funciona con const renderer
  const read = readFile(route);
  // console.log('65',read)
  let links = [];

  renderer.link = (href, _file, text) => {
    if (regex.test(href)) {
      links = links.concat([{ href, text, file: route }]);
    }
    //console.log('70', renderer);
  };
  marked(read, { renderer });
  return links;
};

//console.log('75', arrayLinks(pathRoute));

const validate = (route) => {
  const totalArray = arrayLinks(route).map((element) => {
    //console.log((element))
    return fetch(element.href).then((res) => {
      let status = {
        href: element.href,
        text: element.text,
        file: element.file,
        status: res.status,
        statusText: res.statusText,
      };
      return status;
    }).catch( (err) => {let status = {
        href: element.href,
        text: element.text,
        file: element.file,
        status: 500,
        statusText: 'fail',
    };
    return status});

  });
  return Promise.all(totalArray)
};
validate(pathRoute).then(values => {
  return values})
  .catch(err => console.log(err));

  
  

module.exports = {
  existPath,
  absolutePath,
  convertToAbsolute,
  validatePath,
  readFile,
  arrayLinks,
  validate
};
