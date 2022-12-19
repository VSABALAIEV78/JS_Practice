"use strict";

let numberOfFilms,
    filmName,
    score;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 1st question
first: for (let i = 0; i < 1; i++) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? Введите число от 1', '');
    if (numberOfFilms > 0) {
        personalMovieDB.count = numberOfFilms;
        break first;
    } else {
        i--;
    }
}
console.log(`Вопрос №1. Фильмов: ${numberOfFilms}`);

// 2nd question
second: for (let i = 0; i < 1; i++) {
    filmName = prompt('Вопрос 2. Один из последних посмотренных фильмов?\nОт 4х символов', '');

    if (filmName != null && filmName.length > 3 && filmName.length < 50) {
        //break second;
    } else {
        i--;
    }
}
console.log(`Вопрос №2. Наименование фильма: ${filmName}`);

// 3rd question
third: for (let i = 0; i < 1; i++) {
    score = prompt('На сколько оцените его? (от 1 до 10)', '');

    if (score > 0 && score <= 10) {
        personalMovieDB.movies[filmName] = score;
        break third;
    } else {
        i--;
    }
}
// solved steps 1-3 - commited

console.log(`Вопрос №3. Рейтинг: ${score}`);

for (let i = 0; i < 1; i++) {
    if (personalMovieDB.count < 10) {
        console.log(`Просмотрено довольно мало фильмов: ${personalMovieDB.count}`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log(`Вы классический зритель: ${personalMovieDB.count} фильмов`);
    } else if (personalMovieDB.count >= 30) {
        console.log(`Вы киноман: ${personalMovieDB.count} фильмов`);
    } else {
        console.log('error vs');
    }
}

console.log(personalMovieDB);
// finished task # 24.2 updated