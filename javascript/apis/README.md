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
