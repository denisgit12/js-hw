// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
// function deepCopy(obj) {
//     if (obj){
//         let functionArray = [];
//
//         for (const objElement in obj) {
//             if (typeof obj[objElement] === 'function') {
//                 const functionClone = obj[objElement].bind({});
//                 functionArray.push({functionClone, objElement});
//             }
//         }
//         const parse = JSON.parse(JSON.stringify(obj));
//         for (const functionElement of functionArray) {
//             parse[functionElement.objElement] = functionElement.functionClone;
//         }
//         return parse;
//     }else if (!obj){
//         return 'error'
//     }
//
// }
// const copy = {name: 'qwqwqeq', function(  ){},functionTwo(  ){}};
// const deepCopy1 = deepCopy(copy);
// console.log(copy);
// console.log(deepCopy1);


// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const course =  coursesAndDurationArray.map((value, index) => ({ id:index+1, ...value}));
console.log(course)
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції