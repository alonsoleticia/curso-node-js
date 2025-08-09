// Aplicación que te da información sobre el sistema operativo:

const os = require('node:os')

console.log('Información del sistema operativo: ')
console.log('------------------------- ')

console.log('Nombre del sistema oeprativo: ', os.platform())
console.log('Versión del sistema oeprativo: ', os.release())
console.log('Arquitectura: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('Memoria libre: ', os.freemem() / 1024 / 1024) //MB
console.log('Memoria total: ', os.totalmem() / 1024 / 1024) //MB
console.log('Uptime: ', os.uptime() / 60 / 60 / 24) // days




