const fs = require('node:fs/promises')

// Versión ASÍNCRONA: 
/*
    Esto es parecido a lo que se ha visto con los callbacks, pero utilizando promesas
*/
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8').then(
    text => console.log('primer texto: ', text)
)


console.log('---> Hacer cosas mientras lee el archivo')
// Ahora, la línea anterior puede ejecutarse incluso aunque la lectura del primer archivo no se haya completado.

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8').then(
    text => console.log('segundo texto: ', text)
)
