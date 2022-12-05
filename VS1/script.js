"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const filmName = prompt('Один из последних посмотренных фильмов?', '');
const score = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[filmName] = score;

// got a solution. works with [], but not with the dot > movies.filmName v.2
console.log(personalMovieDB);



//operators IF 

const number = 19;

if (number > 20) {
    console.log('in bigger than 20');
} else if (number < 10) {
    console.log('in smaller that 10');
} else if (number >= 10 && number < 19) {
    console.log('number in range of 10 - 19');
} else {
    console.log('result = ' + number);
}


const num1 = 10;
(num1 > 8) && (num1 < "15") ? console.log(`correct = ${num1}`): console.log('error');

const num2 = 180; //строгое сравнение всегда
switch (num2) {
    case 9:
        console.log('incorrect');
        break;
    case 11:
        console.log('incorrect');
        break;
    case '10':
        console.log('incorrect types');
        break;
    case 10:
        console.log('correct');
        break;
    default:
        console.log('wtf?');
        break;
}