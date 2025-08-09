const fs = require('node:fs')

// Versión SÍNCRONA:
console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text)

console.log('Hacer cosas mientras lee el archivo')
// Realmente, no se pueden hacer cosas porque el sistema usado es síncrono. Así que hasta que no acabe de leer, esto no se va a ejecutar.

console.log('Leyendo el segundo archivo...')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(text2)

