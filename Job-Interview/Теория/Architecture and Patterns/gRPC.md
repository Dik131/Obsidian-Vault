**tRPC vs gRPC** — это две разные технологии, которые решают похожую задачу (взаимодействие клиента и сервера), но делают это **совсем по-разному**.

---

**🧩 Что такое gRPC?**

  

**gRPC (Google Remote Procedure Call)** — это технология от Google для общения между сервисами. Она основана на:

• 🧬 **Protocol Buffers (protobuf)** — бинарный формат сериализации данных

• ⚡ Очень быстро и компактно (меньше данных, чем JSON)

• 🔐 Используется в микросервисной архитектуре, особенно в backend-системах

  

**Пример:**

```
// greet.proto
service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply);
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}
```

Ты компилируешь этот .proto файл в код на любом языке (TS, Go, Python, Java и т.п.), и он генерирует клиент и сервер.

---

**🧪 Что такое tRPC?**

  

**tRPC** — это TypeScript-first библиотека для **веб-приложений**, в частности для **Next.js**, **React**, **React Native**. Она:

• 🧠 **Не требует генерации кода**

• 📦 Работает на **HTTP (JSON)**, как обычный REST

• 📡 Позволяет писать backend-функции и вызывать их как “удалённые” напрямую из клиента

• 💡 Поддерживает type-safety “от и до”

  

**Пример:**

```
// server.ts
const appRouter = t.router({
  sayHello: t.procedure.input(z.string()).query((opts) => {
    return `Hello, ${opts.input}`;
  }),
});
```

```
// client.ts
const { data } = trpc.sayHello.useQuery('Вася');
```

  

---

**⚠️ Важно**

• **tRPC не работает вне TypeScript мира** — клиент и сервер должны быть TS

• **gRPC** может использоваться **в любом языке**, но сложнее в настройке

---

[[https://youtu.be/jd5JwXoDXFo?si=PN518ojasmSDVKUo|Видео на тему]]