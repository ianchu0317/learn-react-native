# Variables y Tipos de datos

## Ejercicios

### Ejercicio 01
**Enunciado**
Declara una variable nombre con tu nombre y otra edad con tu edad. 
Concaténalas en un string: `"Me llamo [nombre] y tengo [edad] años"`.

**salida**
```js
"Me llamo Ana y tengo 25 años"
```

### Ejercicio 2
Convierte el string "123.45" a número decimal y el número 42 a string.

```js
console.log(typeof numeroDecimal); // "number"
console.log(typeof numeroComoString); // "string"
```

### Ejercicio 3
Usa template literals para crear un string que diga: 
"El dispositivo [nombre] tiene la IP [ip]" 
(valores: nombre = "Router", ip = "192.168.1.1").


### Ejercicio 4
Crea una variable `esActivo` con el valor booleano `true` y conviértela a string.
```js
console.log(typeof esActivoString); // "string"
```

### Ejercicio 5
Declara una constante PI con valor 3.1416 y una variable radio con valor 5. 
Calcula el área de un círculo `(PI * radio²)`.

---
## Apuntes

### Concatenar  
Al parecer se puede concatenar string con int
```js
let myString = "Hola soy gay " + 46;   // "Hola soy gay 46" 
```


### Conversión de datos
- String() -> convertir en string
- Number() -> convertir a numero
- ParseInt() -> convertir str a numero
- ParseFloat() -> convertir str a decimal

### Template literals
Es como `f"string {var}"` en Python
```js
console.log(`string ${var1 + var2}`)
```

### Redondear decimales
Para redondear decimales se utiliza una libreria aparte

```
Math.Round(num, 2);
```
o con 
```
num.toFixed(2);
```
