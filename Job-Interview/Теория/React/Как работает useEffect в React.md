![[useEffect_hook_description.png]]
# useEffect в React и React Native

`useEffect` — это хук (hook) в React и React Native, предназначенный для выполнения побочных эффектов в функциональных компонентах. Он заменяет методы жизненного цикла классовых компонентов (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

---

## Как работает `useEffect`?
- **Синтаксис**: 
```javascript
  useEffect(() => {
    // Побочный эффект
    return () => { /* Очистка эффекта */ };
  }, [dependencies]);
```

- **Параметры**:
    
    1. Функция с побочным эффектом.
        
    2. Массив зависимостей (опционально). Эффект выполняется только при изменении значений в этом массиве.
        
- **Поведение**:
    
    - Если зависимости **не указаны**, эффект выполняется после каждого рендера.
        
    - Если зависимости **указаны**, эффект запускается при первом рендере и при изменении зависимостей.
        
    - Если массив **пустой**, эффект выполняется только один раз (аналог `componentDidMount`).
        

---

## Для чего используется?

1. **Запросы к API**: Загрузка данных при монтировании компонента.
    
2. **Подписки и таймеры**: Добавление/удаление слушателей событий.
    
3. **Работа с DOM**: Изменение элементов DOM (в React).
    
4. **Синхронизация с состоянием**: Обновление данных при изменении пропсов или состояния.
    

---

## Примеры

#### Пример 1: Загрузка данных (React)

```javascript
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []); // Пустой массив: запрос выполняется один раз

  return <div>{users.map(user => <p key={user.id}>{user.name}</p>)}</div>;
  }
```

#### Пример 2: Подписка на клавиатуру (React Native)

```javascript
import { useEffect } from 'react';
import { Keyboard } from 'react-native';

function KeyboardListener() {
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      console.log('Клавиатура открыта');
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      console.log('Клавиатура закрыта');
    });

    // Очистка подписок
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
}
```
#### Пример 3: Обновление заголовка (React Native Navigation)

```javascript
useEffect(() => {
  navigation.setOptions({ title: 'Новый заголовок' });
}, [navigation]); // Зависимость от navigation
```

## Очистка эффекта

Функция, возвращаемая внутри `useEffect`, вызывается при:

- Удалении компонента (аналог `componentWillUnmount`).
    
- Повторном выполнении эффекта (если зависимости изменились).
    

Пример с таймером:
```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Таймер работает');
  }, 1000);

  return () => clearInterval(timer); // Очистка таймера
}, []);
```

>- В **React Native** `useEffect` работает идентично React, но часто используется для нативных подписок (клавиатура, бекграунд-процессы).
  >  
>- Избегайте бесконечных циклов: не изменяйте состояние/пропсы внутри эффекта без зависимостей.