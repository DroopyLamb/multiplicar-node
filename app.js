const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');

let comando = argv._[0];
console.log(argv);
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log(argv.base, argv.limite);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${argv.base }`.rainbow))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
/* 
let parametro = process.argv[2];
console.log(parametro);
let base = parametro.split("=")[1];
console.log(base); */
/* console.log('base: ' + argv.base);
console.log('limite: ' + argv.limite); */