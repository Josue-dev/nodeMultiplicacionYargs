//modulo es un objeto global que esta disponible dentro de toda la app
//despues de let o const y siguen llaves seria una destructuracion
//split para separar elementos y convertir de un string a un arreglo

/**se crea el archivo con el numero  de la tabla en lo cual se le mandara un parametro atravez de la consola d bash
 * para poder generarlo con el metodo global PROCESS.ARGV
 */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('archivo creado ${archivo}'))
            .catch(e => console.log(e));
        break;
    default:
        console.log('NO ENCONTRADO');
}