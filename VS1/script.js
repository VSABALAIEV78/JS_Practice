const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log('Посмотрено фильмов: ' + numberOfFilms);

const personalMovieDB = {
    count: '',
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

const movies = {

};

const filmName = prompt('Один из последних посмотренных фильмов?', '');
const score = +prompt('На сколько оцените его?', '');


movies[filmName] = score;

// got a solution. works with [], but not with the dot > movies.filmName
console.log(movies);