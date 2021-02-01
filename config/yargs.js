const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'crea un archivo txt con tabla de multiplicr, pasandole una base y un limite', opts)
    .help()
    .argv;

//exportamos el modulo para que sean utilizados por demas archivos
module.exports = {
    argv
}