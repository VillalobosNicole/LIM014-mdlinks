const {
  absolutePath,
  readFile,
  arrayLinks,
  validate,
  convertToAbsolute,
  validatePath,
} = require("./app.js");
const pathRoute = process.argv[2];

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    const absoltPath = absolutePath(path);
    const readPath = readFile(path);
    const convertPath = convertToAbsolute(path);
    const validate = validatePath(path);

    if (absoltPath == true) {
      if(readPath){
        resolve(validate)};
    } else {
        reject(convertPath);
    }
  });
};

mdLinks(pathRoute)
  .then((absoltPath) => console.log('28',absoltPath))
//   .then((convertPath) => console.log('29', convertPath))
  .catch((err) => console.log('Archivo inválido'));
