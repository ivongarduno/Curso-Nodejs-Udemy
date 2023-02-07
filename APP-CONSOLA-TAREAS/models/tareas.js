// el ._ hace privada la propiedad listado

const Tarea = require("./tarea");

class Tareas{
    _listado = {}; //no es obligatorio declarar aqui las propiedades

    get listadoArr(){
        const listado=[];
        // arma el array con todas las tareas, tomando la llave de cada objeto para encontrarlo
        Object.keys(this._listado).forEach(key => listado.push(this._listado[key]))

        return listado;
    }

    constructor(){
        this._listado = {}; //propiedades de la instancia
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }
}

module.exports = Tareas;