const argv = require('yargs')
    .option({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Mustra la tabla en consola'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un número'
        }
        return true
    })
    .argv

module.exports = argv;