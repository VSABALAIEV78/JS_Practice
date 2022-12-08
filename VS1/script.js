"use strict";

let numberOfFilms,
    filmName,
    score;


first: for (let i = 0; i < i + 1; i++) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? Введите число от 1', '');

    if (numberOfFilms > 0 && typeof (numberOfFilms) === 'number') {
        break first;
    }
    console.log(numberOfFilms);
}
/////////// cycle #2
second: for (let j = 0; j < j + 1; j++) {
    filmName = prompt('Один из последних посмотренных фильмов?', '');
    // if (typeof (filmName) === null) {
    //     break second;
    // } else 
    if (filmName.length >= 50) {
        break second;
    }

    console.log(filmName);
}

/////////// cycle #3
third: for (let i = 0; i < i + 1; i++) {
    score = +prompt('На сколько оцените его? (от 1 до 10)', '');

    if (score > 0 && score < 11) {
        break third;
    }
}


console.log(numberOfFilms);
console.log(filmName);
console.log(score);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// if (numberOfFilms.length === 0) {
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// } else if (numberOfFilms.length >= 50) {
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// } else {
//     console.log(filmName);
// }

// first: for (let i = 0; i < 1; i++) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? Введите число от 0', '');

//     for (let k = 0; k < numberOfFilms.length + 1; k++) {

//         if (numberOfFilms.length === 0) {
//             numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//         } else if (numberOfFilms.length >= 50) {
//             numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//         }

//     }
//     if (numberOfFilms.length > 0 && numberOfFilms.length < 50) {
//         break first;
//     }
// }


// for (let j = 0; j < filmName.length + 1; j++) {

//     if (filmName.length === 0) {
//         filmName = prompt('Один из последних посмотренных фильмов?', '');
//     } else if (numberOfFilms.length >= 50) {
//         filmName = prompt('Один из последних посмотренных фильмов?', '');
//     }

// }



//console.log(numberOfFilms);

//personalMovieDB.movies[filmName] = score;

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// let filmName = prompt('Один из последних посмотренных фильмов?', '');
// let score = +prompt('На сколько оцените его?', '');




// personalMovieDB.movies[filmName] = score;

// // got a solution. works with [], but not with the dot > movies.filmName v.2
// console.log(personalMovieDB);






// //operators IF 

// const number = 19;

// if (number > 20) {
//     console.log('in bigger than 20');
// } else if (number < 10) {
//     console.log('in smaller that 10');
// } else if (number >= 10 && number < 19) {
//     console.log('number in range of 10 - 19');
// } else {
//     console.log('result = ' + number);
// }


// const num1 = 10;
// (num1 > 8) && (num1 < "15") ? console.log(`correct = ${num1}`): console.log('error');

// const num2 = 180; //строгое сравнение всегда
// switch (num2) {
//     case 9:
//         console.log('incorrect');
//         break;
//     case 11:
//         console.log('incorrect');
//         break;
//     case '10':
//         console.log('incorrect types');
//         break;
//     case 10:
//         console.log('correct');
//         break;
//     default:
//         console.log('wtf?');
//         break;
// }


// //
// //
// //


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!');
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!')
// }



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!');
// } else {
//     console.log("is not running");
// }

// //
// // циклы

// let m1 = 10; // let - так как переменная будет менятся

// while (m1 < 15) {
//     console.log(m1);
//     m1++;
// }

// do {
//     console.log(m1);
//     m1++;
// }
// while (m1 !== 17);




// for (let i = 1; i < 5; i++) {
//     console.log(i);
// }


// let m2 = 10;

// for (let i = 1; i < 5; i++) {
//     console.log(m2);
//     m2++;
// }


// for (let i = 1; i < 8; i++) {
//     if (i === 4) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 8; i++) {
//     if (i === 4) {
//         continue;
//     }
//     console.log(i);
// }

// // task # 23 (* tree)
// let ast = '*';

// first: for (let i = 0; i < 100; i++) {
//     console.log(ast);
//     ast += '*';
//     if (ast === '**********') {
//         break first;
//     }
// }
// console.log()


// //task 23.3

// // 1st 

// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// // 2nd

// for (let i = 20; i >= 10; i--) {
//     console.log(i)
//     if (i == 14) {
//         break;
//     }
// }

// // 3rd

// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }

// // 4th

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// // solution for 4 with 'while'


// let i = 2;
// while (i < 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }



// // 5th


// // const arrayOfNumbers = [];

// // for (i = 5; i <= 10; i++) {
// //     arrayOfNumbers.push(i);
// // }
// // console.log(arrayOfNumbers);



// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 5; i <= 10; i++) {
//         //arrayOfNumbers.push(i);
//         arrayOfNumbers[i - 5] = i;
//     }
//     console.log(arrayOfNumbers);

//     // Не трогаем
//     return arrayOfNumbers;

// }


// //task 23.4 
// // ex.1

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);


// // ex.2

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// console.log(data);

// for (let i = 0; i < data.length; i++) {
//     if (typeof (data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof (data[i]) === 'string') {
//         data[i] = data[i] + ' - done';
//     }
// }
// console.log(data);

// // ex.3

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 0; i < data.length; i++) {
//     result[i] = data[data.length - 1 - i];
// }
// console.log(result);

// //task 23.5
// // ex.1  tree ***

// const lines = 5;
// let result8 = '';
// for (let i = 0; i <= lines; i++) {

//     for (let j = 0; j < lines - i; j++) {
//         result8 += ' ';
//     }

//     for (let k = 0; k < 2 * i + 1; k++) {
//         result8 += '*';
//     }

//     result8 += '\n';
// }

// console.log(result8);
// // solved with tip








// // const lines = 5;
// // let result = '';

// // for (let i = 0; i <= lines; i++) {
// //     for (let j = 0; j < lines - i; j++) {
// //         result += " ";
// //     }
// //     for (let j = 0; j < 2 * i + 1; j++) {
// //         result += "*";
// //     }
// //     result += "\n";
// // }

// // console.log(result)