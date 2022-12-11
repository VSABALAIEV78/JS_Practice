'use strict';

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

function start() {
    for (let i = 0; i < 1; i++) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? Введите число от 1', '');
        if (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            i--;
        }
    }
    personalMovieDB.count = numberOfFilms;
}

start();

function rememberMyFilms() {
    // cycle 2
    for (let j = 0; j < 1; j++) {
        filmName = prompt('Один из последних посмотренных фильмов?', '');
        if (filmName == null || filmName == '' || filmName.length < 4 || filmName.length >= 50) {
            j--;
        }

    }
    // cycle 3
    for (let i = 0; i < 1; i++) {
        score = +prompt('На сколько оцените его? (от 1 до 10)', '');

        if (score == null || score == '' || isNaN(score) || score <= 0 || score > 10) {
            i--;
        }
    }

    personalMovieDB.movies[filmName] = score;

    console.log(`Вопрос №1. Фильмов: ${numberOfFilms}`);
    console.log(`Вопрос №2. Наименование фильма: ${filmName}`);
    console.log(`Вопрос №3. Рейтинг: ${score}`);
}

rememberMyFilms();

function detectPersonalLevel() {

    for (let i = 0; i < 1; i++) {
        if (personalMovieDB.count < 10) {
            console.log(`Результат: Просмотрено довольно мало фильмов: ${personalMovieDB.count}`);
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log(`Результат: Вы классический зритель: ${personalMovieDB.count} фильмов`);
        } else if (personalMovieDB.count >= 30) {
            console.log(`Результат: Вы киноман: ${personalMovieDB.count} фильмов`);
        } else {
            console.log('Результат: error vs');
        }
    }

}

detectPersonalLevel();


function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

//showMyDB();

function showMyDB1(state) {
    if (!state) {
        console.log(personalMovieDB);
        console.log('privat has state = false');
    }
}

showMyDB1();


function writeMyGenres() {

    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр № ${i+1}`, '');

        if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') {
            i--;
        }
    }

}

writeMyGenres();

console.log(personalMovieDB);