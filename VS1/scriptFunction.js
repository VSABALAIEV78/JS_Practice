'use strict';
console.log('Function test');


function writeSomeText(text) {
    console.log(text);
}

writeSomeText("Hello JS developers");


function SomeText() {
    console.log("Some Text");
}

SomeText();

function calc(a, b) {
    let c = a + b;
    return c;
}

calc(10, 15);
console.log(calc(10, 8.3));

const a1 = function () {
    let d = 4 * 2;
    return d;
};

console.log(a1());

const arrowF = (x, w) => {
    return (x - w);
};
console.log(arrowF(5, 4));

const ar2 = () => console.log('--------- text_vs -------------');

ar2();



let x = 15;

function test1() {
    let x = '7.3';
    return x;
}

console.log(x);

const x1 = test1();
console.log(x1);





const m1 = confirm("M1 ---- ?");
const m2 = alert("M2 alert");
const m3 = prompt("M3 promt", "");


// task 27.1

function sayHello(text) {
    return 'Привет, ' + text;
}

console.log(sayHello('быдло'));


// task 27.2

function returnNeighboringNumbers(a) {
    const array1 = [a - 1, a, a + 1];
    return array1;
}

console.log(returnNeighboringNumbers(9));


// task 27.3

function getMathResult(num, repeat) {
    let result = num;
    for (let i = 2; i <= repeat; i++) {
        if (num > 0 && repeat > 0 && typeof (num) === typeof (repeat)) {
            result += '---' + num * i;
        } else {
            result = num;
        }

    }
    return result;
}
console.log(getMathResult(5, 8));