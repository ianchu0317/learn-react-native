
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
