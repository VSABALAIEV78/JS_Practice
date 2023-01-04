'use strict';

// //Task # 37. 13

// const shoppingMallData = {
//     shops: [{
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let vShops = 0;
//     // получили значения из всех {} в []shops;
//     for (let i = 0; i < data.shops.length; i++) {
//         if (typeof (data.shops[i]) === 'object') {

//             let {
//                 width,
//                 length
//             } = data.shops[i];

//             vShops += width * length;
//             //console.log(vShops);
//         }
//     }

//     const totalCost = vShops * data.height * data.moneyPer1m3;
//     //console.log(totalCost);

//     if (totalCost <= data.budget) {
//         return `Бюджета достаточно`;
//     } else {
//         return `Бюджета недостаточно`;
//     }

// }

// isBudgetEnough(shoppingMallData);
// // Task # 37. 13 (shops budget) solved

// // Task # 37. 14 (list of students)

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     console.log(arr);
//     const newArr = [];

//     for (let i = 0; i < 9; i += 3) {
//         newArr.push(arr.slice(i, i + 3));
//     }

//     if (arr.length == 9) {
//         newArr.push('Оставшиеся студенты: -');
//         return newArr;

//     } else {
//         newArr.push(`Оставшиеся студенты: ${arr[9]}`);
//         for (let j = 10; j < arr.length; j++) {
//             newArr[3] += `, ${arr[j]}`;
//         }
//         return newArr;
//     }
// }
// sortStudentsByGroups(students);

// // Task # 37. 14 (list of students). Solved with google help.


// let text1 = "some text is here";
// text1 = text1.split(' '); // ['some', 'text', 'is', 'here'];
// console.log(text1);


// let text2 = ['some', 'text', 'is', 'here'];
// text2 = text2.join('> ');
// console.log(text2);

// let a = null;
// a = String(a);
// console.log(typeof (a)); // 5 как строка

// console.log(typeof (Number('77'))); // 77 тип number



// console.log(+'88f8'); // 77 тип number

// console.log(parseInt('15px', 10)); //15
// console.log(parseInt('100px', 25)); //15

// let param = 01;

// if (param) {
//     console.log('working >>> true');
// } // ничего не выведет, так как param == 0 то есть false

// console.log(typeof (Boolean('77'))); // тип boolean
// console.log(Boolean(''));

// console.log(!!('')); // false
// console.log(!!(5)); // true


function createCounter() {
    let counter = 0;
    const myFunction = function () { // обьявление новой функции myFunction через cosnt 
        //let counter = 0; в таком случае вернет х1 х2 х3 = 1
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
const incr = createCounter();

const x1 = incr();
const x2 = incr();
const x3 = incr();

console.log(incr); // функция myFunction
console.log(x1, x2, x3); // 1 2 3


let c = 4;
const addX = x => n => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);

console.log(typeof (NaN));