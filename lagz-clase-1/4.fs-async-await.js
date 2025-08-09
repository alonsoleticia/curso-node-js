// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const { readFile } = require('node:fs/promises')


// Necesito envolver el código en algo que sea 'async' para poder usar el await cuando uso los CommonJS en vez de ES Modules. Por eso creo la función alrededor de mi código. De una forma más elegante, puedo hacer la IIFE, que es una función auto-invocada. Es exactamente lo mismo, pero con menos código. El ; que se añade al principio es porque no se lo he puesto al require de arriba. Si no hay ; no se entiende y va a dar un error.

async function init () {
  console.log('Leyendo el primer archivo...')
  const text = await readFile('./archivo.txt', 'utf-8')
  console.log('primer texto:', text)
  console.log('--> Hacer cosas mientras lee el archivo...')
  
  console.log('Leyendo el segundo archivo...')
  const secondText = await readFile('./archivo2.txt', 'utf-8')
  console.log('segundo texto:', secondText)    
}

init()

// IIFE - Inmediatly Invoked Function Expression
// ;(
//   async () => {
//     console.log('Leyendo el primer archivo...')
//     const text = await readFile('./archivo.txt', 'utf-8')
//     console.log('primer texto:', text)
//     console.log('--> Hacer cosas mientras lee el archivo...')
    
//     console.log('Leyendo el segundo archivo...')
//     const secondText = await readFile('./archivo2.txt', 'utf-8')
//     console.log('segundo texto:', secondText)    
//   }
// )()

