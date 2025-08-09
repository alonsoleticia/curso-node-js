// Con callbacks:

/* 
const fs = require('node:fs')

fs.readdir('.', (err, files) => {
    // En los callbacks, el error siempre es el primer parámetro!
    if (err){
        console.error('Error al leer el directorio: ', err)
        return
    }

    files.forEach(file => {
        console.log(file)
    })

}) 
*/


// Con promesas:

const fs = require('node:fs/promises')

fs.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err=> {
        console.error('Error al leer el directorio: ', err)
        return;

    })