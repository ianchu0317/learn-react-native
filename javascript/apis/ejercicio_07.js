

/*
    PROCEDIMIENTO:
    1. Fetch 5 usuarios y dato de gato
    2. Filtrar usuarios femeninos
    3. Desestructurar datos
    4. Formar strings
    5. Console logs strings
*/


const axios = require('axios');

async function makeRandomArray(){
    const catUrl = 'https://catfact.ninja/fact';
    const userUrl = 'https://randomuser.me/api/';

    let myArray = [];
    
    try {
        // Obtener dato de gato
        const catResponse = await axios.get(catUrl);
        const catFact = catResponse.data.fact;

        // obtener datos de users
        //let userRequests = [];

        let userResponses = [];
        for (let i=1; i<=5; i++){
            try {
                const userResponse = await axios.get(userUrl); 
                userResponses.push(userResponse.data);
                console.log(userResponse.data);
                await delay(1000);
            } catch(error){
                console.error(error);
            }
            
        }
        
        //const userRequests = Array.from({ length: 5 }, () => axios.get(userUrl));
        //const userResponses = await Promise.all(userRequests);
        
        // armar array
        for (userIndx in userResponses){
            // desestructurar datos
            const user = userResponses[userIndx].data.results[0];
            // filtrar mujeres
            if (user.gender === 'female'){
                const myString = `${user.name.first} de ${user.location.country} dice: "${catFact.fact}"`;
                myArray.push(myString);
            }
        }

        // imprimir resultado
        console.log(myArray);
    } catch (error){
        console.error(error);
        throw error;
    }
}

makeRandomArray();