const { boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
    .option({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            demandOption: false
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un número'
        }
        return true
    })
    .argv

console.clear();


console.log(argv)
// const base = 2;

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
    .catch(err => console.log(err))



//OBTENIENDO ARGUMENTOS DE LA CONSOLA
// console.log(process.argv)
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = '5'] = arg3.split('=');