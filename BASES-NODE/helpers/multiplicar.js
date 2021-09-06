const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {

    try {
        let salida = '', consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} ${i === hasta ? '' : '\n'}`;
            consola += `${base}${' x '.red}${i} ${' = '.red}${base * i}\n`;
        }

        if (listar) {
            console.log('========================='.magenta);
            console.log('   TABLA DEL : ', colors.yellow(base));
            console.log('========================='.magenta);
            console.log(consola)
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