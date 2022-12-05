const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: '',
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

personalMovieDB.count = numberOfFilms;

const filmName = prompt('Один из последних посмотренных фильмов?', '');
const score = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[filmName] = score;

// got a solution. works with [], but not with the dot > movies.filmName v.2
console.log(personalMovieDB.movies);