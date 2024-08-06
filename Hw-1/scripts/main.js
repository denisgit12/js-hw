

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// let firstName = 'Денис';
// let lastName = 'Ягольник';
// let middleName = 'Юрійович';

// console.log(`${lastName} ${firstName} ${middleName}`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// Додаткове для тих хто цікавився prompt
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName = prompt("What is your name?");
let lastName = prompt("What is your last name?");
let middleName = prompt("What is your middle name?");
console.log(`${lastName} ${firstName} ${middleName}`)
