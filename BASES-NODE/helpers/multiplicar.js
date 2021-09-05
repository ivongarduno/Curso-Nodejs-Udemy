const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (base = 1, listar = false) => {

    try {
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${' x '.red} ${i} ${' = '.red} ${base * i}\n`
        }

        if (listar) {
            console.log('========================='.magenta);
            console.log('   TABLA DEL : ', colors.yellow(base));
            console.log('========================='.magenta);
            console.log(salida)
        }

        await fs.writeFileSync(`tabla-${base}.txt`, salida);

        return colors.rainbow(`tabla-${base}.txt`)

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}