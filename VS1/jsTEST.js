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