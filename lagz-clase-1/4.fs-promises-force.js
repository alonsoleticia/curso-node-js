const fs = require('node:fs')

// Versión ASÍNCRONA: 
/*
    En el caso de que no pudiera importar el node:fs/promises, puedo utilizar el promisify, que transforma algo que no soporta promesas en algo que sí lo soporta. Esto solo tiene sentido cuando el módulo nativo no tiene promesas nativas!!!!!
*/


const {promisify} = require('node:util')

const  readFilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo...')
readFilePromise('./archivo.txt', 'utf-8').then(
    text => console.log('primer texto: ', text)
)


console.log('---> Hacer cosas mientras lee el archivo')
// Ahora, la línea anterior puede ejecutarse incluso aunque la lectura del primer archivo no se haya completado.

console.log('Leyendo el segundo archivo...')
readFilePromise('./archivo2.txt', 'utf-8').then(
    text => console.log('segundo texto: ', text)
)
