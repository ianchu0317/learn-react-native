const axios = require('axios');

const typesActivities = ['social', 'recreational', 'education']
const url = 'https://bored-api.appbrewery.com/'

// hacer petición según actividad
async function getData(activity){
    const newUrl = url + `filter?type=${activity}`;
    try {
        response = axios.get(newUrl);
        return response;
    } catch (error) {
        console.error(error);
    }
}

// hacer los requests y devolver promise
let myPromises = [];
for (_activity in typesActivities) {
    myPromises.push(getData(typesActivities[_activity]));
}

/*
let myData = [];
Promise.all(myPromises).then( (responses) => {
    for (responseIndx in responses){
        let response = responses[responseIndx].data;
        myData.push({tipo: response.type, actividad: response.activity});
        console.log(response);
    }
});
*/

let myData = [];
Promise.all(myPromises)
    .then( responses  => {
        for (responseTypeIndx in responses){
            let responseByType = responses[responseTypeIndx];
            for (response in responseByType) {
                console.log(response);
            }
        }
    })
    .catch (error => console.log(error));

console.log(myData);