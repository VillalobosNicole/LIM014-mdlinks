
const process = require('process');
const { mdLinks } = require ( './mdlinks.js');
const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
const path = process.argv[2];


mdLinks(path, {validate : false}).then((res) => {
    res.forEach(element => {
        console.log((chalk.cyan)`${element.href}` ,
         (chalk.yellow)`${element.text}`,
        (chalk.magenta)`${element.file}` )
    });
})

const total = () => {
    
}



