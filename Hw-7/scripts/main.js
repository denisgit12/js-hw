// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User( id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// const usersArray = [
//     new User( 1, 'denis', 'Yaholnyk', 'wqwqw', '2123131' ),
//     new User( 2, 'denis', 'Yaholnyk', 'wqwqw', '2123131' ),
//     new User( 3, 'denis', 'Yaholnyk', 'wqwqw', '2123131' ),
//     new User( 4, 'denis', 'Yaholnyk', 'wqwqw', '2123131' ),
//     new User( 15, 'denis', 'Yaholnyk', 'wqwqw', '2123131' ),
//     new User( 6, 'denis', 'Yaholnyk', 'wqwqw', '2123131' ),
//     new User( 47, 'denis', 'Yaholnyk', 'wqwqw', '2123131' ),
//     new User( 8, 'denis', 'Yaholnyk', 'wqwqw', '2123131' ),
//     new User( 9, 'denis', 'Yaholnyk', 'wqwqw', '2123131' ),
//     new User( 10, 'denis', 'Yaholnyk', 'wqwqw', '2123131' ),
//
//
// ]

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// const filterId = usersArray.filter(value => value.id % 2 === 0  );
// console.log(filterId)

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// const sortId = usersArray.sort((userOne, userTwo) => userOne.id - userTwo.id)
// console.log(sortId)

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client( id, name, surname , email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// const clientsArray = [
//     new Client(2, 'igor', 'reasa', 'dwewe231', '31231231', [{name: 'tv', price:123}, {name: 'phone', price:123}] ),
//     new Client(12, 'igor', 'reasa', 'dwewe231', '31231231', [{name: 'tv', price:123}, {name: 'phone', price:123}] ),
//     new Client(13, 'igor', 'reasa', 'dwewe231', '31231231', [{name: 'tv', price:123}, {name: 'phone', price:123}] ),
//     new Client(24, 'igor', 'reasa', 'dwewe231', '31231231', [{name: 'tv', price:123}] ),
//     new Client(15, 'igor', 'reasa', 'dwewe231', '31231231', [{name: 'tv', price:123}, {name: 'phone', price:123}, {name: 'car', price:123}] ),
//     new Client(6, 'igor', 'reasa', 'dwewe231', '31231231', [{name: 'tv', price:123}, {name: 'phone', price:123}] ),
//     new Client(47, 'igor', 'reasa', 'dwewe231', '31231231', [{name: 'tv', price:123}, {name: 'phone', price:123}] ),
//     new Client(8, 'igor', 'reasa', 'dwewe231', '31231231', [{name: 'tv', price:123}, {name: 'phone', price:123}] ),
//     new Client(9, 'igor', 'reasa', 'dwewe231', '31231231', [{name: 'tv', price:123}, {name: 'phone', price:123}] ),
//     new Client(10, 'igor', 'reasa', 'dwewe231', '31231231', [{name: 'tv', price:123}, {name: 'phone', price:123}] ),
//
//
// ]
// console.log(clientsArray)

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// const sortOrder = clientsArray.sort((userOne, userTwo) => userOne.order.length - userTwo.order.length);
// console.log(sortOrder)


// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxSpeed, engineVolume, ) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}`)
//     };
//
//     this.info = function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//     this.changeYear = function changeYear (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function addDriver (driver) {
//         this.driver = driver
//     }
// }
// const car = new Car('BMW', 'Germany', 2020, 320, 400)
// car.increaseMaxSpeed(222);
// car.info();
// car.changeYear(2221);
// car.addDriver('gj')
// console.log(car )

//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume,) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}`)
//     };
//
//     info() {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//     changeYear (newValue) {
//         this.year = newValue;
//     };
//     addDriver (driver) {
//         this.driver = driver
//     }
// }
// const car = new Car('BMW', 'Germany', 2020, 320, 400)
// car.increaseMaxSpeed(222);
// car.info();
// car.changeYear(2221);
// car.addDriver('gj')
// console.log(car )

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;

}
class Prince {
   constructor(name, age, foot) {
       this.name = name;
       this.age = age
       this.foot = foot;
   }
}
const CinderellasArray = [
    new Cinderella('anna', 21, 37),
    new Cinderella('anna', 21, 38),
    new Cinderella('anna', 21, 39),
    new Cinderella('anna', 21, 40),
    new Cinderella('anna', 20, 36),
    new Cinderella('anna', 21, 35),
    new Cinderella('anna', 21, 37),
    new Cinderella('anna', 21, 38),
]
const prince = new Prince('anna', 20, 36);

for (const cinderella of CinderellasArray) {
    if (cinderella.footSize === prince.foot){
        console.log(cinderella)
    }
}
const cinderella = CinderellasArray.find(value => value.footSize === prince.foot);
console.log(cinderella);
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter