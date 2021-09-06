const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(argv)

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
    .catch(err => console.log(err));



//OBTENIENDO ARGUMENTOS DE LA CONSOLA
// const base = 2;

// console.log(process.argv)

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = '5'] = arg3.split('=');