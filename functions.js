/* eslint-disable no-console */

const pathRoute = process.argv[2];
const fs = require('fs');
const path = require('path');

/* console.log(fs.existsSync('C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\README.md')) */
// Verifico si la ruta existe
const existPath = (route) => fs.existsSync(route);

/* console.log(existPath('C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\README.md'));
console.log(existPath('C:\\Users\\N15\\LIM014-mdlinks\\README.md')); */
console.log(existPath(pathRoute));

// Es ruta absoluta?
const absolutePath = (route) => path.isAbsolute(route);
console.log(absolutePath(pathRoute));

// Convierto relativa a absoluta
const convertToAbsolute = (route) => path.resolve(route);
console.log(convertToAbsolute(pathRoute));

// Leo el archivo o directorio
const readFile = (route) => fs.readFileSync((route),
  { encoding: 'utf8', flag: 'r' });
console.log(readFile(pathRoute));

/* const stats = () => fs.statSync(pathRoute);
console.log(`is file? ${stats.isFile()}`); */

const stats = (route) => fs.statSync(route).isFile();
console.log(stats(pathRoute));

const stats1 = (route) => fs.statSync(route).isDirectory();
console.log(stats1(pathRoute));
/* console.log(`Path is directory? ${stats.isDirectory()}`);

const readDir = (route) => fs.readdirSync(route);
console.log(readDir(pathRoute)); */
