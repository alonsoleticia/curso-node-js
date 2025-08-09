// Aplicación que te da información sobre el sistema operativo:

import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo: ')
console.log('------------------------- ')

console.log('Nombre del sistema oeprativo: ', platform())
console.log('Versión del sistema oeprativo: ', release())
console.log('Arquitectura: ', arch())
console.log('CPUs: ', cpus())
console.log('Memoria libre: ', freemem() / 1024 / 1024) //MB
console.log('Memoria total: ', totalmem() / 1024 / 1024) //MB
console.log('Uptime: ', uptime() / 60 / 60 / 24) // days




