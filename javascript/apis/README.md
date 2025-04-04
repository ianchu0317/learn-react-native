# APIs

## Ejercicio
### Ejercicio 01

Usa fetch para obtener una actividad aleatoria.

Si la actividad es de tipo "education" o requiere más de 1 participante, muestra:
"No te recomiendo: [actividad] (Demasiado aburrido/complicado)".

De lo contrario, muestra: "Intenta esto: [actividad]".

### Ejercicio 02
API: HTTPStat.us
Tarea:

Crea una función verificarStatus que reciba un código HTTP (ej: 200, 404).

Usa try/catch para manejar errores al llamar a https://httpstat.us/CODIGO.

Retorna un objeto con
```
{ 
  codigo: 200,
  significado: "OK",
  esExitoso: true 
}
```
**Chequear y practicar sincronización de código; cuándo utilizar promise y que la función no devuelva promise, sino el data**

### Ejercicio 03
API: Bored API
Tarea:

Crea un array con 3 tipos de actividades: ["social", "recreational", "education"].

Usa Promise.all() para obtener una actividad de cada tipo en paralelo.

Guarda los resultados en un array de objetos:
```
[
  { tipo: "social", actividad: "Have a picnic" },
  { tipo: "recreational", actividad: "Go hiking" }
]
```

### Ejercicio 04
API: HTTPStat.us
Tarea:

Genera un código HTTP aleatorio entre estos: [200, 400, 404, 500].

Llama a la API con ese código y usa async/await para:

Si el código es 200, retorna "✅ Éxito".

Si es 400 o 404, retorna "⚠️ Error del cliente".

Si es 500, retorna "🔥 Error del servidor".

### Ejercicio 05
API: Bored API
Tarea:

Obtén 5 actividades aleatorias (usa un bucle for o Promise.all).

Calcula:

El número promedio de participantes.

La actividad más costosa (mayor price).

Retorna un objeto con los resultados:
```
{
  promedioParticipantes: 2.4,
  actividadMasCara: "Learn to play the guitar"
}
```


### Ejercicio 06  "Generador de Datos de Usuario + Datos de Gatos"
#### Apis
- https://catfact.ninja/fact (para datos de gato)
- https://randomuser.me/api/ (para datos de persona)

#### Tarea
Obtén un usuario aleatorio y un dato curioso de gatos en paralelo usando Promise.all().
```js
{
  nombre: `${user.name.first} ${user.name.last}`,
  pais: user.location.country,
  datoGato: catFact.fact
}
```
Si el dato de gato tiene más de 50 caracteres, añade `"🐱 (Dato largo)"`, sino `"🐱 (Dato corto)"`

#### Salida
```js
{
  nombre: "María García",
  pais: "Spain",
  datoGato: "Los gatos pueden rotar sus orejas 180 grados. 🐱 (Dato corto)"
}
```


### Ejercicio 07
### Tarea

- Obtén 5 usuarios aleatorios y un dato de gato.

- Filtra solo los usuarios de género female (o male, si prefieres).

- Para cada usuaria filtrada, crea un string:

```js
`${user.name.first} de ${user.location.country} dice: "${catFact.fact}"`
```
- Guarda todos los strings en un array.

### Salida
```js
[
  "Ana de Spain dice: 'Los gatos tienen 5 dedos en las patas delanteras y 4 en las traseras.'",
  "Luisa de Brazil dice: 'Los gatos tienen 5 dedos en las patas delanteras y 4 en las traseras.'"
]
```


---

## Apuntes
- axios.get devuelve una promise
- promise.then (callback func) -> resuelve la promise
- promise.catch (callback func) -> atrapa los errores

sintaxis general axios
```js
axios.get(url)
    .then(callback)
    .catch( (error) => {})
    .finally();
```

sintaxis general fetch y axios dentro de async
```js
async function myFunc(){
    try{
        const resp = await axios.get(url);
    }    
   catch(error){
    console.log(error);
    
    } 
}
```
### Console error
- error en consola en vez de `console.log()` utilizar `console.error`
- las funciones async devuelven una promesa -> es necesario resolver promise -> se pueden resolver utilizando función sin nombre

### Hacer promises
```js
(async () => {
    const status = await verificarStatus(200);
    console.log(status);
})();  // <- Se ejecuta inmediatamente
```
- 
