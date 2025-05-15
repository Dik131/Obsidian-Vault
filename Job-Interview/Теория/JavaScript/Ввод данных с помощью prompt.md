**Ввод последовательности с известным количеством элементов**

Сначала получаем количество, затем вводим данные.

```javascript
let n = Number(prompt())
let sum = 0
let x
for (let i = 0; i < n; i += 1) {
  x = prompt()
  sum += Number(x)
}
console.log(sum)
```

**Ввод последовательности, заканчивающейся терминальным значением**

Вводим значение, если оно не терминальное, то обрабатываем, иначе прекращаем ввод.

```javascript
let sum = 0
let x = prompt()
while (x !== 'END') {
  sum += Number(x)
  x = prompt()
}
console.log(sum)
```

**Ввод объекта в виде JSON**

Вводим ...

```javascript
const object = JSON.parse(prompt())
```

**Ввод массива** 

Вводим ...

```javascript
// массив слов, разделенных пробелом
const arr = prompt().split(` `)

// массив чисел, разделенных запятой
const arr = prompt().split(`,`).map(Number)

// массив букв из строки
const arr = [...prompt()]

// массив как JSON
const arr = JSON.parse(prompt())
```