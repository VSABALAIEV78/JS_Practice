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

//0 1 1 2 3 5 8 13 21 34 55

function fibo(number) {

    // if (number === 0) {
    //     return '';

    // } else if (number === 1) {
    //     return '0';

    // } else if (number === 2) {
    //     return '0 1';

    if (number === 1) {
        let c = [0, 1];
        for (let i = 2; i < number; i++) {
            c[i] = c[i - 2] + c[i - 1];
        }
        number = c[number - 1];
        return number; // 0


    } else {
        //       6                   5                  4                     3                 2                       1
        //console.log(number + fibo(number - 1)); // fibo(number - 1)   fibo(number - 1)    fibo(number - 1)    fibo(number - 1)    fibo(number - 1)
        //                               1                  1                   2                     3                   5               8 
        let res = number * fibo(number - 1);
        //res -= number;
        return res;
    }
}

console.log(fibo(7));


// 0    1   1   2   3   5   8   13  21

// 1    2   3   4   5   6   7   8   9














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

//console.log(factorial(5)); // 120

// Taks 47. Factorial + recursion solved