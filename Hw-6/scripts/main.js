// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const lengthStringOne = 'hello world';
// console.log(lengthStringOne.length);
//
// const lengthStringTwo = 'lorem ipsum';
// console.log(lengthStringTwo.length);
//
// const lengthStringThree = 'javascript is cool';
// console.log(lengthStringThree.length);
//

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const stringOne = 'hello world';
// console.log(stringOne.toUpperCase());
//
// const stringTwo = 'lorem ipsum';
// console.log(stringTwo.toUpperCase());
//
// const stringThree = 'javascript is cool';
// console.log(stringThree.toUpperCase());

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// const stringOne = 'HELLO WORLD';
// console.log(stringOne.toLowerCase());
//
// const stringTwo = 'LOREM IPSUM';
// console.log(stringTwo.toLowerCase());
//
// const stringThree = 'JAVASCRIPT IS COOL';
// console.log(stringThree.toLowerCase());

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//     let str = ' dirty string   '
//     console.log(str.trim());

//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// function stringToarray(str) {
//     str?console.log(str.split(" ")):console.log('error');
// }
// stringToarray(str);

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// const array = [10,8,-7,55,987,-1011,0,1050,0];
// const newArray = array.map(value => (JSON.stringify(value)))
// console.log(newArray);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// function sortNums(array,direction){
//     if (direction === 'ascending'){
//         array.sort((a, b) => a - b);
//     }else if (direction === 'descending'){
//         array.sort((a, b) =>  b - a);
//     }
// return array;
// }
//
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]
//
// ==========================

// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const sort =
//     coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
// console.log(sort);

// const filter = coursesAndDurationArray.filter(value => value.monthDuration>5)
// console.log(filter)
// const map = coursesAndDurationArray.map((value, index) => {
//     value.id  = index + 1;
//     return value;
// });
// console.log(map)
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================

//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

// const suits = ['spade', 'diamond','heart', 'clubs'];
// const  values =  ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
// const cards = [];
//
// for (const suit of suits) {
//     for (const value of values) {
//         cards.push({cardSuit : suit, value});
//     }
// }
// console.log(cards)
// console.log(cards.filter(value => value.value === 'ace' && value.cardSuit === 'spade'));
// console.log(cards.filter(value => value.value === '6'));
// console.log(cards.filter(value => value.cardSuit === 'heart' || value.cardSuit === 'diamond'));
// console.log(cards.filter(value =>  value.cardSuit === 'diamond'));
// console.log(cards.filter(value =>  value.cardSuit === 'clubs' && value.value !== '6' && value.value !== '7'&& value.value !== '8'));
//

// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// const cards = [];
// const suits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
//
// for (const suit of suits) {
//     for (const value of values) {
//         cards.push({cardSuit: suit, value});
//     }
// }
// console.log(cards)
// const reduce = cards.reduce((accum, card) => {
//         if (card.cardSuit === 'spade') {
//             accum.spades.push(card);
//         } else if (card.cardSuit === 'diamond') {
//             accum.diamonds.push(card);
//         } else if (card.cardSuit === 'heart') {
//             accum.hearts.push(card);
//         } else if (card.cardSuit === 'clubs') {
//             accum.clubs.push(card);
//         }
//         return accum;
//     },
//     {
//         spades: [],
//         diamonds: [],
//         hearts: [],
//         clubs: []
//     }
// )
// console.log(reduce);
// =========================
// #4LJn7zBx
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray)

const filter = coursesArray.filter(value => {
    return value.modules.includes('sass')
})
console.log(filter)
const filterTwo = coursesArray.filter(value => {
    return value.modules.includes('docker')
})
console.log(filterTwo)
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker