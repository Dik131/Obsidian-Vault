
### 🔹 **Handler**

**Обработчик события** — функция, вызываемая при наступлении события (например, нажатия кнопки).  
**Пример:**

```js
const handlePress = () => {
  console.log("Button pressed!");
};
<Button onPress={handlePress} />
```

---

### 🔹 **Middleware**

Промежуточный слой для обработки данных **до** того, как они попадут в reducer или API. В React Native часто используется в контексте **Redux** или **навигации**.  
**Пример:** логгирование действий в Redux.

---

### 🔹 **Endpoint**

URL-адрес, по которому клиент (ваше приложение) обращается к серверу.  
**Пример:**

```js
fetch("https://api.example.com/user")
```

---

### 🔹 **Event Listener**

Слушатель события — функция, которая подписывается на события системы или элемента.  
**Пример:**

```js
useEffect(() => {
  const subscription = Keyboard.addListener("keyboardDidShow", () => {
    console.log("Клавиатура открыта");
  });

  return () => subscription.remove();
}, []);
```

---

### 🔹 **Emitter**

Объект, который **излучает события**, на которые можно подписаться (например, `EventEmitter` в React Native).  
**Пример:**

```js
const emitter = new EventEmitter();
emitter.emit("eventName", { data: 123 });
```

---

### 🔹 **Ref**

Ссылка на DOM-элемент или компонент, позволяющая напрямую обращаться к нему.  
**Пример:**

```js
const inputRef = useRef(null);
<TextInput ref={inputRef} />
```

---

### 🔹 **Props**

Свойства компонента, передаваемые **снаружи**.  
**Пример:**

```js
<MyButton title="Нажми меня" color="blue" />
```

---

### 🔹 **Callback**

Функция, переданная в компонент как prop и вызываемая **внутри** компонента.  
**Пример:**

```js
const onLogin = () => console.log("Логин!");
<LoginForm onSubmit={onLogin} />
```

---

### 🔹 **Component**

Переиспользуемая часть интерфейса. В React Native — это функции, возвращающие JSX.  
**Пример:**

```js
const MyComponent = () => (
  <View><Text>Hello</Text></View>
);
```

---

### 🔹 **State**

Локальное состояние компонента. Используется для хранения текущих данных.  
**Пример:**

```js
const [count, setCount] = useState(0);
```

---

### 🔹 **Effect**

Побочный эффект — код, который запускается при изменении состояния, загрузке компонента и т.д.  
**Пример:**

```js
useEffect(() => {
  console.log("Компонент смонтирован или обновился");
}, [count]);
```

---

### 🔹 **Layout**

Расположение компонентов на экране. Управляется стилями (`Flexbox`, `position`, `margin`, и т.п.).  
**Пример:**

```js
<View style={{ flexDirection: 'row', justifyContent: 'space-between' }} />
```

---

### 🔹 **Hook**

Функции, позволяющие использовать возможности React (state, effect и др.) в функциональных компонентах.  
**Пример:** `useState`, `useEffect`, `useRef`, `useCallback` и т.д.

---

### 🔹 **Reducer**

Функция, обрабатывающая действия и обновляющая состояние. Используется в `useReducer` или `Redux`.  
**Пример:**

```js
function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    default: return state;
  }
}
```

---

### 🔹 **Virtual DOM**

Абстрактное представление DOM-дерева, хранящееся в памяти. React сравнивает старый и новый виртуальный DOM и обновляет **только изменившиеся части** экрана.
**В React Native DOM нет**, но термин встречается в документации React. В RN вместо этого используется **native UI tree**.

---

### 🔹 **Context**

Механизм для передачи данных (темы, язык, настройки) через дерево компонентов **без пропсов**.  
**Пример:**

```js
const ThemeContext = createContext("light");
<ThemeContext.Provider value="dark"><App /></ThemeContext.Provider>
```

---

### 🔹 **Controller**

В React Native сам термин используется редко напрямую, но может означать:

- Логику управления вводом (например, `react-hook-form` controllers),
    
- Или абстракции в MVC-архитектуре (например, отдельные модули, управляющие логикой вне компонентов).
    

---
