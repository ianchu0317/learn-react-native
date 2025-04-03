// importar librerias
const axios = require('axios');

// url de api
const url = 'https://httpstat.us/';

// función de consigna
async function verificarStatus(code){
    const newUrl = url + String(code);
    try {
        let response = await axios.get(newUrl);
        //console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

// correr 
// let status = verificarStatus(200); status es una promesa
verificarStatus(200)
    .then(status => console.log(status))
    .catch(error => console.error(error));

//console.log(status);