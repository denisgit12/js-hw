// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array.map(value => console.log(value))

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// {title= 'Tom Sawyer & Huckleberry Finn (Wordsworth Classics)', pageCount = 224, genre = 'The novel'}
// {title= 'Tom Sawyer & Huckleberry Finn (Wordsworth Classics)', pageCount = 224, genre = 'The novel'}
// {title= 'Tom Sawyer & Huckleberry Finn (Wordsworth Classics)', pageCount = 224, genre = 'The novel'}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// const Mark  = {title: 'Tom Sawyer & Huckleberry Finn (Wordsworth Classics)', pageCount: 224, genre: 'The novel', authors: ['Mark Twain', 1994]};
// console.log(Mark)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// const user  = [
//     {name: 'Tom ', userName: 'Sawyer' , password:'198626'},
//     {name: 'Tom ', userName: 'Sawyer' , password:'198623'},
//     {name: 'Tom ', userName: 'Sawyer' , password:'198626'},
//     {name: 'Tom ', userName: 'Sawyer' , password:'1986261'},
//     {name: 'Tom ', userName: 'Sawyer' , password:'198626'},
//     {name: 'Tom ', userName: 'Sawyer' , password:'198623'},
//     {name: 'Tom ', userName: 'Sawyer' , password:'198626'},
//     {name: 'Tom ', userName: 'Sawyer' , password:'198623'},
//     {name: 'Tom ', userName: 'Sawyer' , password:'198626'},
//     {name: 'Tom ', userName: 'Sawyer' , password:'198622'},
// ]
// user.map(value => console.log(value.password))

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
// const weather = [
//     {day: "Monday", inTheMorning: "12", inTheAfternoon: "37", inTheEvening: "28"},
//     {day: "Tuesday", inTheMorning: "12", inTheAfternoon: "37", inTheEvening: "28"},
//     {day: "Wednesday", inTheMorning: "12", inTheAfternoon: "37", inTheEvening: "28"},
//     {day: "Thursday", inTheMorning: "12", inTheAfternoon: "37", inTheEvening: "28"},
//     {day: "Friday", inTheMorning: "12", inTheAfternoon: "37", inTheEvening: "28"},
//     {day: "Saturday", inTheMorning: "12", inTheAfternoon: "37", inTheEvening: "28"},
//     {day: "Sunday", inTheMorning: "12", inTheAfternoon: "37", inTheEvening: "28"},
// ]
// console.log(weather)

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// const x = 0
// if (x !== 0){
//     console.log('Вірно')
// }else{
//     console.log('Невірно')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// const time = 333
// if (time >= 0 && time <=14 ){
//     console.log(1)
// }else if (time>=15 && time<=30){
//     console.log(2)
// }else if (time>=31 && time<=45){
//     console.log(3)
// }else if (time>=46 && time<=59){
//     console.log(4)
// }else {
//     console.log('error')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// const day =  +prompt("day")
// switch (day ) {
//     case  1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log('error')
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// const num1 = +prompt("Number first");
// const num2 = +prompt("Number second");
//
// if (num1 > num2){
//     console.log(`${num1} > ${num2}`)
// }else if (num1 < num2){
//     console.log(`${num1} < ${num2}`)
// }else if (num1 === num2){
//     console.log(`${num1} = ${num2}`)
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

//  let x = 12;
// if (x){
//     x = "default"
//     console.log(x)
// }else{
//     x = "falsy"
//     console.log(x)
// }
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.map(value => value.monthDuration>=5 && console.log(`${value.title}Супер`) )