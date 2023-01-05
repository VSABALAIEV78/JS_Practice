// /* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

'use strict';

// const movieDB = {
//     movies: [
//         "Марвел",
//         "Логан vs",
//         "справедливости",
//         "Ла-ла лэнд vs",
//         "Одержимость",
//         "Скотт Пилигрим против...",
//         "А как же VSVS78"
//     ]
// };

// const ads = document.getElementsByClassName('promo__adv'),
//     genre = document.getElementsByClassName('promo__genre'),
//     promoBG = document.getElementsByClassName('promo__bg'),
//     filmsList = document.getElementsByClassName('promo__interactive-list'),
//     film = document.getElementsByClassName('promo__interactive-item'),
//     AD = document.querySelectorAll('.promo__adv img');

// // 1) revome ADs

// //ads[0].remove();

// AD.forEach(item => {
//     item.remove();
// }); // уберет картинки, оставит рекламный блок

// // 2) change genre
// const div = document.createElement('div');
// div.classList.add('promo__genre');
// //genre[0].after(div1); - добавляет елемент в хтмл (не обязательно если  делать replace)
// div.innerHTML = 'ДРАМА'; // добавляет текст в div тег
// //genre[0].replaceWith(div); // сам реплейс
// genre[0].textContent = 'ДРРРАМА';

// // 3) change image bg

// promoBG[0].style.background = 'url("./img/bg.jpg") center center/cover no-repeat';
// promoBG[0].style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;';

// // 4) sorting films

// //console.log(film[0]);

// movieDB.movies.sort();

// const f1 = () => {
//     for (let i = 0; i < 5; i++) {
//         //film[i].innerHTML = movieDB.movies[i];
//         film[i].innerHTML = `${i+1}. ${movieDB.movies[i]}`;
//     }
//     return;
// };
// f1();


// function setfilms() {
//     for (let i = 0; i < 5; i++) {
//         film[i].innerHTML = `${i}. ${movieDB.movies[i]}`;
//     }
//     return;
// }
// //setfilms();

// //Task 44. Elements on the page + films - solved

// const btn1 = document.querySelectorAll('button');

// // btn.onclick = function () {
// //     alert('cliked 2');
// // };


// // клик
// // btn.addEventListener('click', (event) => {
// //     alert('cliked2');
// // });

// // ховер
// // btn.addEventListener('mouseenter', (event) => {
// //     console.log(event.target); // при ховере выводит в консоль
// //     event.target.remove(); // убирает елемент со страницы при ховере
// // });


// //let k = 0;

// // const deleteElement = (e) => {
// //     console.log('444');
// //     //k++;
// //     // if (k == 8) {
// //     //     btn.removeEventListener('click', deleteElement);
// //     // }
// // };


// // btn.addEventListener('click', (event) => {
// //     console.log('111');
// // });


// // let k = 0;

// // const deleteElement = (e) => {
// //     console.log('444');
// //     k++;
// //     if (k == 4) {
// //         btn1.removeEventListener('mouseenter', deleteElement);
// //     }
// // };


// // btn1.addEventListener('mouseenter', deleteElement);


// // let k = 0;

// // const deleteElement = (e) => {
// //     console.log('444');
// //     k++;
// //     if (k == 5) {
// //         btn1[0].removeEventListener('mouseenter', deleteElement);
// //     }
// // };

// // btn1[0].addEventListener('mouseenter', deleteElement);

// // /////



// // btn1[1].addEventListener('click', (event) => {
// //     console.log(event.target);
// //     btn1[1].remove();
// // });\\const btn1 = document.querySelector('button'); // поместили елемент в переменную

// let k = 0;

// //вынесли функцию одельно чтобы потом ее просто вызвать как аргумент в событии
// // (e) === (event)

// const deleteElement = (e) => {
//     console.log('444');
//     console.log(e);
//     console.log(e.target);
//     console.log(e.currentTarget);
//     k++;
//     if (k == 4) {
//         btn1[1].removeEventListener('mouseenter', deleteElement);
//     }
// };
// // после 4х ховеров событие прекратит выполнение

// btn1[1].addEventListener('mouseenter', deleteElement, {
//     once: true
// }); // добавили событие

// // 1. добавили событие 2. Ховер 4 раза 3. убрали событие после 4го ховера



// const ref = document.querySelector('.promo__menu-item');

// ref.addEventListener('mouseout', function (event) {
//     event.preventDefault();
//     console.log('gogodgo');
// });

// function res1(a, b) {
//     return a * b;
// }

// console.log(res1(3, 2));


// const res2 = function (a, b) {
//     return a + b;
// };

// console.log(res2(4, 3.5));

// const res3 = (a, b) => {
//     return a - b;
// };

// console.log(res3(5, 6));


// // >>>>>  child parent neibors

// //document.body
// //document.head
// //document.querySelector

console.log(document.body.childNodes); // не 100% все будут елементами, а ноды text или перенос

console.log(document.body.firstChild);
console.log(document.body.firstElementChild); // точно будет елемент, а не узел = перенос

console.log(document.body.lastChild);
console.log(document.body.lastElementChild); // точно будет елемент, а не узел = перенос


console.log(document.querySelector('#current')); // the '#' to select by ID with querrySelector
console.log(document.querySelectorAll('#current')[1]); // вконце [n] + querrySelectorall можно выбрать елемент из псевдомассива не обявляя переменную

console.log(document.querySelector('#current').parentNode.parentNode); //  ноды + елементы 2 .parentNode показывает родителя ("first") родителя >> class "wrapped"
console.log(document.querySelector('#current').parentElement); //  1 показывает родителя ("first") родителя >> class "wrapped" (100% будет елемент а не узел (как перенос сторки))



console.log(document.querySelector('[data-current="3"]')); //  data - в html позволяет выделить любой елемент, а -current="3" уже коткретный элемент
console.log(document.querySelector('[data-current="3"]').nextSibling); //  следущий елемент от текущего в этом же месте // получу ноду узел - перенос строки
console.log(document.querySelector('[data-current="3"]').previousSibling.previousSibling); //  2й предыдущий елемент в этом же месте // получу узел - перенос строки

onsole.log(document.querySelector('[data-current="3"]').nextElementSibling); //  следущий именно ЭЛЕМЕНТ от текущего в этом же месте