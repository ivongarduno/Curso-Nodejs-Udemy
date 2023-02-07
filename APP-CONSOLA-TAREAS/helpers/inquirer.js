const inquirer = require('inquirer')
require('colors')

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
        { value: '1', name: `${'1'.magenta} Crear tarea` },
        { value: '2', name: `${'2'.magenta} Listar tareas` },
        { value: '3', name: `${'3'.magenta} Listar tareas completadas` },
        { value: '4', name: `${'4'.magenta} Listar tareas pendientes` },
        { value: '5', name: `${'5'.magenta} Completar tarea(s)` },
        { value: '6', name: `${'6'.magenta} Borrar tarea` },
        { value: '0', name: `${'0'.magenta} Salir` }
    ]
}];

const inquirerMenu = async () => {
    // console.clear()
    console.log('========================'.magenta);
    console.log(' Seleccione una opción'.white)
    console.log('========================'.magenta);

    // retorna un objeto con la opción seleccionada
    // el nombre de la propiedad es el que nosotros asignamos en la linea 6
    const { opcion } = await inquirer.prompt(preguntas)

    return opcion;
}

const pausa = async () => {
    const inputContinuar = {
        type: 'input', name: 'pausa', message: `Presione ${'enter'.green} para continuar`
    }
    console.log('\n')
    const { pausa } = await inquirer.prompt(inputContinuar)
    return pausa;
}

const leerInput = async(message)=>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}