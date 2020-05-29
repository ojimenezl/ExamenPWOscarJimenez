const colors = require("colors");
const fs = require("fs");
const csv = require("csv-parser");
let tareaPorHAcer = [];

const lecturacsv = async(file) => {
    //let vector = [];
    const g = fs.createReadStream(file)
        .on("error", (err) => console.log(err)) // Abrir archivo
        .pipe(csv({ cast: true, delimiter: ';' }))
    for await (const row of g) {
        //console.log(g.length);
        for (let i = 4; i < 65; i++) {
            if (row[i] == "" || row[i] == " " || row[i] == "") {
                row[i] = "0";
            }
        }
        tareaPorHAcer.push(row);
    }

    return 'Se ha terminado de leer el archivo'.green;
};

let getE = async(file, year, country) => {
    let vectotal = []

    let doc = await lecturacsv(file);

    console.log(doc);
    let val = await validar(year, country);

    vectotal.push(await menores(file, year, country))


    return vectotal;

}

const validar = async(year, country) => {
    if (!Number(year)) {
        throw new Error(`año ${year} invalido`.red)
    }
    let i = 0;
    if (year < 1960 || year > 2019)
        throw new Error('Año no Encontrado'.red)
    for (i = 4; i < tareaPorHAcer.length; i++) {
        if (country === tareaPorHAcer[i][1]) { break; }
    }
    if (i == tareaPorHAcer.length)
        throw new Error('Codigo de Pais no encontrado'.red)

}

//Oscar Jiménez
const menores = async(file, year, country) => {
    // cargarDB()
    var sub = 0;
    var top = [];
    var colum = [];
    var resul = [];
    var consul = `${country} - ${year}`;
    var newArray = new Array();
    let vectorparajason = [];
    let doc = lecturacsv(file);
    for (let i = 1; i < 65; i++) {

        if (tareaPorHAcer[3][i] === year.toString()) {
            for (let j = 3; j < tareaPorHAcer.length; j++) {
                colum.push(parseInt(tareaPorHAcer[j][i]));
                if (tareaPorHAcer[j][1] == country) {
                    sub = tareaPorHAcer[j][i];


                }
            }
        }
    }

    console.log(`\nDatos:	Personas que usan Internet (% de la población)`.green);
    console.log(`País:${country}`.yellow);
    console.log(`Año:${year}`.yellow);
    console.log(`valor:${sub}`.yellow);
    console.log("");
    let datos = `\nDatos:	Personas que usan Internet (% de la población)`
    let ps = `País:${country}`
    let ycr = `Año:${year}`
    let valorm = `valor:${sub}`
    vectorparajason.push(datos, ps, ycr, valorm)

    //console.log(resul);
    return vectorparajason;
};

module.exports = {
    getE
}