//shallow copy(не копирует вложенные объекты)
const log = console.log

const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'value'
    }
}

const o2 = Object.assign({}, o) 

o2.obj.key = 'new value'

log(o.obj.key) //вывод будет по прежнему new value

//deep copy - необходимо, если есть объекты внутри объектов
function deepCopy(obj){
    const keys = Object.keys(obj) //берём ключи объекта

    const newObject = {} //объявляем новый объект

    for (let i = 0; i < keys.length; i++){ //проходим циклом по ключам объекта
        const key = keys[i]
        if (typeof obj[key] === 'object' && obj[key] !== null){ //проверяем тип ключей в объекте перед копированием
            newObject[key] = deepCopy(obj[key]) //рекурсивная копия
        } else {
            newObject[key] = obj[key] //примитив — просто копируем
        }
    }
    return newObject
}

const o3 = deepCopy(o)

o.obj.key = 'new value!'

log(o3.obj.key) //вывод должен остаться value
log(o.obj.key) //вывод new value!

//ещё один хитрый способ осуществить deep copy
const o4 = JSON.parse(JSON.stringify(o))

log(o4.obj.key) //value
