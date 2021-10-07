const inquirer = require('inquirer')
require('colors')

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
        { value: '1', name: '1. Crear tarea' },
        { value: '2', name: '2. Listar tareas' },
        { value: '3', name: '3. Listar tareas completadas' },
        { value: '4', name: '4. Listar tareas pendientes' },
        { value: '5', name: '5. Completar tarea(s)' },
        { value: '6', name: '6. Borrar tarea' },
        { value: '0', name: '0. Salir' }
    ]
}];

const inquirerMenu = async () => {
    // console.clear()
    console.log('========================'.magenta);
    console.log(' Seleccione una opción'.magenta)
    console.log('========================'.magenta);

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

module.exports = {
    inquirerMenu,
    pausa
}