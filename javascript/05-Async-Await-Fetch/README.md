# Async/Await y Fetch 

## Ejercicios


### Ejercicio 1
Simula una función `fetchData` que retorne una promesa resuelta con el string `"Datos cargados"`.

### Ejercicio 2
Modifica fetchData para que rechace la promesa con "Error de conexión" si el parámetro fail es true.
```js
fetchData(true).catch(console.error);
```

### Ejercicio 3
Enunciado:
Crea una función getUser que use fetch para simular una llamada a una API (retorna Promise.resolve({ name: "Ana" })).
```
getUser().then(console.log);
```

### Ejercicio 4
Usa async/await para llamar a getUser y loguear el resultado.


### Ejercicio 5
Crea una función getDevice que simule una API y retorne { name: "Router", mac: "00:11:22" }. Usa async/await.


---
## Apuntes


