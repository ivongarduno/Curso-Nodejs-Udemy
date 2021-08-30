const empleados = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Alma' },
    { id: 3, nombre: 'Karen' }
]

const sueldos = [
    { id: 1, sueldo: 1000 },
    { id: 2, sueldo: 1500 }
]

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;

        empleado
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`)
    })
};

const getSueldo = (id) => {
    return new Promise((resolve, reject) => {
        const sueldo = sueldos.find(s => s.id === id)?.sueldo;

        sueldo
            ? resolve(sueldo)
            : reject(`No existe el salario`)
    })
};

id = 4;

getEmpleado(id)
    .then(empleado => {
        getSueldo(id)
            .then(sueldo => console.log(`El empleado ${empleado} tiene un salario de ${sueldo}`))
            .catch(err => console.log(`${err} del empleado ${empleado}`))
    })
    .catch(err => console.log(err))

