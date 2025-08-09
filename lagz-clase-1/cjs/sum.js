function sum(a, b){
    return a + b
}

// Forma original de exportación de módulos:
// module.exports = sum

// Forma mejorada de exportación de módulos -> CommonJS. Permite exportar varias funciones a la vez en un objeto. Luego se pueden importar las que se quieran.
module.exports = {
    sum
}



