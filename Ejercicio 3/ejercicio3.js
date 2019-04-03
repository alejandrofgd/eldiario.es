/*** 
Ejercicio 3:
Implementa la función formatDate que convierta la fecha introducida por el usuario formateada como M/D/AAAA a un formato requerido por una API (AAAAMMDD). 
El parámetro 'userDate' y el valor de retorno son strings.
Por ejemplo, debería convertir la fecha "11/26/2014" introducida por el usuario en "20141126" adecuada para la API.
***/

// He creado dos opciones, la primera con el objeto String y la segunda con el objeto Date
// Tiene más sentido la primera pero quería mostrar dos opciones en vez de solo una

function formatDate(userDate) {

    let splittedDate = userDate.split("/");
    let year = splittedDate[2]
    // Tenemos que comprobar si el mes o el día vienen con un solo dígito y, en ese caso, añadirle uno
    let day = splittedDate[1].length == 2?splittedDate[1]:'0' + splittedDate[1]
    let month = splittedDate[0].length == 2?splittedDate[0]:'0' + splittedDate[0]
    let formattedDate = year + month + day

    // Podríamos haber reducido mucho código simplemente no creando las variables
    // Está hecho así para que sea legible
    return formattedDate
  }

  function formatDateObject(userDate) {

    let dateObject = new Date(userDate)
    let dateYear = dateObject.getFullYear()
    // Tenemos que comprobar si el mes o el día vienen con un solo dígito y, en ese caso, añadirle uno
    // Hay que sumar 1 al mes porque getMonth() devuelve un array de 0 a 11
    let dateMonth = (dateObject.getMonth() + 1).toString().length == 2?(dateObject.getMonth() + 1).toString():'0' + (dateObject.getMonth() + 1)
    let dateDay = dateObject.getDate().toString().length == 2?dateObject.getDate():'0' + dateObject.getDate()
    
    // En este caso pasa lo contrario que en la anterior función, podríamos haber ampliado el código para que fuera más legible
    let formattedDate = dateYear + dateMonth + dateDay

    return formattedDate
  }

  console.log(formatDate('4/3/2014'));
  console.log(formatDateObject('4/3/2014'));
  