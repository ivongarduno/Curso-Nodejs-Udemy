require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')


const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    do {
        // Imprimir el menú
        opt = await inquirerMenu();
        // console.log(opt)

        switch (opt) {
            case '1': 
            // pide la descripción de la tarea y crea la tarea
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.listadoArr)
                break
        }

        await pausa();
    } while (opt !== '0')
    // pausa();

};

main();