// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// const element = document.createElement("h1");
// element.classList.add('text');
// element.innerText = 'Hello World!';
//
// const button = document.createElement("button");
// button.textContent = "delete";
// button.addEventListener("click", function (event) {
//     element.innerText = ''
// })
//
// document.body.append(element, button);

//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
//     чи меньше він ніж 18, та повідомити про це користувача
// const input = document.forms.form1;
// input.addEventListener("submit", function(e)  {
//     e.preventDefault();
//     let userAge = this.age.value;
//     if (userAge<18){
//         this.age.value = ' ';
//         alert('You are not have 18 years old')
//     }else {
//         this.age.value = '';
//         alert('Okk')
//     }
// })



// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// const form = document.forms.createUser;
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const userName = this.userName.value;
//     const userSurname = this.userSurname.value;
//     const userAge = this.userAge.value;
//     const obj = {userName, userSurname, userAge}
//     console.log(obj)
//     const div = document.createElement('div');
//     div.innerText = `name:  ${obj.userName} surname:  ${obj.userSurname}  age: ${userAge}`;
//     document.body.appendChild(div);
//
// })

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// const div = document.createElement('div');
//
// let num = +JSON.parse(JSON.stringify(localStorage.getItem('num'))) || 0
// num += 1;
// localStorage.setItem('num', num)
//
// div.innerText = num
// document.body.appendChild(div);

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час
// відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування
// сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
//
// sessionsList.push(new Date());
//
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
// console.log(sessionsList);

// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
// const formCalculate = document.forms.formCalculate;
// const h2 = document.createElement("h2");
//
// formCalculate.addEventListener('input', function (e) {
//   e.preventDefault();
//   const input = this.inputNumber.value;
//     const calc = +input * 2.20
//
//     h2.innerText = `фути: ${calc}`;
// } )
// document.body.appendChild(h2);

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
// function addToLocalStorage(arrayName, objToAdd) {
//     const array = JSON.parse(localStorage.getItem(arrayName)) || [];
//     array.push(objToAdd);
//     localStorage.setItem(arrayName, JSON.stringify(array));
// }
// addToLocalStorage('sessionsList', {name: 'name', age: 32});


//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
// const formTableCreate = document.forms.tableCreate;
// const table = document.createElement("table");
// const tbody = document.createElement("tbody");
//
// document.body.appendChild(table);
//
// formTableCreate.addEventListener('submit', function (e) {
//     table.innerText = ''
//     e.preventDefault();
//     const lines = +this.lines.value;
//     const cells = +this.cells.value;
//     const dateInput = this.date.value;
//
//     for (let i = 0; i < lines; i++) {
//         const tr = document.createElement("tr");
//
//             for (let j = 0; j < cells; j++) {
//                 const td = document.createElement("td");
//                 td.innerText = dateInput;
//
//                 tr.appendChild(td);
//             }
//
//         table.appendChild(tr)
//     }
// })

//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const div = document.createElement('div');

let num = +JSON.parse(JSON.stringify(localStorage.getItem('num'))) || 0

let date = JSON.parse(JSON.stringify(localStorage.getItem('date') )) || [];

const nowHours = new Date().getHours();
const nowMinutes = new Date().getMinutes();
const nowSeconds = new Date().getSeconds();

localStorage.setItem('date', `hours: ${new Date().getHours()}, minutes: ${new Date().getMinutes()}, seconds: ${new Date().getSeconds()}`);

const split = date.split(',');

let obj = {};

for (let i = 0; i < split.length; i++) {
    const objElement = split[i].trim();
    const sepLocal = objElement.split(":")
    obj [sepLocal[0]] = sepLocal[1]

}

if (nowHours === +obj.hours && nowMinutes === +obj.minutes && (nowSeconds - (+obj.seconds))<=10 && (nowSeconds - (+obj.seconds))>=0){
    num += 10;
}

localStorage.setItem('num',num)

div.innerText = num
document.body.appendChild(div);

//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів