'use strict';

// const personalPlanPeter = {
//     name: "Peter",
//     age: "249",
//     skills: {
//         languages: ['ru', 'eng', 'ua'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         let lang = plan.skills.languages.join(' ');
//         lang = lang.toUpperCase();
//         return `Мне ${plan.age} и я владею языками: ${lang}`;
//     }
// };


// // taks 1
// function showExperience(plan) {
//     const {
//         exp
//     } = plan.skills;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));

// // task 2

// function showProgrammingLangs(plan) {
//     let programmingLanguages = '';
//     for (let key in plan.skills.programmingLangs) {
//         if (typeof ([key]) !== undefined) {
//             programmingLanguages += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
//         } else {
//             programmingLanguages = '4';
//         }
//     }
//     return programmingLanguages;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// //task 3
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// //solved Task # 35.10 decomposition of {} + functions 


// Task 1 of # 35.11 
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = arr.join(' ');
    if (arr.length === 0) {
        return `Семья пуста`;
    } else {
        return `Семья состоит из: ${str}`;
    }
}

showFamily(family);


// Task 2 of # 35.11 
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = arr.join(' ');
    str = str.toLowerCase(str);
    str = str.split(' ');

    str.forEach(function (item) {
        console.log(`${item}`);
    });
}

//standardizeStrings(favoriteCities);



// Udemy solution via =>

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
//  function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city);
//     });
// }

// standardizeStrings(favoriteCities);

// Task 3 of # 35.11 
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return `Ошибка!`;
    }
    //console.log(str = str.split(""));
    //console.log(str = str.reverse());
    //console.log(str = str.join(""));
    return str.split("").reverse().join("");

}

reverse(someString);

// Task 4 of # 35.11 
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

const arr = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {

    if (arr.length === 0) {
        return `Нет доступных валют`;
    }

    let curr1 = 'Доступные валюты:\n';
    arr.forEach(arr => {
        if (arr !== missingCurr) {
            curr1 += `${arr}\n`;
        }
    });

    return curr1;



}

console.log(availableCurr(arr, 'USD'));



const main = {
    health: 500,
    armor: 100,
    showLog: function () {
        console.log('Working');
    }
};

const s1 = Object.create(main);

const s2 = {};
Object.setPrototypeOf(s2, main);



console.log(s2.health);