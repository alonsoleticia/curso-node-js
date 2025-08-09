// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

// Como aquí ya estoy usando ES Modules, no me hace falta utilizar la función autoinvocada y se me permite utilizar el await directamente.
// Con async-await se está haciendo de forma asíncrono-secuencial. Es decir, el proceso principal NO está bloqueado, se pueden hacer más cosas mientras se está leyendo cada archivo. Pero no se están leyendo los dos archivos a la vez. Primero se ejecuta una promesa y luego la otra. O sea, que hasta que no se acaba de leer el primer archivo, NO me va a salir el log de "Hacer cosas"; sin embargo, el proceso principal de Node no está bloqueado: si hubiera otro evento en el eventLoop, sí se tendría en cuenta.
import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)
console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)
