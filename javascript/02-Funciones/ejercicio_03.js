// crear funcion mayor de edad

function esMayorDeEdad(edad){
    esMayor = false;

    if (edad >= 18) {
        esMayor = true;
    }
    
    return esMayor;
}

console.log("17 años es mayor de edad? ", esMayorDeEdad(17));
