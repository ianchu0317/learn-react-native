/*
API: HTTPStat.us
Tarea:

Genera un código HTTP aleatorio entre estos: [200, 400, 404, 500].

Llama a la API con ese código y usa async/await para:

Si el código es 200, retorna "✅ Éxito".

Si es 400 o 404, retorna "⚠️ Error del cliente".

Si es 500, retorna "🔥 Error del servidor".
*/

// importar libreria
const axios = require('axios')

const httpCodes = [200, 400, 404, 500];
/* NO FUNCIONA CREO
function makeRequest(statusCode) {
    const apiUrl = 'https://httpstat.us/' + String(statusCode);
    console.log(apiUrl);
    
    axios.get(apiUrl)
        .then((request) => {
            //console.log(request.data);    
            //let return_msg = '✅ Éxito';
            return '✅ Éxito';
        })
        .catch((error) => {
            if (error.status == 400 || error.status == 404){
                //let return_msg = '⚠️ Error del cliente';
                return '⚠️ Error del cliente';
            } else if (error.status == 500) {
                //let return_msg = '🔥 Error del servidor';
                return '🔥 Error del servidor';
            } 
        });

    //return return_msg;
}
*/

async function makeRequest(statusCode){
    const apiUrl = 'https://httpstat.us/' + String(statusCode);
    console.log(apiUrl);

    try {
        const response = await axios.get(apiUrl);
        return '✅ Éxito';
    } catch (error) {
        if (error.response && (error.response.status === 400 || error.response.status === 404)){
            return '⚠️ Error del cliente';
        } else if (error.response.status == 500) {
            return '🔥 Error del servidor';
        }
    }
}
/* NO SE SI FFUNCIONA
(async () => {
    let msg = await getRequest(myCode);
    console.log(msg);
})();
*/
/* FUNCIONA
async function makeRequest(statusCode) {
    const apiUrl = 'https://httpstat.us/' + String(statusCode);
    console.log(apiUrl);
    
    try {
        const response = await axios.get(apiUrl);
        return '✅ Éxito';
    } catch (error) {
        if (error.response && (error.response.status === 400 || error.response.status === 404)) {
            return '⚠️ Error del cliente';
        } else if (error.response && error.response.status === 500) {
            return '🔥 Error del servidor';
        }
        return '❌ Error desconocido';
    }
}
*/
const myCode = httpCodes[Math.floor(Math.random() * httpCodes.length)];
/* FUNCIONA
(async () => {
    const resultado = await makeRequest(myCode);
    console.log(resultado);  // "⚠️ Error del cliente"
})();
*/

//getRequest(myCode).then((r) => console.log(r)).catch((e) => console.log(e));
//console.log(msg);
makeRequest(myCode)
    .then((response) => console.log(response))
    .catch((error) => {
        console.error(error)
});