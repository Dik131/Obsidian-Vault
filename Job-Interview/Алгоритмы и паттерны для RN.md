
---

## **1. Структуры данных** (важны для алгоритмических задач)  
**Базовые:**  
- Массивы (и методы работы с ними)  
- Связные списки (Linked Lists)  
- Стек (Stack) и очередь (Queue)  
- Хеш-таблицы (Hash Tables / Objects / Maps)  
- Множества (Set)  

**Продвинутые (редко, но спрашивают):**  
- Деревья (Trees, Binary Trees)  
- Графы (Graphs)  
- Куча / Приоритетная очередь (Heap / Priority Queue)  

---

## **2. Алгоритмы**  
**Обязательно:**  
- Поиск (линейный, бинарный)  
- Сортировки (QuickSort, MergeSort, BubbleSort)  
- Обход деревьев (DFS, BFS)  
- Жадные алгоритмы (Greedy)  
- Двух указатели (Two Pointers)  
- Скользящее окно (Sliding Window)  
- Рекурсия и мемоизация  

**Полезно знать:**  
- Динамическое программирование (DP)  
- Алгоритмы на графах (Dijkstra, топологическая сортировка)  

---

## **3. Паттерны проектирования** (важны для архитектурных вопросов)  
**Frontend / React:**  
- Компонентный подход (Component-based architecture)  
- Состояние (State management: Redux, Zustand, Context API)  
- HOC (Higher-Order Components)  
- Render Props  
- Compound Components  
- Hooks (custom hooks)  

**Backend / Общие:**  
- Singleton  
- Фабрика (Factory)  
- Наблюдатель (Observer / Pub-Sub)  
- Декоратор (Decorator)  
- Dependency Injection  

**Для оптимизации:**  
- Оптимизация рендеринга (React.memo, useMemo, useCallback)  
- Ленивая загрузка (Lazy Loading)  
- Виртуализация списков  

---

## **4. Концепции (теория)**  
### **Frontend (React / Next.js)**  
- Virtual DOM vs Real DOM  
- Server-Side Rendering (SSR) vs Static Site Generation (SSG)  
- Hydration (в Next.js)  
- ISR (Incremental Static Regeneration)  
- React Fiber (как работает рендеринг)  
- Event Loop и асинхронность (Promise, async/await)  
- WebSockets (если работа с real-time)  

### **Backend (Node.js / Next.js API Routes)**  
- REST vs GraphQL  
- JWT-аутентификация  
- CORS, CSRF-защита  
- Работа с БД (ORM, raw SQL, MongoDB)  
- Кэширование (Redis)  
- Микросервисы vs Монолит  

### **React Native / Expo**  
- Нативные модули (если нужно)  
- Оптимизация производительности (FlatList, memo)  
- Обработка жестов  
- Оффлайн-режим (SQLite, AsyncStorage)  

---

## **5. Практические задачи**  
- Решать задачи на **LeetCode** (Easy/Medium)  
- Разбирать **системный дизайн** (как устроены популярные сервисы)  
- Практиковать **архитектурные вопросы** (например, "Как бы ты построил Twitter?")  

---

## ✅ 1. **Базовые знания CS и алгоритмы (обязательно)**

### 📦 Структуры данных

- Массив, Объект, Map/Set
    
- Стек и Очередь (реализация, примеры)
    
- Связный список (Linked List)
    
- Hash Table (коллизии, принципы)
    
- Деревья (особенно для понимания вложенных структур)
    
- Базовое понимание графов
    

### ⚙️ Алгоритмы

- Сортировки: пузырьковая, вставками, быстрая, встроенная `.sort()`
    
- Поиск: линейный, бинарный
    
- Рекурсия, хвостовая рекурсия
    
- Жадные алгоритмы и динамическое программирование
    
- JS: работа со строками, датами, массивами, асинхронность
    

---

## 🧠 2. **Понимание JavaScript/TypeScript и концепций**

- Hoisting, замыкания, область видимости
    
- Прототипы, `this`, bind/call/apply
    
- Асинхронность: Event Loop, очередь микрозадач
    
- Promise vs async/await
    
- Currying, memoization
    
- Разница между `null`, `undefined`, `NaN`
    
- TypeScript: дженерики, типы, интерфейсы, утилитные типы (`Pick`, `Partial`, `ReturnType`)
    

---

## ⚛️ 3. **React / React Native (Expo)**

- Жизненный цикл: `useEffect`, зависимости, очистка
    
- Hooks: `useState`, `useMemo`, `useCallback`, `useRef`, `useLayoutEffect`
    
- Контролируемые формы, валидация
    
- Zustand/Redux: сравнение, когда использовать
    
- Navigation (React Navigation), адаптация к платформам
    
- NativeModules, SQLite, push-уведомления
    

---

## 🌐 4. **Next.js и fullstack особенности**

- SSR / SSG / ISR / CSR — когда и что использовать
    
- App Router: `layout.tsx`, `loading.tsx`, `error.tsx`, `server components`
    
- `getServerSideProps` и `getStaticProps`
    
- API Routes vs tRPC
    
- Uploads, auth, middleware, edge functions
    

---

## 🚀 5. **tRPC — must know**

- Что такое tRPC и зачем он нужен (end-to-end типизация)
    
- Отличие от GraphQL и REST
    
- Концепции: `router`, `procedure`, `query`, `mutation`, middleware
    
- Context (например, текущий пользователь)
    
- SSR-совместимость
    
- Разделение роутеров (`mergeRouters`)
    
- Авторизация на уровне процедуры
    
- Интеграция с Next.js и React Native
    

---

## 🌐 6. **Socket.IO / WebSockets**

- Что такое WebSocket и чем отличается от HTTP
    
- Событийная модель: `on`, `emit`
    
- Работа с комнатами (`join`, `to`)
    
- Middleware для авторизации
    
- Повторные подключения, heartbeats
    
- Use case: чат, лайвы, нотификации
    

---

## 📡 7. **Kafka.js и событийная архитектура**

- Что такое Kafka: брокеры, топики, partition, offset
    
- Producer/Consumer API
    
- Consumer Groups, масштабирование
    
- Retry-механизмы, dead-letter-queue (DLQ)
    
- Kafka vs RabbitMQ (pull vs push модель)
    
- Use case: логирование, события между сервисами
    

---

## 🧱 8. **SQLite и локальное хранилище**

- Что такое SQLite: встраиваемая, файловая БД
    
- Когда применять: офлайн, мобильные приложения
    
- Работа с SQLite в React Native (через `expo-sqlite`)
    
- Примеры миграций и оптимизаций
    
- Сравнение с полноценными БД (PostgreSQL, MySQL)
    

---

## 🧩 9. **Паттерны проектирования и архитектура**

- HOC, Render Props, Custom Hooks
    
- Container / Presentational components
    
- Singleton, Factory, Observer, Strategy (основные GOF)
    
- Clean Architecture / Feature-sliced Design (по желанию)
    
- Repository pattern, Service Layer (на бэке)
    
- Atomic Design
    

---
