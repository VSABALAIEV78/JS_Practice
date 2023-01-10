// /* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Марвел",
            "Логан vs",
            "справедливости",
            "Ла-ла лэнд vs",
            "Одержимость",
            "Скотт Пилигрим против...",
            "А как же VSVS78"
        ]
    };

    const ads = document.getElementsByClassName('promo__adv'),
        genre = document.getElementsByClassName('promo__genre'),
        promoBG = document.getElementsByClassName('promo__bg'),
        filmsList = document.getElementsByClassName('promo__interactive-list'),
        film = document.getElementsByClassName('promo__interactive-item'),
        AD = document.querySelectorAll('.promo__adv img');

    // 1) revome ADs
    const removeAD = (arg) => {
        arg.forEach(item => {
            item.remove();
        }); // уберет картинки, оставит рекламный блок
    };

    removeAD(AD);

    // 2)
    const changeGenre = (arg) => {
        arg.textContent = 'Д1РРРАМА';
    };

    changeGenre(genre[0]);

    // 3) change image bg
    const changeBG = () => {
        promoBG[0].style.background = 'url("./img/bg.jpg") center center/cover no-repeat';
        promoBG[0].style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;';
    };
    changeBG();

    // 4) sorting films

    const sortAddList = () => {

        const f1 = () => {
            for (let i = 0; i < 5; i++) {
                //film[i].innerHTML = movieDB.movies[i];

                film[i].innerHTML = `${i+1}. ${movieDB.movies[i]}`;
            }
            return;
        };
        movieDB.movies.sort();
        f1();
    };

    sortAddList();


    //////
    const form = document.querySelector('form.add'),
        addFilm = form.querySelector('.adding__input'),
        checkbox = document.querySelector('[type="checkbox"]');


    form.addEventListener('submit', (event) => { // 
        event.preventDefault();

        let newFilm = addFilm.value; // берет значение введенного инпута в поле 
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortAddList();
            form.reset(); // сбрасывает настройки елемента
        }

    });


});