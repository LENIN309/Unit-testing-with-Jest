// importo la funcion desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')

test("One euro should be 1.2 dollars", function(){

    let dollars = fromEuroToDollar(3.5, 1.2);

// hago mi comparacion (la prueba)
expect(dollars).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})



test("One dollar should be 127.9 Yen", function(){

    let yen = fromDollarToYen(2, 127.9);

// hago mi comparacion (la prueba)
expect(yen).toBe(255.8); //1 Dolar son 127.9 Yen,  entonces 2 dolares deberian ser = (2 * 127.9)
})




test("One yen should be 0.8 pound", function(){

let pound = fromYenToPound(2, 0.8)
// hago mi comparacion (la prueba)
expect(pound).toBe(1.6); //1 Yen son 0.8 Pound,  entonces 2 Yens deberian ser = (2 * 0.8)
})




 



