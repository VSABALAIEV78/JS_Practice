/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Марвел",
        "Логан vs",
        "Лига справедливости",
        "Ла-ла лэнд vs",
        "Одержимость",
        "Скотт Пилигрим против...",
        "VSVS78"
    ]
};

const ads = document.getElementsByClassName('promo__adv'),
    genre = document.getElementsByClassName('promo__genre'),
    promoBG = document.getElementsByClassName('promo__bg'),
    filmsList = document.getElementsByClassName('promo__interactive-list'),
    film = document.getElementsByClassName('promo__interactive-item');

// 1) revome ADs
ads[0].remove();

// 2) change genre
const div = document.createElement('div');
div.classList.add('promo__genre');
//genre[0].after(div1); - добавляет елемент в хтмл (не обязательно если  делать replace)
div.innerHTML = 'ДРАМА'; // добавляет текст в div тег
genre[0].replaceWith(div); // сам реплейс

// 3) change image bg

promoBG[0].style.background = 'url("./img/bg.jpg") center center/cover no-repeat';
promoBG[0].style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;';

// 4) sorting films

//console.log(film[0]);

const f1 = () => {
    for (let i = 0; i < 5; i++) {
        film[i].innerHTML = movieDB.movies[i];
    }
    return;
};
f1();


function setfilms() {
    for (let i = 0; i < 5; i++) {
        film[i].innerHTML = movieDB.movies[i];
    }
    return;
}
//console.log(setfilms());