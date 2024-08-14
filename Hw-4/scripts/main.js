// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a,b) {
//     if (a && b){
//         return a * b;
//     }
// }
//
// console.log(area(1, 10));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area(r) {
//     if (r){
//         return Math.round(2* Math.PI * r);
//     }
// }
//
// console.log(area(10));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area(h, r) {
//     if (h && r){
//         return Math.round(2 * Math.PI * r * h );
//     }
// }
//
// console.log(area(1, 10));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
// function solve(array) {
//     if (Array.isArray(array)) {
//         for (const arrayElement of array) {
//             console.log(arrayElement);
//         }
//     }
//
//
// }
//
// solve([1, 2, 3]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function solve(text) {
//     document.write(`<p>
//         ${text}
//     </p>`)
// }
// solve('d2ewdsxz')

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// function solve(text) {
//         document.write(
//          `<ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//
//           </ul>`)
// }
// solve('dssa')

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function solve(text, number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
//
// }
// solve('dssa', 30)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// function solve(array) {
//     document.write(`<ul>`);
//     if (Array.isArray(array)) {
//         for (const arrayElement of array) {
//             document.write(`<li>${arrayElement}</li>`);
//         }
//     }
//     document.write(`</ul>`);
//
// }
// solve([12,21231,213112.3,131 ,'qeqwqeqeq']);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function solve(array) {
//     if (Array.isArray(array)) {
//         document.write(`<ul>`)
//
//         for (const arrayElement of array) {
//             if (arrayElement.id && arrayElement.name && arrayElement.age) {
//                 document.write(`<li>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</li>`)
//             }
//         }
//         document.write(`</ul>`)
//     }
// }
// solve([{id:12, name:"denis", age:21},{id:13, name:"denis", age:21},{id:14, name:"denis", age:21},{id:15, name:"denis", age:21},{id:16, name:"denis", age:21},])

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// function solver(array) {
//     let minMum = array[0]
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         if (arrayElement<minMum){
//             minMum = arrayElement
//         }
//
//     }
//     return minMum;
// }
//
// console.log(solver([3, 4, 5, 6, 10, -1 ,332, 432]));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr) {
//     let sum = 0
//     if (Array.isArray(arr)){
//         for (const arrElement of arr) {
//             sum =  arrElement + sum
//         }
//     }
//     return sum;
// }
//
// console.log(sum([1, 2, 10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     console.log(arr);
// }
//
// swap([11, 22, 44, 55], 0, 1);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let num;
    if (exchangeCurrency === 'USD') {
        for (const sumUAHElement of currencyValues) {
            if (sumUAHElement.currency === "USD") {
                num = sumUAH / sumUAHElement.value
            }
        }
    } else if (exchangeCurrency === 'EUR') {
        for (const sumUAHElement of currencyValues) {
            if (sumUAHElement.currency === "EUR") {
                num = sumUAH / sumUAHElement.value
            }
        }
    }
    return num;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));
