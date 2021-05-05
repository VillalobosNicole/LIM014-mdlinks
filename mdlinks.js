const {
  absolutePath,
  readFile,
  arrayLinks,
  validate,
  extension,
  convertToAbsolute,
} = require("./app.js");
const pathRoute = process.argv[2];

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let success = false; //
    if (!absolutePath(path)) {
      path = convertToAbsolute(path);
    }
    // console.log(path);

    if (readFile(path)) {
      //console.log("paso lectura",extension(path) );
      if (extension(path)) {
        success = true;
        if (options.validate == true) {
          results = validate(path);
        } else {
          results = arrayLinks(path);
        }
      }
    }

    if (success) {
      resolve(results);
    } else {
      reject("Error");
    }
  });
};

// mdLinks(pathRoute, {validate : true})
// .then((res) => console.log(res))
// .catch((err) => console.log(err));

module.exports = {
  mdLinks,
};
