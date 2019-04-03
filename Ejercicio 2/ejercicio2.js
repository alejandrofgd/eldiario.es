/*** 
Ejercicio 2:
Implementa la función removeProperty la cual recibe un objeto (obj) y una propiedad (prop) y hace lo siguiente:
Si el objeto obj tiene la propiedad prop, la función borra la propiedad del object y devuelve true, en los demás casos devuelve false.
***/

const persona = {
    nombre: 'Roberto',
    edad: 24,
}

const property = 'edad'

function removeProperty(obj, prop) {
    var res = obj[prop]?(delete obj[prop],true):false
    return res
}

console.log(removeProperty(persona,property))