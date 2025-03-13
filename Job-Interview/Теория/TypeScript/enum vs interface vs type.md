### `enum` в TypeScript

`enum` (перечисление) — это специальный тип данных, позволяющий задать набор именованных констант.

#### Зачем нужны `enum`?

- Упрощают работу с набором фиксированных значений (например, дни недели, статусы, роли пользователей).
- Позволяют избежать "магических чисел" и строк в коде.
- Доступны как во время компиляции, так и во время выполнения (в отличие от `type` и `interface`).

#### Пример `enum`:

```ts
enum Status {
  Pending = "PENDING",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED"
}

function updateStatus(status: Status) {
  console.log(`Status updated to: ${status}`);
}

updateStatus(Status.Completed); // ✅ "Status updated to: COMPLETED"
updateStatus("COMPLETED"); // ❌ Ошибка, если не использовать enum
```

---
#### Недостатки `enum`

- Увеличивает размер выходного JS-кода.
- Может вести себя неожиданно при неправильном использовании (особенно `const enum`).
- В большинстве случаев его можно заменить `type`.

#### Альтернатива `enum` на `type`:

```ts
type Status = "PENDING" | "IN_PROGRESS" | "COMPLETED";

function updateStatus(status: Status) {
  console.log(`Status updated to: ${status}`);
}
```

Этот вариант не будет компилироваться в JavaScript, что делает его легче.

---

### `interface` vs `type`

#### Когда использовать `interface`?

- Когда требуется расширяемость (`extends`).
- Когда описываем структуру объекта или класса.

```ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: "admin";
}
```

#### Когда использовать `type`?

- Когда нужно объединять примитивные типы (`union`, `intersection`).
- Когда описываем сложные структуры, например, кортежи.

```ts
type Status = "active" | "inactive";
type Response = { success: boolean } & { data: string };
```

#### Главное преимущество `interface`

- Поддерживает `extends`, `implements`, что полезно при ООП.

#### Главное преимущество `type`

- Гибкость в работе с объединениями и пересечениями типов.

**Вывод:**

- `enum` лучше заменить на `type`, если нет необходимости в значениях во время выполнения.
- `interface` использовать для описания структур объектов и классов.
- `type` использовать для объединения примитивов и более сложных типов.