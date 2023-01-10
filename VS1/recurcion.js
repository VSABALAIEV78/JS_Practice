'use strict';
//0 1 1 2 3 5 8 13 21 34 55

function factorial(fNum) {
    if (fNum <= 0) {
        return 1;
    } else if (!Number.isInteger(fNum) || isNaN(fNum)) {
        return 'Error';

    } else if (fNum === 1) {
        return 1;
    } else {
        //      5                4              3                           2                2 = 1
        return fNum * factorial(fNum - 1); // fNum * factorial(fNum - 1); fNum * factorial(fNum - 1);
    } //        120              24              6                            2            

}

console.log(factorial(5)); //