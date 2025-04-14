
## 🔹 Пример менеджера состояний в React **без сторонних библиотек**

В React уже есть встроенные инструменты для управления состоянием, такие как `useState`, `useReducer`, `useContext`.

Вот пример простого менеджера состояний с использованием `useContext` и `useReducer`:

```tsx
// CounterContext.tsx
import React, { createContext, useReducer, useContext } from 'react';

type State = { count: number };
type Action = { type: 'increment' | 'decrement' };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const CounterContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
```

И используем:

```tsx
// App.tsx
import React from 'react';
import { CounterProvider, useCounter } from './CounterContext';

const Counter = () => {
  const { state, dispatch } = useCounter();
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
};

export default function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
```

---

## 🔹 Чем сторонние менеджеры состояний (Zustand, Redux) упрощают разработку?

1. **Глобальное состояние "из коробки"**  
    Не нужно вручную писать `Context + Provider`, как в примере выше.
    
2. **Меньше шаблонного кода**  
    Zustand, Jotai, etc. позволяют писать меньше "болтливого" кода.
    
3. **Инструменты отладки**  
    Redux DevTools, DevTools для Zustand — очень удобно отслеживать состояние, действия и их историю.
    
4. **Поддержка асинхронности и middleware**  
    Redux и Zustand можно расширять, например, добавлять логирование, отмену запросов, дебаунсы.
    
5. **Оптимизация ререндеров**  
    Zustand и Jotai оптимизируют перерендеры по подписке только на нужные части состояния.
    

---

## 🔹 Когда стоит использовать сторонние менеджеры?

✅ Использовать, когда:

- У тебя **среднее или большое приложение**, где состояние делится между многими компонентами.
    
- Нужно **удобно отлаживать** и **масштабировать** состояние.
    
- Требуется **синхронизация между страницами/модулями**.
    
- Нужно **централизованное хранилище** с возможностью работы вне компонентов (например, для WebSocket, Background tasks, и т.п.).
    

🚫 Не использовать, если:

- У тебя **небольшое приложение**, и `useState`/`useContext` решают задачу.
    
- Глобальное состояние **почти не нужно**.
    

---

## 🔹 Как работает `useState`?

^f6be7c

`useState` — это **хук React**, который позволяет **добавить локальное состояние** в функциональный компонент.

```tsx
const [count, setCount] = useState(0);
```

- `count` — текущее значение состояния.
    
- `setCount` — функция для обновления.
    
- React автоматически перерисует компонент при вызове `setCount`.
    

⚙️ Под капотом: React сохраняет состояние в специальной структуре (`Hooks state`) и отслеживает его между рендерами.

---

## 🔹 Как работает `useReducer`?

`useReducer` — это альтернатива `useState` для **более сложной логики** обновления состояния.

```tsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state` — текущее состояние.
    
- `dispatch(action)` — функция для отправки действия.
    
- `reducer(state, action)` — функция, которая описывает, как меняется состояние.
    

Пример:

```tsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};
```

📌 Полезно, когда:

- Много состояний связаны между собой.
    
- Нужно передавать `dispatch` глубоко в дерево.
    
- Хочешь использовать **паттерн Flux/Redux** без Redux.
    

---
