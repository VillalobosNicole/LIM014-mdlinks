module.exports = () => {
  // ...
};
// Verifico si la ruta es absoluta
// const path = require('path');
// console.log(path)
// console.log(path.isAbsolute('index.js'));
// Convierto relativa a absoluta
// console.log(path.resolve('index.js'));

// Leo el archivo y compruebo si existe *síncrono****
/* fs.promises.readFile('./text.md')
  .then((result) => {
    console.log(`${result}`);
  })
  .catch((error) => {
    console.log(error);
  }); */

// es file?
/* const stats = fs.statSync('C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\README.md');
console.log(`is file? ${stats.isFile()}`); */

// es directorio?
/* const stats2 = fs.statSync('C:\\Users\\N15\\Desktop\\Laboratoria');
console.log(`is directory? ${stats2.isDirectory()}`); */

// me lee el directorio devolviendo un array

/* const readDir = fs.readdirSync('C:\\Users\\N15\\Desktop\\Laboratoria');
console.log(readDir); */

// leo el directorio de trabajo actual
/* fs.promises.readdir(process.cwd())

// Si la promesa se resuelve y  se obtienen los datos
  .then(filenames => {
    for (const filename of filenames) {
      console.log(filename)
    }
  })

// si la promesa es rechazada
  .catch(err => {
    console.log(err)
  }) */
