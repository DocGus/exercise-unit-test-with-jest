// esta es mi función que suma dos números
const sum = function(a, b) {
    return a + b;
};
    // declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // convertimos el valor a yenes
    let valueInYen = valueInDollar * 4.2;
    // retornamos el valor
    return valueInYen;
};

const fromYenToPound = function(valueInYen) {
    // convertimos el valor a libras
    let valueInPound = valueInYen * 4.2;
    // retornamos el valor
    return valueInPound;
};

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

// solo un registro en consola para nosotros.

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };