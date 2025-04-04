---
title: "Настройка шрифтов для сайта с помощью CSS | Шрифты в CSS"
source: "https://purpleschool.ru/knowledge-base/article/font-properties"
author:
published:
created: 2025-03-21
description: "Изучите значения свойств шрифтов в CSS с помощью этой статьи. Она охватываем все основные свойства шрифта, от font-family до font-stretch | База знаний PurpleSchool"
tags:
  - "clippings"
---
## Введение в свойства шрифтов

![](https://purpleschool.ru/_next/static/media/time-icon.33f80bd8.svg) 17 марта 2025 г.Автор

Алексей Овсянников

В CSS шрифты сгруппированы в семейства шрифтов, которые классифицируются по набору стандартных свойств. В одном семействе форма шрифта может различаться в зависимости от таких факторов, как толщина штриха, наклон или относительная ширина.

## Свойство font-family

Свойство font-family является наследуемыми и используется для выбора начертания шрифта. Пробелы или символы в названии шрифта заключается в кавычки. Это делается для того, чтобы браузер мог понять, где начинается и заканчивается название шрифта.

### Синтаксис

```css
font-family: "PT Sans", Calibri, Tahoma, sans-serif;
font-family: Hack, monospace;
font-family: fantasy;
font-family: initial;
font-family: inherit;
```

### Значения

- **family-name**: Название семейства шрифтов
- **generic-family**: существуют 5 базовых семейств шрифтов:
	- Serif (шрифты с засечками)
	- Sans-serif (шрифты без засечек)
	- Monospace (шрифты с фиксированной шириной)
	- Cursive (рукописные шрифты)
	- аллегорические шрифты (декоративные шрифты)
- **inherit**: Значение свойства наследуется от родительского элемента..
- **initial**: Устанавливает значение свойства в значение по умолчанию.

## Свойство font-size

- Свойство font-size является наследуемыми и указывает желаемую высоту глифов из шрифта.

### Синтаксис

```css
font-size: x-small;
font-size: larger;
font-size: 0.8rem;
font-size: 65%;
font-family: initial;
font-family: inherit;
```

### Значения

- **абсолютные значения**: выделяют 7 таких значений - xx-small, x-small, small, medium, large, x-large, xx-large. В качестве стандартного размера принимается medium.
- **фиксированные значения**: задаются с использованием единиц длины, таких как px, rem, ch.
- **относительные значения**: вычисляется на основании любого размера, унаследованного от родительского элемента.
- **inherit**: Значение свойства наследуется от родительского элемента.
- **initial**: Устанавливает значение свойства в значение по умолчанию.

## Свойство font-weight

- свойство font-weight является наследуемым и управляет насыщенностью шрифта.

### Синтаксис

```css
font-weight: lighter;
font-weight: normal;
font-weight: bold;
font-weight: bolder;
font-weight: 650;
font-family: initial;
font-family: inherit;
```

### Значения

- **lighter**: делает толщину шрифта легче, чем толщину шрифта родительского элемента.
- **normal**: значение по умолчанию. Эквивалентно значению 400.
- **bold**: делает шрифт текста полужирным. Эквивалентно стоимости 700.
- **bolder**: делает толщину шрифта жирнее, чем толщина шрифта у родительского элемента.
- **100** / **900**: Значение 100 соответствует самому тонкому начертанию шрифта, а 900 — самому плотному. Эти числа не представляют конкретных плотностей; например, 100, 200, 300 и 400 могут соответствовать одному и тому же уровню начертанию шрифта. Так же 500 и 600 могут соответствовать среднему, а 700, 800 и 900 могут соотвествовать одному и тому же жирному начертанием.
- **inherit**: Значение свойства наследуется от родительского элемента.
- **initial**: Устанавливает значение свойства в значение по умолчанию.

## Свойство font-style

- Свойство font-style позволяет выбрать стиль написания шрифта.

### Синтаксис

```css
font-style: italic;
font-style: normal;
font-style: oblique;
font-family: inherit;
font-family: initial;
```

### Значения

- **italic**: Выделяет текст курсивом.
- **normal**: Значение по умолчанию, устанавливает для текста обычное начертание шрифта.
- **oblique**: Устанавливает наклонное начертание шрифта. Разница между курсивом и наклонным шрифтом заключается в том, что курсив вносит небольшие изменения в структуру каждого символа, а наклонный шрифт — это наклонная версия обычного шрифта.
- **initial**: Устанавливает значение свойства в значение по умолчанию.
- **inherit**: Значение свойства наследуется от родительского элемента.

## Свойство font-stretch

- Свойство font-stretch наследуется и позволяет выбрать обычный, сжатый или расширенный стиль письма из семейства шрифтов. Свойство работает только со шрифтами, которые создавались с использованием различных стилей письма.

### Синтаксис

```css
font-stretch: ultra-condensed;
font-stretch: normal;
font-stretch: extra-expanded;
font-family: initial;
font-family: inherit;
```

### Значения

Кроме привычных значений normal, initial и inherit есть две группы значений - condensed(сжатые) и expanded(рассширенные).

- condensed:
	- ultra-condensed
	- extra-condensed
	- condensed
	- semi-condensed
- expanded:
	- ultra-condensed
	- extra-condensed
	- condensed
	- semi-condensed
- Если конкретное значение сжатого варианта начертания шрифта отсутствует в шрифте, браузер будет использовать наимение сжатое начертание шрифта. Например, если вы укажите для шрифта значение extra-condensed, а в шрифте есть только два варианта - ultra-condensed и condensed, то браузер выберет вариант condensed.
- То же самое касается расширенния шрифта: если определенное расширенное начертание шрифта недоступно, браузер будет использовать наименее расширенный вариант шрифта.

## Свойство font

- cвойство font является сокращением для font-family, font-style, font-size, line-height, font-weight, font-stretch.

### Синтаксис

```css
font: italic 1.2em "Fira Sans", serif;
font: normal small-caps 120%/120% fantasy;
font: caption;
font: 80% sans-serif;
font: 1.6ch italic "Helvetica", sans-serif;
```

### Карта развития разработчика

Получите полную карту развития разработчика по всем направлениям: frontend, backend, devops, mobile