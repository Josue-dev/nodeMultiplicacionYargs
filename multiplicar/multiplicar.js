const { rejects } = require('assert');
var fs = require('fs');
const { resolve } = require('path');

let listarTabla = (base, limite) => {
    let contenido = '';
    for (let i = 1; i <= limite; i++) {
        let resultado = base * i;

        contenido += `${base} * ${i} = ${resultado}\n`;
        console.log(`${base} * ${i} = ${resultado}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`La ${base} y el ${limite} ingresados no son  numeros`);
            return;
        }
        let contenido = '';
        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;

            contenido += `${base} * ${i} = ${resultado}\n`

            console.log(`${base} * ${i} = ${resultado}`);
        };

        fs.writeFile(`tablas/tabla${base}-al-${limite}.txt`, `${contenido}`, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla${base}-al-${limite}.txt`)
                //console.log('El archivo a sido creado');
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}