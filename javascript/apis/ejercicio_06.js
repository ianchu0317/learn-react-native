
// Obtener usuario y dato curioso de gato con Promise.all()

const axios = require('axios');


async function getDataFrom(url){
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error);
    }
}


const catRequestPromise = getDataFrom('https://catfact.ninja/fact');
const nameRequestPromise = getDataFrom('https://randomuser.me/api/');

Promise.all([catRequestPromise, nameRequestPromise])
    .then((responses) => {
        // desestructurar datos
        let catResponse = responses[0].data;
        let personResponse = responses[1].data.results[0];
        
        // organizar datos
        const personName = `${personResponse.name.first} ${personResponse.name.last}`; 
        const personCountry = personResponse.location.country;
        let catFact = catResponse.fact;

        // añadir ultima linea en dato de gato
        if (catFact.lenght >= 50){
            catFact += ' 🐱 (Dato largo)';
        } else {
            catFact += ' 🐱 (Dato corto)';
        }
        
        const myData = {nombre: personName, pais: personCountry, datoGato: catFact};

        console.log(myData);
    })
    .catch((error) => console.error(error));