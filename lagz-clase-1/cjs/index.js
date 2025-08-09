// Forma original de importación de módulos:
// const sum = require('./sum')

// Forma mejorada de importación de módulos -> CommonJS. Permite importar las que quieras, aunque se hayan eportado más. 
const { sum } = require('../sum')

console.log(sum(1,2))
