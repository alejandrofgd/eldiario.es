/*** 
Ejercicio 5:
Implementar una función que dado un número entero, 
devuelva otro número formado por sus mismos dígitos ordenados descendentemente.
***/

function orderIntDigits(int) {
    
    // Creamos un array con el entero
    let numbers = int.toString().split('')
    let orderedString = ''
    // Ordenamos el array descendentemente
    numbers.sort(function(a, b) {
        return b - a;
    });    
    // Formamos la cadena orderedString recorriendo el array
    numbers.forEach(function(element) {
        orderedString += element
    });

    // Devolvemos la cadena transformada a entero
    return parseInt(orderedString)
}

// Hay una limitación: el máximo valor con precisión que Javascript puede representar es 9007199254740991.
// Incluso trabajando con librerías como big-integer no he conseguido una solución elegante puesto que
// se recomienda trabajar con strings en caso de valores mayores.

console.log(orderIntDigits(9007199254740991))