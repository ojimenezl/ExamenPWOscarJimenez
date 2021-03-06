const fs = require("fs"); // filesystem
//const srv = require("../vista/servidor");
const est = require("./buscar");
//const pag = require("./config/lista");
let tareaPorHAcer = [];
var dir = './resultados';

const publicar = (file, year, country) => {
    est.getE(file, year, country).then(v => (v)).catch(msg => console.log(msg.message));
};
const guardar = (file, year, country) => {
    est.getE(file, year, country).then(v => escribirjson(year, country, v)).catch(msg => console.log(msg.message));

};
//Guardando en json
const escribirjson = (year, country, vect) => {
    let data = (vect);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
    fs.writeFile(`./resultados/${country}-${year}.txt`, data, (err) => {
        if (err) {
            throw new Error("No se pudo grabar", err);
        } else {
            console.log(`\nEl archivo se a guardado exitodamente:/resultados ${country}-${year}`.magenta);
        }
    });


};

module.exports = {
    guardar,
    publicar
}