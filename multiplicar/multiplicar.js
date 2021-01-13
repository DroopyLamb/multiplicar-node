const fs = require('fs');
let data = '';
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log("=========================".green);
    console.log(`TABLA DE ${base}`);
    console.log("=========================");

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    console.log(`base: ${ base }\n limite: ${ limite }`);
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido  ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`El archivo tabla-${ base }-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}