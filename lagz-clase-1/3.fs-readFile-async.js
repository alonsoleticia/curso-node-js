const fs = require('node:fs')

// Versión ASÍNCRONA: Node necesita saber cuándo se ha acabado de leer el archivo. Para eso, utilizamos los callbacks.
/*
    Ahora no hace falta asignar la lectura a la variable 'text' como antes. Al contrario, en el callback tenemos 2 variables, una de error y otra del texto leído. El callback se ejecuta cuando finaliza la acción a la que se ha añadido (lectura). Y cuando se ejecuta el callback, ahí decimos que loggee el texto
*/
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text)=> {
    console.log(text)
})


console.log('---> Hacer cosas mientras lee el archivo')
// Ahora, la línea anterior puede ejecutarse incluso aunque la lectura del primer archivo no se haya completado.

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text)=> {
    console.log(text)
})

