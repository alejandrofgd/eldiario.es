/*** 
Ejercicio 6:
Implementar un método que permita acceder de forma segura a propiedades de un objeto, incluso cuando dichas propiedades no existen.

La función debe admitir tres parámetros: 
el objeto al que se va a acceder
el valor por defecto que va a devolver la función en caso de que la propiedad no exista dentro del objeto
y por último, un string indicando el path de la propiedad a consultar.

El path delimitará el camino en el cual se encuentra la propiedad a consultar. Los distintos niveles de profundidad se delimitaran con puntos.
Además este último parámetro es opcional. En caso de no proveerse, la función devolverá otra función que esperará ser invocada con el path de la propiedad como argumento.
***/

const obj = { p1: {
                    p2: {
                        p3: false
                    }
                }
            }

function get (obj, defaultValue, path = undefined) {

    // Si no hay path definido devolvemos que espera el argumento path
    if (!path) 
        return function(path) {   
            return get(obj, defaultValue, path)
        }
    
    let parts = path.split('.')

    if (obj[parts[0]] !== undefined) 
        currentProperty = obj[parts[0]]
    else 
        return defaultValue

    let res
    for (var i = 1; i < parts.length; i++) {
        if (currentProperty[parts[i]] !== undefined) {
            currentProperty = currentProperty[parts[i]]
            if (i == parts.length - 1) {
                res = currentProperty
            }
        } else {
            return defaultValue
        }
        
    }
    if (res !== undefined) 
        return res  
    else 
        return defaultValue
}

// Llamada con path definido
console.log(get(obj, null, 'p1.p2.p3'))

// Si no hay path definido
const accessorNoPath = get(obj, null)
// Llamada a la nueva función creada al no haber path definido
console.log(accessorNoPath('p1.p2.p3'))