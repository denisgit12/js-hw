// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// const div = document.createElement('div');
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.style.height = '100px';
// div.style.width = '100px';
// div.style.background = 'silver'
// div.style.margin = '10px'
// const divClone = div.cloneNode();
//
// document.body.append(div, divClone);

//     #OPLI89c9G
// - Є масив:
// const array = ['Main','Products','About us','Contacts'];
//
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// const ul = document.createElement('ul');
//
// for (const string of array) {
//     const li = document.createElement('li');
//     li.textContent = string;
//     ul.append(li);
// }
// document.body.append(ul);

// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// const headDiv = document.createElement('div');
// headDiv.classList.add('head');
// document.body.appendChild(headDiv);
//
// for (const course of coursesAndDurationArray) {
//
//     const box = document.createElement('div');
//     box.classList.add('box');
//
//     const h2 = document.createElement('h2');
//     h2.textContent = `title:  ${course.title}`;
//
//     const h3 = document.createElement('h3');
//     h3.textContent = `month Duration: ${course.monthDuration}`;
//
//     headDiv.appendChild(box)
//     box.append(h2, h3)
// }
// =========================

//     #Kx1xgoKy8
//     - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const headDiv = document.createElement('div');
headDiv.classList.add('head');
document.body.appendChild(headDiv);

for (const course of coursesAndDurationArray) {

    const box = document.createElement('div');
    box.classList.add('item');

    const h1 = document.createElement('h1');
    h1.classList.add('heading')
    h1.textContent = `title:  ${course.title}`;

    const p = document.createElement('p');
    p.classList.add('description');
    p.textContent = `month Duration: ${course.monthDuration}`;

    headDiv.appendChild(box)
    box.append(h1, p)
}
// =========================
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.
//
// ==========================