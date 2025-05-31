//Три типа объявления объектов в JS:
log = console.log
// 1. через класс Object
const o = new Object()

//присвоение значий объектам
// key = value
o.firstName = "John"
o.lastName = "Doe"
o.isRealPerson = false
o.greet = function(){
    log("Hi, Dude!")
}

// 2. через литералы
const o2 = {}

//ещё несколько способов обращаться к ключам объектов
o2.firstName = "Johnatan"
o2["lastName"] = "Smith"

const key = "isLearning"
o2[key] = true

o2['greet'] = () => { //стрелочная функция - аналогично function(){}
    log("Hello, babe 😉")
}

// 3. сразу со свойствами
const o3 = {
    firstName: 'Emma', //не забываем запятую
    lastName: 'Whatson',
    isActress: true,
    greet: () => {
        log('Hello, fellows')
    },
    //можно использовать вложенные объекты
    address: {
        street: "The Elms",
        number: 13,
    }
}