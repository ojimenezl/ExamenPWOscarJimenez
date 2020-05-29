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

    return 'Se ha terminado de leer el archivo';
};

let getE = async(file, country, year) => {
    let vectotal = []

    let doc = await lecturacsv(file);
    //let colum = await columna07(file, year)
    console.log(doc);
    //console.log(await columna07(file, year, country));
    //console.log(menores(file, country, year));
    //console.log(tareaPorHAcer);
    // let val = await validar(country, year);
    vectotal.push(await menores(file, country, year))
        // let est = {
        //     MiVector: await columna07(file, year)
        //         // Menor_Mayor: await media(country, year),
        //         // Menores: await menores(country, year),
        //         // Mayores: await mayores(country, year),
        //         // top5: await topcinco(year)
        // };

    return vectotal;

}



//Oscar Jiménez
const menores = async(file, country, year) => {
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
    console.log(`País:${country}`.green);
    console.log(`Año:${year}`.green);
    console.log(`valor:${sub}`.red);
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