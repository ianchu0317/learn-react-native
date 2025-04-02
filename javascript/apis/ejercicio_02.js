// importar librerias
const axios = require('axios');

// url de api
const url = 'https://httpstat.us/';

// función de consigna
async function verificarStatus(code){
    const newUrl = url + String(code);
    try {
        response = await axios.get(newUrl);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

// correr 
let status = verificarStatus(200);

console.log(status);