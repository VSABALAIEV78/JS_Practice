const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: '',
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};


let filmName = prompt('Один из последних посмотренных фильмов?', '');
let filmScore = +prompt('На сколько оцените его?', '');

let movies = {
    filmName: filmScore
};
// semi-solution > filmName is not rewrited
console.log(movies);