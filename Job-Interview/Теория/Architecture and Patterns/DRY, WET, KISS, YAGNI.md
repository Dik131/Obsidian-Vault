# 📚 Принципы:

## 1. **DRY** — _Don't Repeat Yourself_

**Не повторяй себя.**  
**Идея:**  
Код не должен содержать дублирования логики. Повторяющиеся части стоит выносить в отдельные функции, компоненты или модули.

**На React Native пример:**

```tsx
// Вместо копипаста кнопок:
<Button title="Save" onPress={saveData} />
<Button title="Delete" onPress={deleteData} />

// Можно сделать переиспользуемый компонент:
const ActionButton = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <Button title={title} onPress={onPress} />
);

// И использовать:
<ActionButton title="Save" onPress={saveData} />
<ActionButton title="Delete" onPress={deleteData} />
```

---

## 2. **WET** — _Write Everything Twice_

**Пиши всё дважды.** (ирония)  
**Идея:**  
Когда нарушают принцип DRY и копируют код в разных местах, это называют WET. Это **плохо**, потому что:

- Трудно поддерживать код.
    
- При изменении логики нужно помнить о всех местах.
    

**Пример в React Native:**

```tsx
// Плохая практика (WET)
<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
<Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
```

👉 Лучше создать общий стиль:

```tsx
const headerStyle = { fontSize: 20, fontWeight: 'bold' };

<Text style={headerStyle}>Profile</Text>
<Text style={headerStyle}>Settings</Text>
<Text style={headerStyle}>About</Text>
```

---

## 3. **KISS** — _Keep It Simple, Stupid_

**Делай проще, глупыш.**  
**Идея:**  
Не усложняй код без необходимости. Простое решение почти всегда лучше сложного.

**Пример на React Native:**

**Плохо (сложно):**

```tsx
const isEven = (number: number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
```

**Хорошо (проще):**

```tsx
const isEven = (number: number) => number % 2 === 0;
```

👉 Суть: там, где можно написать в одну строку — не пиши в пять.

---

## 4. **YAGNI** — _You Aren't Gonna Need It_

**Тебе это не понадобится.**  
**Идея:**  
Не нужно писать код "на будущее", который **сейчас не нужен**.  
Фокусируйся на реальных требованиях, а не на гипотетических.

**Пример в React Native:**

**Плохо (лишний код):**

```tsx
// Приложение еще не поддерживает темы, но разработчик заранее пишет код:
const getThemeColor = (theme: string) => {
  if (theme === 'dark') return '#000';
  if (theme === 'light') return '#fff';
  // А у нас вообще пока только одна тема...
};

<Text style={{ color: getThemeColor('light') }}>Hello</Text>
```

**Хорошо (без лишнего):**

```tsx
<Text style={{ color: '#fff' }}>Hello</Text>
```

👉 Когда действительно появится поддержка тем, тогда и стоит писать соответствующую логику.

---

# ✨ Быстрая шпаргалка:

|Принцип|Суть коротко|
|:--|:--|
|DRY|Избегай дублирования|
|WET|Не повторяй одно и то же (ирония)|
|KISS|Держи код простым|
|YAGNI|Не пиши то, что не нужно прямо сейчас|

---
