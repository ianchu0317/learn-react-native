# Objetos y Desestructuración 

## Ejercicios
### Ejercicio 1
Crea un objeto dispositivo con las propiedades `nombre = "Router"`, `mac = "00:11:22"`.

## Ejercicio 2
Desestructura el objeto `dispositivo = { nombre: "Switch", ip: "192.168.1.2" }` para extraer nombre e ip.

## Ejercicio 3
Combina los objetos `dispositivo1 = { nombre: "Router" }` y `dispositivo2 = { mac: "00:11:22" }`.
Salida
```js
{ nombre: "Router", mac: "00:11:22" }
```

## Ejercicio 4
Crea una función obtenerMAC que tome un objeto dispositivo (con propiedad mac) y retorne su MAC.
```js
console.log(obtenerMAC({ nombre: "Router", mac: "00:11:22" }));
// "00:11:22"
```


## EJercicio 5
Dado el objeto `config = { red: "192.168.1.0", dhcp: true }`, modifica dhcp a false.



## Apuntes
