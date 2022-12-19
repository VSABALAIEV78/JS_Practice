'use strict';

let numberOfFilms,
    filmName,
    score;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    showMyDB: function () {
        if (personalMovieDB.privat !== true) {
            console.log(personalMovieDB);
        } else {
            console.log(personalMovieDB.privat);
        }
    },
    start: function () {
        for (let i = 0; i < 1; i++) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? Введите число от 1', '');
            if (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
                i--;
            }
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {

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

    },
    writeMyGenres: function () {

        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр № ${i}`, '');
            if (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == '') {
                i--;
            }
        }
        personalMovieDB.genres.forEach((key, i) => {
            console.log(`Любимый жанр # ${i+1} - это ${key}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat !== true) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }

};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();

personalMovieDB.writeMyGenres();

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();