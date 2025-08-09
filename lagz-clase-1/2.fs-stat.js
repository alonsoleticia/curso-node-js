// Aplicación para analizar el sistema de archivos:

const fs = require('node:fs') // a partir de Node 16, se recomienda poner el node:

// Primer análisis: SÍNCRONO
const stats =  fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size, // tamaño en bytes
    
)