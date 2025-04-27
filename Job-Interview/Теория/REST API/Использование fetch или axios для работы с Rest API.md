

### 1. **Что такое REST API и RESTful**

- **REST** (Representational State Transfer) — это архитектурный стиль проектирования сетевых приложений.
    
- **REST API** — это интерфейс между клиентом и сервером, построенный по правилам REST.
    

**Ключевые принципы REST:**

- Использование стандартных HTTP методов:
    
    - `GET` — получить данные
        
    - `POST` — создать ресурс
        
    - `PUT` или `PATCH` — обновить ресурс
        
    - `DELETE` — удалить ресурс
        
- Четкая структура URL:
    
    - Например:  
        `/users` — получить список пользователей  
        `/users/1` — получить пользователя с id = 1
        
- Статус коды HTTP отражают результат:
    
    - `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`
        
- Ресурсы описываются через **существительные**, а не через действия:
    
    - **Плохо:** `/getAllUsers`
        
    - **Хорошо:** `/users`
        
- Сервисы должны быть **без состояния** (stateless) — каждый запрос самодостаточен.
    

**RESTful API** — это API, которое следует этим принципам полностью и правильно.

---

### 2. **Что такое `fetch` и `axios`**

Это библиотеки (точнее, `fetch` — встроенная функция в браузерах, а `axios` — сторонняя библиотека), которые позволяют делать HTTP-запросы к API.

#### `fetch`

- Встроенный в браузер API.
    
- Работает на **Promise**.
    
- Нужно самостоятельно обрабатывать ошибки и преобразование ответа.
    

Пример с `fetch`:

```javascript
fetch('https://api.example.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка сети');
    }
    return response.json(); // парсинг JSON
  })
  .then(data => {
    console.log(data); // работа с данными
  })
  .catch(error => {
    console.error('Ошибка запроса:', error);
  });
```

---

#### `axios`

- Нужно устанавливать отдельно (`npm install axios`).
    
- Упрощает многие вещи: автоматический парсинг JSON, удобная работа с ошибками, более богатые настройки.
    
- Можно использовать на сервере и в браузере.
    

Пример с `axios`:

```javascript
import axios from 'axios';

axios.get('https://api.example.com/users')
  .then(response => {
    console.log(response.data); // данные уже в нужном формате
  })
  .catch(error => {
    console.error('Ошибка запроса:', error);
  });
```

---

### 3. **Сравнение `fetch` и `axios` кратко**

|Особенность|fetch|axios|
|:--|:--|:--|
|Встроен или библиотека|Встроен в браузер|Требует установки|
|Поддержка старых браузеров|Ограниченная|Легче добавить полифилл|
|Обработка JSON|Нужно вызывать `response.json()`|Делает это сам автоматически|
|Обработка ошибок|Нужно проверять вручную `response.ok`|Обрабатывает 4xx и 5xx автоматически|
|Отмена запросов|Через `AbortController`|Через встроенную поддержку|
|Поддержка интерцепторов (ловить запросы/ответы)|Нет|Есть|
|Конфигурация базового URL и заголовков|Ручная|Удобная (`axios.create`)|


---

## 4. **POST запрос**

### fetch

```javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com',
  }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка сети');
    }
    return response.json();
  })
  .then(data => {
    console.log('Создан пользователь:', data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
```

---

### axios

```javascript
import axios from 'axios';

axios.post('https://api.example.com/users', {
  name: 'John',
  email: 'john@example.com',
})
  .then(response => {
    console.log('Создан пользователь:', response.data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
```

> Обрати внимание: в `axios` не нужно явно указывать `Content-Type: application/json` — он это делает сам, если тело запроса — объект.

---

## 5. **Авторизация с токеном**

Когда у тебя есть токен (например, JWT), его обычно отправляют в заголовках:

### fetch

```javascript
const token = 'your-token-here';

fetch('https://api.example.com/profile', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => console.log('Профиль:', data))
  .catch(error => console.error('Ошибка:', error));
```

---

### axios

```javascript
import axios from 'axios';

const token = 'your-token-here';

axios.get('https://api.example.com/profile', {
  headers: {
    Authorization: `Bearer ${token}`,
  }
})
  .then(response => console.log('Профиль:', response.data))
  .catch(error => console.error('Ошибка:', error));
```

---

## 6. **Отмена запроса**

Иногда нужно отменить запрос — например, пользователь ушел со страницы.

### fetch через `AbortController`

```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/long-request', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Запрос отменен');
    } else {
      console.error('Ошибка запроса:', error);
    }
  });

// где-то позже...
controller.abort();
```

---

### axios через `AbortController`

```javascript
import axios from 'axios';

const controller = new AbortController();

axios.get('https://api.example.com/long-request', {
  signal: controller.signal,
})
  .then(response => console.log(response.data))
  .catch(error => {
    if (axios.isCancel(error)) {
      console.log('Запрос отменен через axios');
    } else {
      console.error('Ошибка запроса:', error);
    }
  });

// где-то позже...
controller.abort();
```

> ⚡ Раньше в `axios` был свой механизм `CancelToken`, но начиная с версии 0.22+ они поддерживают стандартный `AbortController`, как и `fetch`.

---

## ✨ Быстрая шпаргалка:

- `fetch` — требует чуть больше кода, но всегда доступен.
    
- `axios` — меньше возни с заголовками, ошибками, удобные настройки по умолчанию.
    
- Для "больших проектов" часто предпочитают `axios`, для "быстрых тестов" — `fetch`.
    

---
