const archivo = {
    demand: true,
    alias: "f",
    desc: "Archivo CSV con datos a procesar",
};
const pais = {
    alias: "c",
    default: "ECU",
    desc: "Código del país que se requiere información",
};
const anio = {
    alias: "y",
    default: "1960",
    desc: "Año que del que se busca información",
};
const argv = require("yargs")
    .command("mostrar", "Imprime en pantalla el resultado de la búsqueda", {
        archivo,
        anio,
        pais,

    })
    .command("guardar", "Genera un archivo con el resultado de la búsqueda", {
        archivo,
        anio,
        pais,

        // out,
    }).argv;
module.exports = {
    argv,
};
//cambio