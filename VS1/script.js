'use strict';

//рекурсия  СТЕПЕНЬ

function pow(x, n) {
    if (n === 1) {
        return x; // 2
    } else { //6                5                 4                 3                 2                 1
        //       2            2                2                 2                 2                 2                 2
        return x * pow(x, n - 1); // pow(x, n - 1); // pow(x, n - 1); // pow(x, n - 1); // pow(x, n - 1); // pow(x, n - 1);
    }
}

//console.log(pow(2, 7));


function fib2(arg) {

    if (typeof (arg) !== 'number' || !Number.isInteger(arg) || arg < 0) {
        return '';
    } else if (arg === 0) {
        return '';
    } else if (arg === 1) {
        return '0';
    } else if (arg === 2) {
        return '0 1';
    }

    let fib = [0, 1];

    for (let i = 2; i < arg; i++) {

        fib[i] = fib[i - 2] + fib[i - 1];
    }

    let res = fib.toString();
    return res.replace(/[,]/g, ' ');

}

//console.log(fib2(10));

function fibo(number) {
    let res = [0, 1];
    if (number > 2) {
        for (let i = 2; i < number; i++) {
            res[i] = res[i - 2] + res[i - 1];
        }
    } else {
        return fibo(number - 2) + fibo(number - 1);
    }

    //let res01 = fibo.toString();
    //return res01.replace(/[,]/g, ' ');
}
//console.log(fibo(3));


function fibz(n) {
    let r1 = '0';
    if (n == 1 || n == 2) {
        return r1 += ' 1';
    } else {
        return (fibz(n - 2) + fibz(n - 1));
    }
}

//console.log(fibz(8));

//0 1 1 2 3 5 8 13 21 34 55

function factorial(fNum) {
    if (fNum <= 0) {
        return 1;
    } else if (!Number.isInteger(fNum) || isNaN(fNum)) {
        return 'Error';

    } else if (fNum === 1) {
        return 1;
    } else {
        return fNum * factorial(fNum - 1);

    }

}

console.log(factorial(9));

// Taks 47. Factorial + recursion solved