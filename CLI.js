#!/usr/bin/env node

const { mdLinks } = require ( './mdlinks.js');
const chalk = require('chalk');
const path = process.argv[2];
const { stats } = require('./statistics');


let config = {};
const getConfig = (command)=>{
    let result;
    switch(command){
        case '--validate':
            result = { validate: true}
        break;
        case '--stats':
            result = { stats: true}
        break;
        default:
            result = null;

    }
    return result;
}


if(process.argv.length >= 4){
    let configResult3  = getConfig(process.argv[3]);
    if(configResult3 == null){
        console.log('Argumento invalido');
        return;
    }
    config =  configResult3; // {validate : true}
}
if(process.argv.length >= 5){
    let configResult4  = getConfig(process.argv[4]);
    if(configResult4 == null){
        console.log('Argumento inválido');
        return;
    }
    config = Object.assign(config, configResult4); // {validate:true} - {stats:true}  => { validate: true, stats :true}
}

console.log(config);


if(true){
    mdLinks(path, config).then((res) => {
// console.log(res)
       if(config.stats){
        let result = stats(config.validate, res);
        console.log('Total :', result.total);
        console.log('Unique :', result.unique);
        if(config.validate){
        console.log('Broken : ', result.broken);
        }
       }else {
        if(config.validate){
            res.forEach(element => {
                console.log((chalk.cyan)`${element.href}` ,
                 (chalk.yellow)`${element.text}`,
                (chalk.magenta)`${element.file}`,
                (chalk.green)`${element.status}`,
                (chalk.red)`${element.statusText}` )
            });
        }else {
            res.forEach(element => {
                console.log((chalk.cyan)` ${element.href}` ,
                 (chalk.yellow)`${element.text}`,
                (chalk.magenta)`${element.file}` )
            });
        }
       }
       
 
    })
}
else if(directorio){

}
else {
    
}





