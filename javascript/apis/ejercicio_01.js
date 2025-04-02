
/*
async function getData(){
    try{
        let response = await fetch('https://bored-api.appbrewery.com/random');
        const json = await response.json()
        console.log(json);
    } catch(error){
        console.log(error);
    }
}
getData();
*/

const axios = require('axios');
const url = 'https://bored-api.appbrewery.com/random';


axios.get(url)
    .then((response) => {
        let participants = response.data.participants;
        let activityType = response.data.type;
        let activity = response.data.activity;

        // debug data
        console.log("DATA IS ", response.data);
        
        // consigna
        if (participants > 1 || activityType == "education"){
            console.log(`No te recomiendo [${activity}] (Demasiado aburrido/Complicado)`);
        } else {
            console.log(`Intenta esto: [${activity}]`);
        }
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Request finished !')
    });


