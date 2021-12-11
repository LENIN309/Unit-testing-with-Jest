// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
   return valueInDollar;
}

module.exports = {  fromEuroToDollar }




// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDolar){
    // convertimos el valor a Yen
    let valueInYen = valueInDolar * 127.9;
    // retornamos el valor
    return valueInYen;
}

module.exports = {  fromDollarToYen }



// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenToPound = function(valueInYen){ 
    // convertimos el valor a Pound
    let valueInPound = valueInYen * 0.8;
     // retornamos el valor
     return valueInPound;
}

module.exports = {  fromYenToPound }































