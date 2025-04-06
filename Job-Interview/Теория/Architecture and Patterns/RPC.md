
**🎓 tRPC — современный способ общения между клиентом и сервером с TypeScript**

---

**📌 Что такое tRPC?**

  

**tRPC (TypeScript Remote Procedure Call)** — это библиотека, которая позволяет клиенту вызывать серверные функции напрямую и безопасно по типам. Она устраняет необходимость писать REST/GraphQL API вручную и **избавляет от дублирования типов**.

  

🧠 Суть: **пишешь функцию на сервере → вызываешь на клиенте → получаешь автокомплит и типы**.

---

**🛠️ Когда использовать tRPC?**

  

Подходит, если:

• ты работаешь на **Next.js или React Native** с серверной частью на TypeScript

• ты контролируешь и **клиент**, и **сервер**

• хочешь **быстро писать фичи** и **ловить ошибки на этапе компиляции**

---

**🧩 Сравнение с REST и GraphQL**

|**Особенность**|**REST**|**GraphQL**|**tRPC**|
|---|---|---|---|
|Описание ручек|вручную|схема GraphQL|функции|
|Типы|вручную|генерируются|автоматически|
|Валидация данных|вручную|встроена|с помощью Zod|
|Кодогенерация|❌|✅|❌ (не нужна)|
|Интеграция с TS|⚠️ частичная|⚠️ через схемы|✅ идеальная|
|Лёгкость|✅|⚠️ сложнее|✅|

  

---

**🧱 Структура типичного tRPC-проекта (Next.js)**

```
/pages
  └── api/trpc/[trpc].ts     ← точка входа для API
/src
  └── server/router.ts       ← tRPC маршруты (ручки)
  └── utils/trpc.ts          ← клиент tRPC
```

  

---

**🔌 Установка:**

```
npm install @trpc/server @trpc/client @trpc/react @trpc/next zod
```

  

---

**⚡ Пример: “Получить пользователя по ID”**

---

**1. Сервер: router.ts**

```
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  getUser: t.procedure
    .input(z.string()) // ожидаем строку
    .query(({ input }) => {
      return { id: input, name: 'Alice' };
    }),
});

export type AppRouter = typeof appRouter;
```

  

---

**2. API хэндлер: [trpc].ts**

```
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@/server/router';

export default createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
```

  

---

**3. Клиент tRPC: utils/trpc.ts**

```
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/server/router';

export const trpc = createTRPCReact<AppRouter>();
```

  

---

**4. В компоненте (Next.js):**

```
import { trpc } from '@/utils/trpc';

export default function UserComponent() {
  const { data, isLoading } = trpc.getUser.useQuery('1');

  if (isLoading) return <p>Загрузка...</p>;
  return <p>Имя: {data?.name}</p>;
}
```

  

---

**📱 Пример: React Native + tRPC (через Expo)**

1. Устанавливаем:

```
npm install @trpc/client zod react-query
```

2. Создаём tRPC-клиент:

```
// src/trpc.ts
import { createTRPCClient } from '@trpc/client';
import type { AppRouter } from '../../backend/src/server/router'; // путь к серверу
import superjson from 'superjson';

export const trpc = createTRPCClient<AppRouter>({
  url: 'http://<ТВОЙ-IP>:3000/api/trpc',
  transformer: superjson,
});
```

3. В компоненте:

```
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { trpc } from './src/trpc';

export default function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    trpc.query('getUser', '1').then(setUser);
  }, []);

  return (
    <View style={{ padding: 30 }}>
      <Text>Имя пользователя: {user?.name ?? 'Загрузка...'}</Text>
    </View>
  );
}
```

  

---

**🧪 Zod — как работает?**

```
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

type User = z.infer<typeof schema>; // типы подтянутся автоматически
```

Используется в tRPC для валидации входных данных и типобезопасности.

---

**🧠 Когда tRPC не нужен?**

• Если у тебя **отдельный frontend и backend** (разные языки)

• Если API **должен быть публичным** (например, для клиентов, сторонних разработчиков)

• Если ты не используешь TypeScript

• Если тебе достаточно **простого REST с fetch/axios**

---

**📌 Вывод**

|**Если ты…**|**То tRPC тебе…**|
|---|---|
|Пишешь фулстек на TypeScript|👍 Подходит идеально|
|Любишь типобезопасность и автокомплит|👍 Обязательно попробуй|
|Не хочешь описывать API вручную|👍 Сэкономишь кучу времени|
|Работаешь с публичными API|👎 Лучше REST или GraphQL|
