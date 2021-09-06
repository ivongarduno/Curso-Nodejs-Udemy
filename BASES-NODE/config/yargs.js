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
            describe: 'Muestra la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Hasta que número multiplica la base'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un número'
        } else if (isNaN(argv.h)) {
            throw 'hasta tiene que ser un número'
        }
        return true
    })
    .argv

module.exports = argv;