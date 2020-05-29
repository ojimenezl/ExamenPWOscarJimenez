const argv = require('./config/yargs').argv;
const control = require('./buscador/control')
let comando = argv._[0];
//Oscar
switch (comando) {
    case 'mostrar':
        control.publicar(argv.archivo, argv.anio, argv.pais)

        break;
    case 'guardar':

        control.guardar(argv.archivo, argv.anio, argv.pais);
        break;
    default:
        console.log('Comando no reconocido');
}