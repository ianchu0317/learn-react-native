# React Native

## Enlaces importantes
- Tutorial Expo: https://docs.expo.dev/tutorial/create-your-first-app/
- Tutorial componentes básicos React Native: https://reactnative.dev/
- Video Tutorial Youtube: https://www.youtube.com/watch?v=f8Z9JyB2EIE&ab_channel=JavaScriptMastery

---

## Ejercicios de integración

### Búsqueda de Usuarios con Input
**API**: [Random User](https://randomuser.me/api/)

**Componentes**: `TextInput`, `Button`, `FlatList`

**Tarea**:
- Crea un input para ingresar un número (ej: 5).
- Al presionar un botón, busca esa cantidad de usuarios y muéstralos en una lista.
- Cada fila debe mostrar: `"Nombre: [first] [last] | País: [country]"`.

```js
// Ejemplo de estructura:
const [users, setUsers] = useState([]);
const [inputValue, setInputValue] = useState('');

const fetchUsers = async () => {
  const res = await fetch(`https://randomuser.me/api/?results=${inputValue}`);
  const data = await res.json();
  setUsers(data.results);
};
```



### Generador de Frases de Gatos
**API**: [Cat Fact](https://catfact.ninja/fact)

**Componentes**: `Text`, `Button`, `ActivityIndicator`

**Tarea**:
- Muestra un dato aleatorio de gatos al cargar la pantalla.
- Añade un botón "Nuevo dato" que recargue la API.
- Usa `ActivityIndicator` mientras se carga el dato.

```js
const [fact, setFact] = useState('');
const [loading, setLoading] = useState(false);

const fetchFact = async () => {
  setLoading(true);
  const res = await fetch('https://catfact.ninja/fact');
  const data = await res.json();
  setFact(data.fact);
  setLoading(false);
};
```


### Lista de Tareas con API Falsa
**API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos)
**Componentes**: `FlatList`, `TouchableOpacity` (para marcar tareas)

**Tarea**:
- Obtén 10 tareas y muéstralas en una lista.
- Añade un botón para marcar tareas como completadas (cambia el estilo).
