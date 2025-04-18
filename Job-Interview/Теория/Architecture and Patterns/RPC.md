
**⚙️ Что такое RPC (Remote Procedure Call)?**

  

**RPC** — это способ вызвать функцию на другом сервере, как будто она у тебя локально.

Ты вызываешь getUser() — а на самом деле это запрос к серверу.

---

**Пример (в духе JavaScript):**

```
const user = await rpc.getUser(42);
```

Под капотом:

📡 клиент отправляет HTTP или бинарный запрос →

🧠 сервер выполняет функцию getUser →

📦 возвращает результат.

---

**Вариации RPC:**

| **Вид**      | **Особенности**                              |
| ------------ | -------------------------------------------- |
| **gRPC**     | Быстрый, бинарный, кросс-языковой (protobuf) |
| **tRPC**     | Для TypeScript-проектов, без генерации кода  |
| **JSON-RPC** | Простой, основан на JSON                     |
| **XML-RPC**  | Старый, на XML                               |

  

---

**Когда использовать?**

  

✅ Когда хочется **удобства, типизации и простоты**, как будто вызываешь обычную функцию, а не делаешь HTTP-запросы.

