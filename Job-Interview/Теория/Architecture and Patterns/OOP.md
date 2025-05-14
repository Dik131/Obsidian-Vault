## 💡 **Введение: Что такое ООП**

**Объектно-Ориентированное Программирование (ООП)** — это подход к разработке программ, в котором данные (состояние) и поведение (методы) объединяются в **объекты**. Эти объекты создаются на основе **классов** — «чертежей» объекта.

---

## 🛡️ **1. Инкапсуляция — Сокрытие деталей реализации**

**Суть:** скрыть внутреннюю реализацию объекта и предоставить внешний интерфейс для взаимодействия.

### ✅ Пример на React Native (TypeScript)

```tsx
class CounterModel {
  private count: number = 0;

  increment() {
    this.count += 1;
  }

  getCount(): number {
    return this.count;
  }
}

// Использование в компоненте
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const counter = new CounterModel();

export default function App() {
  const [value, setValue] = useState(counter.getCount());

  return (
    <View>
      <Text>Счётчик: {value}</Text>
      <Button
        title="Увеличить"
        onPress={() => {
          counter.increment();
          setValue(counter.getCount());
        }}
      />
    </View>
  );
}
```

🔐 `count` скрыт и доступен только через методы `increment()` и `getCount()` — это и есть **инкапсуляция**.

---

## 🧬 **2. Наследование — Повторное использование кода**

**Суть:** подклассы наследуют свойства и методы от родительского класса.

### ✅ Пример:

```tsx
class ScreenComponent {
  protected screenName: string;

  constructor(screenName: string) {
    this.screenName = screenName;
  }

  logOpen() {
    console.log(`Открыт экран: ${this.screenName}`);
  }
}

class ProfileScreen extends ScreenComponent {
  constructor() {
    super('Профиль');
  }

  loadUserData() {
    console.log('Загрузка данных пользователя...');
  }
}

// Использование
const screen = new ProfileScreen();
screen.logOpen();        // => Открыт экран: Профиль
screen.loadUserData();   // => Загрузка данных пользователя...
```

👨‍👩‍👧 `ProfileScreen` **наследует** поведение от `ScreenComponent`, расширяя его новыми методами.

---

## 🎭 **3. Полиморфизм — Унифицированный интерфейс**

**Суть:** один и тот же интерфейс работает по-разному для разных объектов.

### ✅ Пример: Компоненты с одинаковым интерфейсом

```tsx
abstract class Shape {
  abstract render(): JSX.Element;
}

class Circle extends Shape {
  render() {
    return <Text>🟠 Это круг</Text>;
  }
}

class Square extends Shape {
  render() {
    return <Text>🟥 Это квадрат</Text>;
  }
}

const renderShape = (shape: Shape) => shape.render();

// Использование
export default function App() {
  const shapes: Shape[] = [new Circle(), new Square()];
  return <View>{shapes.map((shape, idx) => <View key={idx}>{renderShape(shape)}</View>)}</View>;
}
```

📦 Метод `render()` реализуется **по-разному** в `Circle` и `Square`, но вызывается **одинаково** через `Shape`.

---

## 🧠 **Запомни по ключевым словам**

|Принцип|Ключевое слово|Цель|
|---|---|---|
|Инкапсуляция|`private` / интерфейс|Скрыть детали реализации|
|Наследование|`extends`|Повторное использование кода|
|Полиморфизм|`override`, `abstract`|Гибкость через общий интерфейс|

---

## 🧪 Как применять в React Native

|Где применяется|Что используется|
|---|---|
|Модели данных|Классы с методами и инкапсуляцией (`UserModel`)|
|Архитектура экрана|Наследование базового `ScreenComponent`|
|Переиспользуемые UI-компоненты|Полиморфизм через пропсы или базовые классы (`render()`)|

---

## 📌 Краткий итог для заучивания

- **Инкапсуляция** — "Не лезь под капот!" Скрыли детали, дали кнопки.
    
- **Наследование** — "Сын как отец, но со своими фишками."
    
- **Полиморфизм** — "Общая кнопка работает с разными вещами по-разному."

[Статья на тему](https://purpleschool.ru/blog/obektno-orientirovannoe-programmirovanie-ot-osnov-k-masterstvu)
