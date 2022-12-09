"use strict";

let numberOfFilms,
    filmName,
    score;


first: for (let i = 0; i < i + 1; i++) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? Введите число от 1', '');
    if (numberOfFilms > 0) {
        break first;
    }
}
console.log(`Вопрос №1. Фильмов: ${numberOfFilms}`);

second: for (let i = 0; i < i + 1; i++) {
    filmName = prompt('Вопрос 2. Один из последних посмотренных фильмов?\nОт 4х символов', '');

    if (filmName === null) {
        filmName = prompt('Вопрос 2. Один из последних посмотренных фильмов?\nОт 4х символов', '');
    } else if (filmName.length > 3 && filmName.length < 50) {
        break second;
    }
}
console.log(`Вопрос №2. Наименование фильма: ${filmName}`);

third: for (let i = 0; i < i + 1; i++) {
    score = prompt('На сколько оцените его? (от 1 до 10)', '');

    if (score > 0 && score < 10) {
        break third;
    }
}
// solved steps 1-3 - commited

console.log(`Вопрос №3. Рейтинг: ${score}`);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};